import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import React from 'react';
import './Home.css'

const Home = () => {
    return (

        <Container className="home-container" maxWidth="sm">
            <Card className="homeCard" sx={{ maxWidth: 345 }}>
                <CardMedia

                    height="500"
                    image=""
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Welcome to The Red Chilly Spice Karte
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Container>

    );
};

export default Home;