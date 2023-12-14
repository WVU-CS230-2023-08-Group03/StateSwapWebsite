import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Report from 'src/components/Report/Report.jsx';
import ListingPopup from './listingPopup';

function Listing2({ img, title, content, userID, postID }) {
    const [isExpanded, setExpanded] = useState(false);
    const [messageInitiated, setMessageInitiated] = useState(false);
    const [tradeInitiated, setTradeInitiated] = useState(false);
    const [reportInitiated, setReportInitiated] = useState(false);

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
                
            </Card>

            <ListingPopup
                img={img}
                title={title}
                content={content}
                userID={userID}
                setMessageInitiated={setMessageInitiated}
                setTradeInitiated={setTradeInitiated}
                isExpanded={isExpanded}
                setExpanded={setExpanded}
            />

            {/* {reportInitiated && <Report />} Render Report component if reportInitiated is true */}
        </div>
    );
}

export default Listing2;
