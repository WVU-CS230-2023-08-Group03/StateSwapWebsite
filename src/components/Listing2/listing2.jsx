import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Report from '../Report/Report.jsx';

import ListingPopup from './listingPopup';

function Listing2({ width, img, title, content }) {
    const [isExpanded, setExpanded] = useState(false);
    const [messageInitiated, setMessageInitiated] = useState(false);
    const [tradeInitiated, setTradeInitiated] = useState(false);
    const [reportInitiated, setReportInitiated] = useState(false);

    const openReport = () => {
        console.log('clicked report');
        setReportInitiated(true);
    };

    return (
        <div>
            <Card
                sx={{
                    overflow: 'hidden',
                    margin: '5 auto',
                }}
            >
                <CardActionArea onClick={() => setExpanded(true)}>
                    <CardMedia
                        component="img"
                        height="200px"
                        image={img}
                        alt="Image Alt Text"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{
                                maxHeight: 100,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                marginTop: 5,
                            }}
                        >
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

            <ListingPopup
                img={img}
                title={title}
                content={content}
                setMessageInitiated={setMessageInitiated}
                setTradeInitiated={setTradeInitiated}
                isExpanded={isExpanded}
                setExpanded={setExpanded}
            />

            {reportInitiated && <Report />} {/* Render Report component if reportInitiated is true */}
        </div>
    );
}

export default Listing2;
