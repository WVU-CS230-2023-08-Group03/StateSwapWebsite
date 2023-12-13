import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Avatar, Typography, Button, Grid, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

  useEffect(() => {
    const auth = getAuth();

    // Add an observer to listen for changes in user authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUsername(user.displayName || 'Default Username');
        setProfileImage(user.photoURL || '');
      } else {
        // User is signed out
        setUsername(''); // Reset username and profile image
        setProfileImage('');
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box mt={5}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardHeader
              avatar={<Avatar src={profileImage || 'https://via.placeholder.com/155'} alt="Profile" />}
              title={username}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="div">
                {/* Content removed */}
              </Typography>
            </CardContent>
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
