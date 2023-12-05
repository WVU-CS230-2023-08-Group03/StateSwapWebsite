import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Card from 'react-bootstrap/Card';
import Listings from "../../components/Listings/Listings.jsx";
import { firestore, auth } from 'firebase/app';


function Profile() {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [profileData, setProfileData] = useState({
    articles: 0,
    followers: 0,
    rating: 0,
  });

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/EditProfile'); 
  };
  const handleMessaging = () => {
    navigate('/Messaging'); 
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch the current user's data from Firebase Authentication
        const user = auth.currentUser;
        setUsername(user.displayName || 'Default Username');
        setProfileImage(user.photoURL || ''); // You may need to update this based on your data structure

        // Fetch additional user data from Firestore (adjust the collection and document path accordingly)
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          setProfileData({
            articles: userData.articles || 0,
            followers: userData.followers || 0,
            rating: userData.rating || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        // You may want to handle errors or redirect the user to an error page
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-3">
          {/* ... (existing card structure) */}
          <div className="d-flex align-items-center">
            <div className="image">
              <img src={profileImage || 'https://via.placeholder.com/155'} className="rounded" width="155" alt="Profile" />
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0">{username}</h4>
              <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column">
                  <span className="articles">Articles</span>
                  <span className="number1">{profileData.articles}</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="followers">Followers</span>
                  <span className="number2">{profileData.followers}</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="rating">Rating</span>
                  <span className="number3">{profileData.rating}</span>
                </div>
              </div>
              <div className="button mt-2 d-flex flex-row align-items-center">
                <button className="btn btn-sm btn-outline-primary w-100" onClick={handleMessaging}>Message</button>
                <button className="btn btn-sm btn-primary w-100 ml-2" onClick={handleEditProfile}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ color: 'black', marginLeft: '0px', marginRight: 'auto' }}>{username}'s listings</h1>
        <hr></hr>
        <Listings />
      </div>
    </div>
  );
}

export default Profile;