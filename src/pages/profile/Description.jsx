//seperate component for an "about me" section of the profile
//should contain description, contact info, profile pic, etc
import Card from 'react-bootstrap/Card';

function Description(){
    //username = window.location.pathname + "/"; //this is probably not a smart way of getting the username from the url
    //however, i need the username from the url so i can make calls to the database
    username_array = (window.location.pathname + "/").split("/");
    username = username_array[2]; //the username should be the second array element here

    //eventually, make it so an empty username variable defaults to showing the logged in user's profile

    return(
    <Card style={{ width: '18rem', color: "grey" }}>
      <Card.Img variant="top" src="./test_img.jpg/100px180" />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>
          This will be {username}'s bio.
        </Card.Text>
        
      </Card.Body>
    </Card>

    );
}

export default Description;