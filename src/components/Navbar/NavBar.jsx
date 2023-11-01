import styles from './NavBar.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <h1>Mountain State Swap</h1>
            <div className={styles.links}>
                <a href="./profile"> Profile </a>
                <a href="./store">Store</a>
                <a href="./search">Search</a>
                <a href="./help">Help</a>
            </div>
        </div>
    )
}


export default NavBar;