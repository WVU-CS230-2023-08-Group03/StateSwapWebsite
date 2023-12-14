import React from 'react';
import { Paper, Typography } from '@mui/material';

const MessagesContainer = ({ selectedUser }) => {
  const messages = []; // Load messages or set up initial state

  return (
    <Paper elevation={3} mt={2} p={2}>
      {selectedUser ? (
        messages.map((message) => (
          <div key={message.id} className={message.sender === selectedUser ? 'sent' : 'received'}>
            {message.text}
          </div>
        ))
      ) : (
        <Typography variant="subtitle1" align="center">
          Select a user to start messaging
        </Typography>
      )}
    </Paper>
  );
};

export default MessagesContainer;
