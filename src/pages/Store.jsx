import NavBar from "../components/NavBar.jsx"
import Listing from "../components/Listing.jsx"
import Messaging from "../components/Messaging.jsx"
import './Store.css'

//assets
import HondaCivic from '../assets/HondaCivic.jpg';


function Store() {
    return (
    
    <div>
        <NavBar />
        <p class="spacer"></p>
        <Messaging />
        <div class="spacer"></div>
        <div class="listings">
            {Array(25).fill(null).map(() => (
                <Listing image={HondaCivic} title="Honda Civic" description="2012 honda civic 150000 miles good condition leather interior heated seats lorem ipsum dolor el sedat in nominum lorem ipsum dolor el sedatg in nominum lorem ipsum"></Listing>
            ))}
        </div>
        
    </div>)
}

export default Store;