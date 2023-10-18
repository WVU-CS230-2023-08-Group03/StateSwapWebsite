import './Messaging.css'
import React, { useState, useEffect } from 'react';

const Messaging = (props)=>{

    const [messages, setMessages] = useState('');
    useEffect(() => {
        fetch(props.messages) // Assuming props.messages contains the path to your text file
        .then((response) => response.text())
        .then((text) => {
            setMessages(text);
        })
        .catch((error) => {
            console.error('Error fetching the file:', error);
        });
    }, [props.messages]);

    return (
        <div class = "Messaging">
            <p>{messages}</p>
        </div>
    )
}

export default Messaging;