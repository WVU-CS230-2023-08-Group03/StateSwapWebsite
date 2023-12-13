import React from 'react';
import Button from '@mui/material/Button';
import logo1 from "../MSSlogo.jpg"
import logo2 from "../General-trading-products.jpg";
import { Link } from 'react-router-dom';

function Homepage() {
  const handleButtonClick = (action) => {
    // You can implement actions for each button click here
    switch(action){
        case "Privacy Policy":

    }
  };

  return (
    <div>
    
   

        <div >
          <img src={logo2} alt="Trading Products" />
        </div>

     <footer>
        <Link to="/privacy-policy">
          <Button>Privacy Policy</Button>
        </Link>
        <Link to="/terms-of-service">
          <Button>Terms of Service</Button>
        </Link>
        <Link to="/contact-us">
          <Button>Contact Us</Button>
        </Link>
      </footer>
    </div>
  );
}

export default Homepage;