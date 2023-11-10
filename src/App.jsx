import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './pages/Store';
import Profile from './pages/profile/Profile';
import Layout from './components/Layout/Layout.jsx';
import './App.css';
import Navbar from './components/Navbar/NavBar.jsx';
import Messaging from './components/Messaging/Messaging.jsx';
import createListing from "./components/Listing/createListing.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path = "/store" element = {<Store />} />

          <Route path = "/createListing" element = {<createListing/>} /> 
          //profile
          //Store
          //search
          //help
          //create listing
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
