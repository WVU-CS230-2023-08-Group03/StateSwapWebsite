import "./profile.css";
import Card from 'react-bootstrap/Card';
import Listings from "../../components/Listings/Listings.jsx"
import test_img from './test_img.jpg';

function Profile(){
    //username should be the string found after "profile" in the URL
    //swapsite.com/profile/username
    //for now I have it set to scoobertdoobert
    var username = "scoobertdoobert";

    
    return(
       <div>
        <div style = {{justifyContent:'center', alignItems:'center', display:'flex'}}> 
        
            <Card style={{ backgroundColor:"grey" ,width: '20rem', color: "white"}}>
           
                <Card.Body>
            <       Card.Img variant="top" src={test_img} className="profilePic"/>
            <       Card.Title style={{fontSize: '26px',justifyContent:'center',marginLeft:"auto", marginRight:"auto", display:'flex'}}>{username}</Card.Title>
                    <Card.Text style={{fontWeight:"bold"}}>
                         About Me:
                    </Card.Text>
                    <Card.Text>
                     ({username}'s bio goes here).
                    </Card.Text>
                    <button className="report">Report</button>
                    <button className="edit_or_message">Edit Profile</button>
                </Card.Body>
            </Card> 

        </div>
        <h1 style={{color:"black", marginLeft:"0px", marginRight:"auto"}}>{username}'s listings</h1>
        <hr></hr>
        <Listings/>
      </div>
    );
    
}
//NOTE: edit_or_message will either be "edit profile" or "send message" depending on whether or not the profile
//being observed belongs to the logged-in user


export default Profile;