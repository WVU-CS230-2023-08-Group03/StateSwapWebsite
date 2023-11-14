import React, { useState } from 'react';
import ListingModal from '../ListingModal/ListingModal.jsx';
import Report from '../Report/Report.jsx'; // Import the Report component

const Listing = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false); // Add state for the Report component

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openReport = () => {
    setIsReportOpen(true);
  };

  const closeReport = () => {
    setIsReportOpen(false);
  };

  return (
    <div className="Listing">
      <img src={props.image} className="image" alt="Listing" />
      <button onClick={openModal}>View Details</button>
      <button onClick={openReport}>Report</button>
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
      {isModalOpen && (
        <ListingModal title={props.title} image={props.image} description={props.description} closeModal={closeModal} />
      )}
      {isReportOpen && <Report closeModal={closeReport} />} {/* Render the Report component */}
    </div>
  );
};

export default Listing;
