import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';

function listingPopup({ img, title, content, setMessageInitiated, setTradeInitiated, isExpanded, setExpanded }) {
    const [reportInitiated, setReportInitiated] = useState(false);

    if (!isExpanded) {
        return null;
    }

    return (
        <Card sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%', // Adjusted width
            maxWidth: '500px', // Adjusted maximum width
            maxHeight: '80vh', // Adjusted maximum height
            overflow: 'auto', // Enable scrolling if content exceeds the height
            backgroundColor: '#fff', // Set background color to white
            zIndex: '9999', // Set a higher z-index value
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
                    onClick={() => {
                        openReport;
                        console.log('clicked report');
                        setReportInitiated(true);
                    }}>
                    Report
                </Button>
            </CardActions>
        </Card>
    );
}

export default listingPopup;
