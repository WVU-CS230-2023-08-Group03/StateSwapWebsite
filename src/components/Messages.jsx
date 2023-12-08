import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { firestore, getDocs, collection, onAuthStateChanged, auth } from '../firebase';

const Messages = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState(['']);
  const handleClose = () => setShow(false);

  const [UID, setUID] = useState('');

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in
      setUID(user.uid);
      console.log(UID + ' Is the UID');
      try {
        const querySnapshot = collection(firestore, 'messages', "Billy", 'Received');
        getDocs(querySnapshot).then((snapshot) => {
          let msgs = []
          snapshot.docs.forEach((doc) => {
              msgs.push({ ...doc.data()}["msg"]);
          })
          console.log(msgs + " is data");
          setMessages(msgs);
        })
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    } else {
      // User is signed out
      setUID(null);
      return;
    }
  });

  const handleShow = async () => {
    setShow(true);
    
  };
  
 


  return (
    <>
 
      <Button variant="primary" onClick={handleShow}>
        View Messages
      </Button>

      <Modal show={show} onHide={handleClose}>
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
