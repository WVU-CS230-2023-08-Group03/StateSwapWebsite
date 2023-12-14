import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc, getDocs, getFirestore, onSnapshot, addDoc, orderBy, query, serverTimestamp, Timestamp, collection } from 'firebase/firestore';
import { auth, firestore } from '../../firebase.js';

const Messages = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([]);
  const [UID, setUID] = useState('');
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setUID(user.uid);
          console.log(UID + ' Is the UID');

          if (UID != "") {
            const colRef = collection(firestore, 'messages',UID,'Received');
            getDocs(colRef).then((snapshot)=>{
             
              snapshot.docs.forEach((doc) => {
              var objData = {...doc.data()}
              messages.push(("From UID: " + objData["id"] +" With message: " + objData["msg"]));
                
              })
              
              
            })

       
          
           
          }
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, () => {
      fetchData();
    });

    return () => unsubscribe(); 

  }, [UID]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Messages
      </Button>

      <Modal show={show} onHide={handleClose} style={{ marginTop: '50px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Messages;
