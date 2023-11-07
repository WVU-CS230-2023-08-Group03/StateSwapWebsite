import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Messaging from "../Messaging/Messaging";
// Assuming Card and Contact are imported from their respective files
// import Card from './Card'; 
// import Contact from './Contact';
import SampleMessages from '../../assets/SampleMessages.txt';
import Profile from "../../pages/profile/Profile"; 

const Layout = (props) => {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            overflowY: "hidden",
        }}>
            <div style={{
                height: "15vh"
            }}>
                <div className="App">
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path="../../pages/profile/Profile" element={<Profile />}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>
                <div style={{
                    height: "85vh",
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Messaging messages={SampleMessages} />
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;