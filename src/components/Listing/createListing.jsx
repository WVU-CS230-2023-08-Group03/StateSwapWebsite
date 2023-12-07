import React, { useState } from 'react';
import './createListing.css';
import '../../firebase';

const CreateListing = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const fieldStyle = {
        width: '300px',
        marginBottom: '20px'
    }

    return (
        <div className="create-listing">

            <h1>Image preview</h1>
            <div className="image-container">
                {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
            </div>
            <label htmlFor="fileInput" className="file-label">
                Choose File
            </label>
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
            
            <div class="data-fields">

                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                    <input type="text" placeholder="Enter Description" style={fieldStyle} />
                    <input type="text" placeholder="Enter Suburb" style={fieldStyle} />
                    <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '5px' }}>Create Posting</button>
                </form>
            </div>
        </div>

    );
};

export default CreateListing;
