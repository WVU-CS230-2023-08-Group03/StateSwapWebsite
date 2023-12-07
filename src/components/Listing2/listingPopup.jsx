import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import { CardActionArea } from '@mui/material';
import listing2 from './listing2';
import Report from '../Report/Report.jsx';

function listingPopup({ img, title, content, setMessageInitiated, setTradeInitiated, isExpanded, setExpanded }) {

    const [reportInitiated, setReportInitiated] = useState(false);

    if (!isExpanded) {
        return null;
    }


    return (
        <Card sx={{
            position: 'fixed',
            top: '10%',
            left: '25%',
            width: '50%',
            zIndex: '999',
            left: '25%',
        }}
            >
            <CardActionArea onClick={() => {
                console.log('content expanded set to false');
                setExpanded(false);
            }}>
                <CardMedia
                    component="img"
                    height="50%"
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