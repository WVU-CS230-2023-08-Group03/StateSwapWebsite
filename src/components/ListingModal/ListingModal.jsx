import React from 'react';
import './ListingModal.css'

const ListingModal = ( props ) => {

    console.log("listing modal created");
    return <div class="modal">
        <h1>{props.title}</h1>
        <img src={props.image} />
        <p>{props.description}</p>
        <button onClick={props.closeModal}>Close</button>
    </div>


}

export default ListingModal;