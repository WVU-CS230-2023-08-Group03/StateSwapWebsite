import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Report from '.././Report/Report';

function ListingPopup({ img, title, content, setMessageInitiated, setTradeInitiated, isExpanded, setExpanded }) {
    const [isReportVisible, setIsReportVisible] = useState(false);

    if (!isExpanded) {
        return null;
    }

    const handleReportClick = () => {
        setIsReportVisible(true); // Set report window visibility to true when the Report button is clicked
        console.log('clicked report');
    };

    const handleCloseReport = () => {
        setIsReportVisible(false); // Close the report window
    };

    return (
        <Card sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%', // Adjusted width
            maxWidth: '500px', // Adjusted maximum width
            maxHeight: '800px', // Adjusted maximum height to 90vh
            overflow: 'auto', // Enable scrolling if content exceeds the height
            backgroundColor: '#fff', // Set background color to white
            zIndex: '999', // Set a higher z-index value
        }}>
            <CardActionArea onClick={() => {
                console.log('content expanded set to false');
                setExpanded(false);
            }}>
                <CardMedia
                    component="img"
                    height="250" // Adjusted height
                    image={img}
                    alt="Image Alt Text"
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    variant="contained"
                    sx={{ width: '33%' }}
                    onClick={() => {
                        console.log('clicked message');
                        setMessageInitiated(true);
                    }}>
                    Message
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: '33%' }}
                    onClick={() => {
                        console.log('clicked trade');
                        setTradeInitiated(true);
                    }}>
                    Trade
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: '33%' }}
                    onClick={handleReportClick}
                >
                    Report
                </Button>
            </CardActions>
            {/* Render the Report component */}
            {isReportVisible && (
                <Report handleClose={handleCloseReport} />
            )}
        </Card>
    );
}

export default ListingPopup;
