import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './MealDetails.css'

const Mealdetails = () => {

    const { idMeal } = useParams();

    const [meal, SetMeal] = useState([])

    const navigate = useNavigate();

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => SetMeal(data.meals[0]))

    }, [])

    const { strMealThumb, strMeal, strInstructions, strArea } = meal

    const handleClick = () => {
        navigate('/restaurant');
    }


    return (
        <Card className="carddetail" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="540"

                    image={strMealThumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Item Name: {strMeal}
                        <h5>Area: {strArea}</h5>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h3>How to Make?</h3>

                        {strInstructions}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <Button onClick={handleClick} variant="outlined">See Details</Button>
        </Card>
    );
};

export default Mealdetails;