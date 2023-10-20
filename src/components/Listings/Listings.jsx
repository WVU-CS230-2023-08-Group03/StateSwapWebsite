import './Listings.css'
import Listing from '../Listing/Listing.jsx'

//assets
import HondaCivic from '../../assets/HondaCivic.jpg';

const Listings = (props)=>{
    return (
        <div class="Listings">
                {Array(25).fill(null).map(() => (
                    <Listing image={HondaCivic} title="Honda Civic" description="2012 honda civic 150000 miles good condition leather interior heated seats lorem ipsum dolor el sedat in nominum lorem ipsum dolor el sedatg in nominum lorem ipsum"></Listing>
                ))}
            </div>
    )
}

export default Listings;