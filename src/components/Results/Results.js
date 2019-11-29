import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Results2 from "./Results2"
import AppBar from '@material-ui/core/AppBar';



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        textAlign: "center",
        backgroundColor:"#379683",
        borderRadius: "1px",
        marginTop:"0px",
    },
    font:{
        color:"white"
    }
}));

export default function Results() {
    const classes = useStyles();

    return (
        <div>
            <AppBar elevation="1" className={classes.root}>
                <Typography className={classes.font} variant="h5" component="h3">
                    Sentiment analysis completed!
                </Typography>
                <Typography className={classes.font} variant="h5" component="p">
                    <b>Happiness</b> was detected in the text.
                </Typography>
                <Typography className={classes.font} variant="h5" component="p">
                    To enhance your happiness eat the following foods:
                </Typography>
            </AppBar>
            <Results2/>
        </div>
    );
}