import React, { useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import Button from '@mui/material/Button';

const GoogleSignInButton = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const signedInUser = result.user;
        setUser(signedInUser);
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Sign-Out Error:', error);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <Button variant="text" color="secondary" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      ) : (
        <Button variant="text" color="secondary" onClick={handleSignInWithGoogle}>
          Sign in with Google
        </Button>
      )}
    </div>
  );
};

export default GoogleSignInButton;
