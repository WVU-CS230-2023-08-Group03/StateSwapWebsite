import styles from './NavBar.module.css';
import {Link} from "react-router-dom";
import { useState } from 'react';


//onClick= {() => setPage("Profile")}
const NavBar = () => {
    //const [currentPage, setPage] = useState("Store");
    return (
        <div className={styles.NavBar}>
            <h1>Mountain State Swap</h1>
            <div className={styles.links}>
                <a href="./Profile"> Profile </a>
                <a href="./Store">Store</a>
                <a href="./Search">Search</a>
                <a href="./Help">Help</a>
            </div>
        </div>
    )
}


export default NavBar;