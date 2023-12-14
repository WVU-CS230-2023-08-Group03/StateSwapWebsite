import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { getAuth, listUsers } from 'firebase/auth';

const ConversationDropdown = ({ selectedUser, onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await listUsers(auth);
        const formattedUsers = userList.map((user) => ({
          id: user.uid,
          displayName: user.displayName || 'Unknown User',
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [auth]);

  const conversations = users; // Assuming users are fetched and formatted as conversations

  return (
    <FormControl fullWidth>
      <InputLabel>Select User</InputLabel>
      <Select value={selectedUser || ''} onChange={(e) => onSelectUser(e.target.value)}>
        <MenuItem value="" disabled>
          Select a user
        </MenuItem>
        {conversations.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            {user.displayName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ConversationDropdown;
