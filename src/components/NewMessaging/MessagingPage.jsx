import React, { useState, useEffect } from 'react';
import ConversationDropdown from './ConversationDropdown';
import MessagesContainer from './MessagesContainer';
import MessageInput from './MessageInput';
import { Container, Typography } from '@mui/material';

const MessagingPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Load conversations or set up initial state
    // ...

  }, []); // Trigger when the component mounts

  return (
    <Container>
      <Typography variant="h4" align="center" mt={3}>
        Messaging App
      </Typography>
      <ConversationDropdown selectedUser={selectedUser} onSelectUser={setSelectedUser} />
      <MessagesContainer selectedUser={selectedUser} />
      <MessageInput selectedUser={selectedUser} />
    </Container>
  );
};

export default MessagingPage;
