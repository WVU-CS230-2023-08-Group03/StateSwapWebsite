// Author: Hunter Harris

// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Avatar, 
  Typography, 
  Button, 
  Grid, 
  Box 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import { useAuth } from '../../components/newAuth/AuthContext';
import Listing2 from '../../components/Listing2/listing2';
import { 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  getFirestore, 
  onSnapshot, 
  addDoc, 
  orderBy, 
  query, 
  where, 
  serverTimestamp, 
  Timestamp, 
  collection 
} from 'firebase/firestore';
import { auth, firestore } from '../../firebase.js';

// Define the Profile component
const Profile = () => {
  // States to manage user data and listings
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [userListings, setUserListings] = useState([]); // State to store user's listings
  const navigate = useNavigate(); // Hook to manage navigation

  // Function to handle edit profile navigation
  const handleEditProfile = () => {
    navigate('/EditProfile');
  };

  // Function to handle messaging navigation
  const handleMessaging = () => {
    navigate('/Messaging');
  };

  // Accessing user information through the useAuth hook
  const { user } = useAuth();

  // Fetch user data and listings on component mount or user change
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        // Update profile information if user is signed in
        setUsername(user.displayName || 'Default Username');
        setProfileImage(user.photoURL || '');

        // Fetch user's listings based on user ID
        const userListingQuery = await getDocs(
          query(collection(firestore, 'listings'), where('userID', '==', user.uid))
        );

        // Extract listing data from fetched documents and update state
        const listings = userListingQuery.docs.map((doc) => doc.data());
        setUserListings(listings);
      } else {
        // Reset profile information if user is signed out
        setUsername('');
        setProfileImage('');
        setUserListings([]);
      }
    };

    fetchUserData();
  }, [user]); // Dependency array to execute the effect when the 'user' object changes

  return (
    <Box mt={5}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardHeader
              // Display user's profile avatar and username
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
                  {/* Button to initiate messaging */}
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
                  {/* Button to navigate to edit profile */}
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
          {/* Display user's listings */}
          {username}'s listings
        </Typography>
        <hr />
        <Grid container spacing={1}>
            {/* Display user's listings using Listing2 component */}
            {userListings.map((listing) => (
                <Grid item xs={12} sm={4} md={3} lg={2} key={listing.postID}>
                    <Listing2 
                      img={listing.image} 
                      title={listing.title} 
                      content={listing.content} 
                      userID={listing.userID} 
                      postID={listing.postID}
                    />
                </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
