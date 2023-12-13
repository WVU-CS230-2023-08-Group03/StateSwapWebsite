import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './pages/Store';
import Profile from './pages/profile/Profile.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import './App.css';
import Navbar from './components/Navbar/NavBar.jsx';

import CreateListing from "./components/Listing/createListing.jsx";
import ReportView from './components/Report/reportView.jsx';
import MessageForm from './pages/MessageForm.jsx';
import Messaging from './components/Messaging.jsx';
import SignInUp from './pages/SignInUp.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: '70px' /* Adjust this value based on your navbar height */ }}>
          <Routes>
            <Route path="/Store" element={<Store />} exact />
            <Route path="/createListing" element={<CreateListing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/reportView" element={<ReportView />} />
            <Route path="/message" element={<Messaging />} />
            <Route path="/login" element={<SignInUp />} />
            <Route path="/" element={<Store />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;