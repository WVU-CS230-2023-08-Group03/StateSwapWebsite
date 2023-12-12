import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './pages/Store';
import Profile from './pages/profile/Profile.jsx';
import Layout from './components/Layout/Layout.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import './App.css';
import Navbar from './components/Navbar/NavBar.jsx';
import Messaging from './components/Messaging/Messaging.jsx';
import CreateListing from "./components/Listing/createListing.jsx";
import ReportView from './components/Report/reportView.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/Store" element = {<Store />} exact/>
          <Route path = "/createListing" element = {<CreateListing/>} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path = "/reportView" element = {<ReportView />}/>
          <Route path = "/" element = {<Store />} exact/>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;