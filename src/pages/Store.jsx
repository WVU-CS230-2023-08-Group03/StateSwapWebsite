import NavBar from "../components/NavBar.jsx"
import Listing from "../components/Listing.jsx"
import Messaging from "../components/Messaging.jsx"
import Listings from "../components/Listings.jsx"
import './Store.css'

//assets
import SampleMessages from '../assets/SampleMessages.txt';


function Store() {
    return (
    
    <div class = "store">
        

        <div class = "content">
            <Messaging messages={SampleMessages}/>
            <Listings />
        </div>

        <NavBar />
    </div>)
}

export default Store;