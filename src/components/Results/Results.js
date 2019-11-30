import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Results2 from "./Results2"
import AppBar from '@material-ui/core/AppBar';



const useStyles = makeStyles(theme => ({

}));

export default function Results() {
    const classes = useStyles();

    return (
        <div>
            <Results2/>
        </div>
    );
}