import React from 'react';
import Button from '@mui/material/Button';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useAuth } from './AuthContext'; // Replace with your actual import

const GoogleSignInButton = () => {
  const { user } = useAuth(); // Assuming useAuth provides the user object
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const signedInUser = result.user;
      console.log('User signed in:', signedInUser);
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Sign-Out Error:', error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="text" color="inherit" onClick={handleSignOut}>
            {user.displayName} Sign out
          </Button>
        </div>
      ) : (
        <Button variant="text" color="inherit" onClick={handleSignInWithGoogle}>
          Sign in with Google
        </Button>
      )}
    </div>
  );
};

export default GoogleSignInButton;
