import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Foodcard from '../Foodcard/Foodcard';

import './Restaurant.css'

const Restaurent = () => {


    const [menue, setMenue] = useState([]);

    const [text, setText] = useState([]);

    const [menueTrue, setMeueTrue] = useState(false);

    const handleInput = () => {

        const inputText = document.getElementById('mealText').value

        setText(inputText);

        document.getElementById('mealText').value = "";


    }

    // console.log(text);

    useEffect(() => {

        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`

        fetch(url)
            .then(res => res.json())
            .then(data => setMenue(data.meals))

        if (menue.length > 0) {
            setMeueTrue(true);

            console.log(menueTrue);
        }



    }, [text])

    // console.log(menue)



    return (
        <div>

            <div className="searchBox">

                <input id="mealText" type="text" placeholder='Search your Favorite Meal???' />
                <button onClick={handleInput}>Search</button>

                <p>Item Found: {menue.length}</p>

            </div>

            <Box className="box" sx={{ flexGrow: 1 }}>


                <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        menue.length != 0 ?

                            menue.map(food => <Grid item xs={12} sm={6} md={4} >

                                <Foodcard
                                    food={food}
                                    key={food.idMeal}></Foodcard>


                            </Grid>)

                            :
                            <></>



                    }
                </Grid>

            </Box>
        </div>


    );
};

export default Restaurent;