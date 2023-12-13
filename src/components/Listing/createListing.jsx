/*
Authors: Branden Purdum and Devin Booth
*/

import React, { useState } from 'react';
import './createListing.css';
import '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase.js';

/**
 * CreateListing component allows users to create a new listing with an image, title, and content.
 * Users can preview the selected image and submit the listing after providing necessary details.
 */
const CreateListing = () => {
    // State variables for image preview, title, and content
    const [imagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    /**
     * Handles the change of the image file input, providing a preview of the selected image.
     * @param {Event} e - The event object triggered by changing the file input
     */
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

    // Inline styling for form fields
    const fieldStyle = {
        width: '300px',
        marginBottom: '20px'
    };

    /**
     * Generates a random post ID of length 8 characters.
     * @returns {string} - Randomly generated postID
     */
    const generatePostID = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 8;
        let randomID = '';
        for (let i = 0; i < length; i++) {
            randomID += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomID;
    };

    /**
     * Handles the submission of the form.
     * Validates input fields and creates a new listing document in the 'listings' collection.
     * @param {Event} e - The event object triggered by form submission
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any of the fields are empty
        if (!imagePreview || !title || !content) {
            console.log('Please fill in all fields');
            return; // Prevent form submission if any field is empty
        }

        try {
            const listingsCollection = collection(firestore, 'listings');

            // Generate a postID
            const postID = generatePostID();

            // Add a document to the 'listings' collection with image, title, content, and postID data
            await addDoc(listingsCollection, {
                image: imagePreview,
                title: title,
                content: content,
                postID: postID // Add randomly generated postID
            });

            // Reset form fields after successful submission
            setTitle('');
            setContent('');
            setImagePreview(null);

            console.log('Listing created successfully!');
        } catch (error) {
            console.error('Error creating listing:', error);
        }
    };

    // JSX to render form elements and handle user input
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
                    <textarea 
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
