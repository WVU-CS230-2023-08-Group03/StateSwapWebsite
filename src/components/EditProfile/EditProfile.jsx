
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { firestore, auth } from 'firebase/app';


function EditProfile() {
    const [imagePreview, setImagePreview] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const labelStyle = {
      textAlign: "left" // Aligns the label text to the left
    };
  
    const formGroupStyle = {
      display: "flex",
      flexDirection: "column", // Aligns the form elements vertically
      alignItems: "flex-start" // Aligns the form elements to the left
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
      }
  };


  const handleSaveChanges =  async() => {
    try {
      // Get the currently authenticated user
      const user = auth.currentUser;

      // Update the user profile in Firebase Authentication
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      // Update the user data in Firestore (adjust the collection and document path accordingly)
      await firestore.collection('users').doc(user.uid).set({
        firstName,
        lastName,
        email,
        // Add other fields as needed
      });

      console.log('Changes saved!');
      alert('Changes saved!');
    } catch (error) {
      console.error('Error saving changes:', error.message);
      alert('Error saving changes. Please try again.');
    }
  };


  const handleBackToProfile = () => {
    // Add logic to navigate back to the profile page
    navigate('/profile'); // Assuming the route to the profile page is '/profile'
  };

    
	return (
		<div>
		<div class="container bootstrap snippets bootdey">
        <h1 class="text">Edit Profile</h1>
        <hr/>
	    <div class="row">
      <div class="col-md-3">
        <div class="text-center">
            <div className="image-container">
              {imagePreview && <img src={imagePreview} alt="Preview" className="img-fluid rounded-circle image-preview" />}
            </div>
        <h6>Choose profile photo</h6>
      <input type="file" class="form-control" onChange={handleFileChange} ref={fileInputRef} />
    </div>
  </div>
      
      <div class="col-md-9 personal-info">
        <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert"></a> 
          <i class="fa fa-coffee"></i>
          Fill out the following information.
        </div>
        

        
        <form class="form-horizontal" role="form">
        <div class="text-center">
          <h3>Personal info</h3>
       </div>
          <div class="form-group" style={formGroupStyle}>
            <label class="col-lg-3 control-label" style={labelStyle}>First name:</label>
            <div class="col-lg-8">
            <input class="form-control" type="text" id="name" placeholder="First Name" autocomplete="given-name"/>
            </div>
          </div>
          <div class="form-group" style={formGroupStyle}>
            <label class="col-lg-3 control-label" style={labelStyle}>Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" id="name" placeholder="Last Name" autocomplete="family-name"/>
            </div>
          </div>
          <div class="form-group" style={formGroupStyle}>
            <label class="col-lg-3 control-label" style={labelStyle}>Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" id="email" placeholder="billybob@gmail.com"/>
            </div>
          </div>
          <div class="form-group" style={formGroupStyle}>
            <label class="col-lg-3 control-label" style={labelStyle}>Time Zone:</label>
            <div class="col-lg-8">
              <div class="ui-select">
                <select id="user_time_zone" class="form-control">
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                  <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                  <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                  <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
  </div>
        {/* Save Changes Button */}
        <button className="btn btn-primary" onClick={handleSaveChanges}>
        Save Changes
      </button>

      {/* Back to Profile Button */}
      <button className="btn btn-secondary" onClick={handleBackToProfile}>
        Back to Profile
      </button>
</div>
<hr/>
		</div>
	);
}
export default EditProfile;