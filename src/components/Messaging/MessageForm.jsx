import { useState, useEffect } from 'react';
import { firestore, addDoc, collection, onAuthStateChanged, auth } from '../../firebase';

function MessageForm() {
  const [message, setMessage] = useState('');
  const [UID, setUID] = useState('');
  const [recip, setRecip] = useState('');
  const [isUIDSet, setIsUIDSet] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        setUID(user.uid);
        setIsUIDSet(true);
      } else {

        setUID(null);
        setIsUIDSet(false);
        alert('Not signed in');
        return;
      }
    });
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isUIDSet || UID === '') {
      
      alert('UID is not set');
      return;
    }

    const msgRef = collection(firestore, 'messages', recip, 'Received');

    addDoc(msgRef, {
      msg: message,
      id: UID,
    });

    setMessage('');
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
            disabled={!isUIDSet} 
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
          disabled={!isUIDSet} 
        />
      </label>
      <br />
      <button type="submit" disabled={!isUIDSet}>
        Send Message
      </button>
    </form>
  );
}

export default MessageForm;
