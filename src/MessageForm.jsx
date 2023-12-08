import { useState } from 'react';
import { firestore, addDoc ,getDocs, collection, onAuthStateChanged, auth } from './firebase'

function MessageForm() {
   
    const [message, setMessage] = useState('');
    const [UID, setUID] = useState('');
    const [recip, setRecip] = useState('');
    const [messages, setMessages] = useState(['']);


   

    const handleSubmit = (e) => {
        e.preventDefault();
       
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUID(user.uid);
                console.log(UID+ " Is the UID");
              } else {
                // User is signed out
                setUID(null);
                alert("Not signed in");
                return;
                
              }
        });

        const querySnapshot = collection(firestore, 'messages', "Billy", 'Received');
        getDocs(querySnapshot).then((snapshot) => {
          let msgs = []
          snapshot.docs.forEach((doc) => {
              msgs.push({ ...doc.data()}["msg"]);
          })
          console.log(msgs + " is data");
          setMessages(msgs);
        })
        
const msgRef = collection(firestore, "messages",recip,"Recieved");
     
     addDoc(msgRef, {
        msg: message,
        id: UID
     })

        setMessage('');
        setUID('');
        setRecip('');
      };

      return (
        <form onSubmit={handleSubmit}>
   
        <div>
        <label>
        To:
        <input
          type="text"
          value={recip}
          onChange={(e) => setRecip(e.target.value)}
          placeholder="Enter user ID"
        />
        </label>
        </div>
          <label>
            Message:
            <textarea
              rows="4"
              cols="50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
          </label>
          <br />
          <button type="submit">Send Message</button>
        </form>
      );
    }
    
    export default MessageForm;