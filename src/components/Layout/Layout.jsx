// Layout Component
import NavBar from "../Navbar/NavBar";
import Messaging from "../Messaging/Messaging.jsx";
import SampleMessages from '../../assets/SampleMessages.txt';
import Profile from '../../pages/profile/Profile.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = (props) => {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            overflowY: "hidden",
            backgroundColor: 'black',
            color: 'white'
        }}>
            <div style={{
                height: "15vh"
            }}>

                <div className="App">
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </BrowserRouter>
                </div>

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
    )
}

export default Layout;