import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Foodcard from '../Foodcard/Foodcard';

import './Restaurant.css'

const Restaurent = () => {


    const [menue, setMenue] = useState([]);

    useEffect(() => {

        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken')
            .then(res => res.json())
            .then(data => setMenue(data.meals))



    }, [])

    console.log(menue)

    return (

        <Box className="box" sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    menue.map(food => <Grid item xs={12} sm={6} md={4} >

                        <Foodcard
                            food={food}
                            key={food.idMeal}></Foodcard>


                    </Grid>)
                }
            </Grid>

        </Box>

    );
};

export default Restaurent;