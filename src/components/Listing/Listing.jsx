import './Listing.css';
import React from 'react';
import { useState } from 'react';
import ListingModal from '../ListingModal/ListingModal.jsx';

const Listing = (props)=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        
        <div class = "Listing">
            <img src = {props.image} class = "image"></img>
            <button onClick={openModal}>View Details</button>
            <p class = "title">{props.title}</p>
            <p class = "description">{props.description}</p>
            {isModalOpen && (
                <ListingModal title={props.title} image={props.image} description={props.description} closeModal={closeModal} />
            )}

        </div>
    )
}

export default Listing;