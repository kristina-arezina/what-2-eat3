import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FoodResults from "./FoodResults.js";
import ResultsDrawer from "./Drawer.js"; 

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft:"10px",
        marginRight:"10px",
        flexGrow: 1,
        display: 'flex',
    },
    background:{
        backgroundColor:"#f4f4f4"
    },
}));

export default function Results2(props) {
    const classes = useStyles();


    return (
        <div className={classes.background}>
        <div className={classes.root}>
            <ResultsDrawer/>
            <FoodResults/>
           
        </div>
        </div>
    );
}