import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const MessageInput = ({ selectedUser }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Implement sending messages to Firestore or your messaging backend
    // ...

    // Clear the input after sending
    setNewMessage('');
  };

  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={9}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          fullWidth
          disabled={!newMessage || !selectedUser}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default MessageInput;
