import React, { useState } from 'react';
import './Report.css';
import { collection, doc, setDoc } from 'firebase/firestore'; // Import Firestore functions from Firebase
import { firestore } from '../../firebase'; // Import your Firebase configuration
import { getAuth, onAuthStateChanged, auth} from '../../firebase'; // Import your Firebase authentication configuration


const Report = () => {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user.uid);
            }
            else{
                setUser("test");
            }
        }
    )



    const [selectedCategory, setSelectedCategory] = useState('profanity');
    const [description, setDescription] = useState('');
    const [isReportVisible, setIsReportVisible] = useState(true);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleClose = () => {
        setIsReportVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add Firestore logic here
            const docRef = doc(collection(firestore, 'reports'));

            await setDoc(docRef, {
                UID: user,
                category: selectedCategory,
                description: description
            });

            console.log('Document successfully written!');
        } catch (error) {
            console.error('Error writing document: ', error);
        }

        // Clear form fields after submission
        setSelectedCategory('profanity');
        setDescription('');

        // Close the report window after submission
        handleClose();
    };

    return (
        <div className={`report ${isReportVisible ? 'visible' : 'hidden'}`}>
            <div className="header">
                <h1>Report</h1>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="category">Select Category:</label>
                <select
                    id="category"
                    className="select-box"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="profanity">Profanity</option>
                    <option value="violence">Violence</option>
                    <option value="explicit">Explicit</option>
                    <option value="narcotics">Narcotics</option>
                    <option value="hateSpeech">Offensive/Hate Speech</option>
                    <option value="stolen">Stolen</option>
                    <option value="other">Other</option>
                </select>

                <p>Description</p>
                <textarea
                    className="description-box"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter description here..."
                ></textarea>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Report;
