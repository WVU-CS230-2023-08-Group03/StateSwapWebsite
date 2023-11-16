import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import { CardActionArea } from '@mui/material';

import ListingPopup from './listingPopup';

function listing2({ width, img, title, content }) {

    const [isExpanded, setExpanded] = useState(false);

    const [messageInitiated, setMessageInitiated] = useState(false);
    const [tradeInitiated, setTradeInitiated] = useState(false);



    return (
        <div>
            <Card sx={{
                // width: width,
                // height: width * 1.4,
                overflow: 'hidden',
                margin: '5 auto',
            }}
            >
                <CardActionArea onClick={() => {
                    console.log('content expansion set to true');
                    setExpanded(true)
                }}>
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
                        sx={{ width: '50%' }}
                        onClick={() => {
                            console.log('clicked message');
                            setMessageInitiated(true);
                        }}>
                        Message
                    </Button>

                    <Button
                        variant="contained"
                        sx={{ width: '50%' }}
                        onClick={() => {
                            console.log('clicked trade');
                            setTradeInitiated(true);
                        }}>
                        Trade
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
            ></ListingPopup>

        </div>
    );
}

export default listing2;