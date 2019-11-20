import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop:"20px",
        backgroundColor:"#379683",
    },
    font:{
        color:"white"
    }
}));

export default function Results() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography className={classes.font} variant="h5" component="h3">
                Sentiment analysis completed!
            </Typography>
            <Typography className={classes.font} component="p">
                Happiness was detected in the text. To enhance your happiness eat the following foods:
            </Typography>
        </Paper>
    );
}