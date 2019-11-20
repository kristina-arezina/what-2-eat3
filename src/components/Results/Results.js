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
                This is a sheet of paper.
            </Typography>
            <Typography className={classes.font} component="p">
                Paper can be used to build surface or other elements for your application.
            </Typography>
        </Paper>
    );
}