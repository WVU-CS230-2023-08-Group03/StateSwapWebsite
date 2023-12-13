import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Avatar, Typography, Button, Grid, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import { useAuth } from '../../components/newAuth/AuthContext';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/EditProfile');
  };

  const handleMessaging = () => {
    navigate('/Messaging');
  };

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // User is signed in, update profile information
      setUsername(user.displayName || 'Default Username');
      setProfileImage(user.photoURL || '');
    } else {
      // User is signed out, reset profile information
      setUsername('');
      setProfileImage('');
    }
  }, [user]); // This effect will run whenever the 'user' object changes

  return (
    <Box mt={5}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardHeader
              avatar={<Avatar src={profileImage || 'https://via.placeholder.com/155'} alt="Profile" />}
              title={
                <Typography variant="h4" color="textPrimary">
                  {username}
                </Typography>
              }
            />
            <CardContent></CardContent>
            <Box p={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    onClick={handleMessaging}
                  >
                    Message
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={handleEditProfile}
                  >
                    Edit Profile
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Typography variant="h6" color="textPrimary">
          {username}'s listings
        </Typography>
        <hr />
      </Box>
    </Box>
  );
};

export default Profile;
