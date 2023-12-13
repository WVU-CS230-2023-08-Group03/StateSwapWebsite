// GoogleSignInButton.jsx
import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const GoogleSignInButton = () => {
  const [user] = useAuth(auth);

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName}!</p>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleSignInButton;
