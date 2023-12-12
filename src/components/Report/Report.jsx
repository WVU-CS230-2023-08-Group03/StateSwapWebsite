import React, { useState } from 'react';
import './Report.css';
import { collection, doc, setDoc } from 'firebase/firestore'; // Import Firestore functions from Firebase
import { firestore } from '../../firebase'; // Import your Firebase configuration
import { getAuth, onAuthStateChanged, auth } from '../../firebase'; // Import your Firebase authentication configuration

const Report = () => {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user.uid);
        } else {
            setUser("test");
        }
    });

    const [selectedCategory, setSelectedCategory] = useState('profanity');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [isReportVisible, setIsReportVisible] = useState(true);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleClose = () => {
        setIsReportVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = doc(collection(firestore, 'reports'));

            await setDoc(docRef, {
                UID: user,
                title: title,
                category: selectedCategory,
                description: description
            });

            console.log('Document successfully written!');
        } catch (error) {
            console.error('Error writing document: ', error);
        }

        setSelectedCategory('profanity');
        setDescription('');
        setTitle('');
        handleClose();
    };

    return (
        <div className={`report ${isReportVisible ? 'visible' : 'hidden'}`}>
            <div className="header">
                <h2>Report</h2>
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

                <textarea
                    className="description-box"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter description here..."
                ></textarea>
                <textarea
                    className="title-box"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter title here..."
                ></textarea>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Report;
