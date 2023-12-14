import React, { useState } from 'react';
import { useAuth } from '../../components/newAuth/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase.js';
import { TextField, Button, Grid, Box, Input, InputAdornment, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

/*
Authors: Branden Purdum and Devin Booth
*/

const CreateListing = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { user } = useAuth();

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
        width: '100%', // Full width
        marginBottom: '20px',
    };

    const generatePostID = () => {
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

        if (!imagePreview || !title || !content) {
            console.log('Please fill in all fields');
            return;
        }

        try {
            const listingsCollection = collection(firestore, 'listings');

            const postID = generatePostID();

            await addDoc(listingsCollection, {
                userID: user.uid, // Store user ID with the listing
                image: imagePreview,
                title: title,
                content: content,
                postID: postID,
            });

            setTitle('');
            setContent('');
            setImagePreview(null);

            console.log('Listing created successfully!');
        } catch (error) {
            console.error('Error creating listing:', error);
        }
    };

    return (
        <Box mt={5}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                        <Input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="fileInput">
                            <Button
                                variant="contained"
                                component="span"
                                color="primary"
                                size="large"
                                style={{ marginBottom: '10px' }}
                            >
                                <AddPhotoAlternateIcon style={{ marginRight: '8px' }} />
                                Choose File
                            </Button>
                        </label>
                        {imagePreview && (
                            <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                        )}
                        <TextField
                            type="text"
                            placeholder="Enter Title"
                            style={fieldStyle}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            multiline
                            rows={4}
                            placeholder="Enter Content here..."
                            style={fieldStyle}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Button
                            className="btn btn-outline-success"
                            type="submit"
                            style={{ width: '100%', marginTop: '10px', backgroundColor: '#2196F3', color: 'white' }}
                        >
                            Create Posting
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreateListing;
