import './Messaging.css'
import React, { useState, useEffect } from 'react';

const Messaging = (props) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(props.messages) // Assuming props.messages contains the path to your text file
            .then((response) => response.text())
            .then((text) => {
                // Split the text into an array of messages based on newlines
                const messageArray = text.split('\n');
                setMessages(messageArray);
            })
            .catch((error) => {
                console.error('Error fetching the file:', error);
            });
    }, [props.messages]);

    return (
        <div className="Messaging" style={{
            display: "flex",
            flexDirection: "column-reverse"

        }}>
            {messages.map((message, index) => (

                <div key={index} className="message" style = {{
                    border: "1px solid black",
                    borderRadius: "3px",
                    backgroundColor: index%2 == 0? "lightgray" : "white",
                    allignSelf: index%2 == 0? "flex-start" : "flex-end",
                }}>
                    {message}
                </div>
            ))}
        </div>
    )
}

export default Messaging;