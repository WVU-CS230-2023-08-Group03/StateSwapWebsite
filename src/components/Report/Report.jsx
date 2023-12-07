import React from 'react';
import './Report.css';
import '../../firebase';

const Report = (props) => {
    console.log("report created");

    return (
        <div className="report">
            <div style={{ textAlign: 'center' }}>
                <h1>Report</h1>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                <label htmlFor="category">Select Category:</label>
                <select id="category" style={{ marginBottom: '20px', width: '200px' }}>
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
                    style={{ height: '100px', width: '200px', paddingTop: '10px', paddingLeft: '10px', resize: 'vertical' }}
                    placeholder="Enter description here..."
                ></textarea>

                <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '5px', marginTop: '10px' }}>Submit</button>
            </form>
        </div>
    );
}

export default Report;
