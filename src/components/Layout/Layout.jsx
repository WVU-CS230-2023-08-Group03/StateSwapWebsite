import NavBar from "../Navbar/NavBar"
import Messaging from "../Messaging/Messaging.jsx"

import SampleMessages from '../../assets/SampleMessages.txt';

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
                <NavBar/>
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

export default Layout