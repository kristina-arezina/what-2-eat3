import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
        marginTop:"160px",
        marginLeft:"10px",
        marginRight:"10px",
        flexGrow: 1,

    },
    background:{
        backgroundColor:"#f4f4f4"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Results2() {
    const classes = useStyles();

    return (
        <div className={classes.background}>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Apple/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Almond/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Pear/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Avocado/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Egg/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Asparagus/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <DarkChocolate/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Cucumber/>
                </Grid>
            </Grid>
        </div>
                </div>
    );
}