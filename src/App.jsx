import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './pages/Store';
import Profile from './pages/profile/Profile';
import Layout from './components/Layout/Layout.jsx';
import './App.css';
import Navbar from './components/Navbar/NavBar.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
