import React, { useState } from 'react';
import './createListing.css';
import '../../firebase';

// Import firebase stuff
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase.js';

const CreateListing = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); // New state for content

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const listingsCollection = collection(firestore, 'listings');

            // Add a document to the 'listings' collection with image, title, and content data (without description)
            await addDoc(listingsCollection, {
                image: imagePreview, // Assuming imagePreview holds the image data (URL or base64)
                title: title,
                content: content // Include the content data here
            });

            // Reset form fields after submission
            setTitle('');
            setContent(''); // Reset content field
            setImagePreview(null);

            console.log('Listing created successfully!');
        } catch (error) {
            console.error('Error creating listing:', error);
        }
    };

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
            
            <div className="data-fields">

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                    <input 
                        type="text" 
                        placeholder="Enter Title" 
                        style={fieldStyle} 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    {/* Remove the description input field */}
                    <textarea // Change the input to textarea for content
                        placeholder="Enter Content here..." 
                        style={fieldStyle} 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                    ></textarea>
                    <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '5px' }}>Create Posting</button>
                </form>
            </div>
        </div>
    );
};

export default CreateListing;
