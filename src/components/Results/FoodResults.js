import React from "react";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core";
import Apple from "../Results/Foods/Apples.js"
import Almond from "../Results/Foods/Almond.js"
import Pear from "../Results/Foods/Pear.js"
import Avocado from "../Results/Foods/Avocado.js"
import Egg from "../Results/Foods/Egg.js"
import Asparagus from "../Results/Foods/Asparagus.js"
import DarkChocolate from "../Results/Foods/DarkChocolate.js"
import Cucumber from "./Foods/Berries.js"

const useStyles = makeStyles(theme => ({
    root: {
        marginTop:"13%",
        marginRight:"2%"
    },
}));

export default function FoodResults() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} >
                    <Apple/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Almond/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Pear/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Avocado/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Egg/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Asparagus/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DarkChocolate/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Cucumber/>
                </Grid>
            </Grid>
        </div>
)
}