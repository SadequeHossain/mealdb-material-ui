import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import './foodCard.css'

const Foodcard = (props) => {
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.food

    const navigate = useNavigate();

    const url = `/foodCard/${idMeal}`

    const handleClick = () => {
        navigate(url);


    }
    return (
        <Card className="card" sx={{ maxWidth: 300 }}>

            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }

                title={strMeal}
                subheader="March 07, 2022"
            />
            <CardMedia
                component={"img"}
                height="194"
                image={strMealThumb}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" >
                    {strInstructions.slice(0, 200)}
                </Typography>
            </CardContent>
            <br />

            {/* <Link to={url}> Visit Me</Link> */}

            <Button onClick={handleClick} variant="outlined">See Details</Button>

        </Card>
    );
};

export default Foodcard;