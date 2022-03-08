import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import React from 'react';

import './About.css'

const About = () => {
    return (
        <Container className="about-container" maxWidth="sm">
            <Card className="homeCard" sx={{ maxWidth: 345 }}>
                <CardMedia

                    height="500"
                    image=""
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Contact us at:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Address:
                        <br />
                        Email:
                        <br />
                        Phone:
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Send Email</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default About;