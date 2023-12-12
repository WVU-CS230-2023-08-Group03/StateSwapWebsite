import React, { useState } from 'react';
import './createListing.css';
import '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase.js';

const CreateListing = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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

    const generatePostID = () => {
        // Generating a random ID of length 8
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 8;
        let randomID = '';
        for (let i = 0; i < length; i++) {
            randomID += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomID;
    };

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
