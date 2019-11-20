import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SimpleCard from "./Foods.js"

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        textAlign: "center",
        backgroundColor:"#379683",
    },
    font:{
        color:"white"
    }
}));

export default function Results() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography className={classes.font} variant="h5" component="h3">
                    Sentiment analysis completed!
                </Typography>
                <Typography className={classes.font} variant="h5" component="p">
                    <b>Happiness</b> was detected in the text.
                </Typography>
                <Typography className={classes.font} variant="h5" component="p">
                    To enhance your happiness eat the following foods:
                </Typography>
            </Paper>
            <SimpleCard/>
        </div>
    );
}