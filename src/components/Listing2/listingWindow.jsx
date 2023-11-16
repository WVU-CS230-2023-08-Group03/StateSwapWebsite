import { Button, Grid } from '@mui/material'
import { React, useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc, getDocs, getFirestore, onSnapshot, addDoc, orderBy, query, serverTimestamp, Timestamp, collection } from 'firebase/firestore';
import { auth, firestore } from '../../firebase.js';
import Listing2 from './listing2.jsx';

function listingWindow() {

    console.log("ListingWindow created");


    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const snapshot = await getDocs(collection(firestore, 'listings'));
                const listingsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setListings(listingsData);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchListings();
    }, []);


    return <Grid container spacing={1}>
            {listings.map((listing) => (
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Listing2 img={listing.image} title={listing.title} content={listing.content}></Listing2>
                </Grid>
            ))}
            {listings.map((listing) => (
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Listing2 img={listing.image} title={listing.title} content={listing.content}></Listing2>
                </Grid>
            ))}
            {listings.map((listing) => (
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Listing2 img={listing.image} title={listing.title} content={listing.content}></Listing2>
                </Grid>
            ))}
            {listings.map((listing) => (
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Listing2 img={listing.image} title={listing.title} content={listing.content}></Listing2>
                </Grid>
            ))}
        </Grid>
    


}

export default listingWindow;