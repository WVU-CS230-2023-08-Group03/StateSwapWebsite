import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';

const ReportView = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reportsCollection = collection(firestore, 'reports');
        const querySnapshot = await getDocs(reportsCollection);

        const reports = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setReportData(reports);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{
      paddingTop: '20px', // Padding at the top
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', // Stack rectangles vertically
    }}>
      {reportData.map((report, index) => (
        <div key={report.id} style={{
          border: '1px solid black',
          borderRadius: '10px',
          paddingLeft: '10px',
          fontSize: '12px', // Adjust font size as needed
          lineHeight: '1.4', // Adjust line height for tighter or looser spacing
          width: '300px', // Adjust width as needed
          textAlign: 'left',
          backgroundColor: '#f0f8ff', // Light blue background color
          marginBottom: '20px',
          marginTop: index === 0 ? '0' : '20px', // Add margin only if not the first rectangle
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Report</h2>
          <p><strong>Title:</strong> {report.data.title}</p>
          <p><strong>UID:</strong> {report.data.UID}</p>
          <p><strong>Category:</strong> {report.data.category}</p>
          <p><strong>Description:</strong> {report.data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportView;
    