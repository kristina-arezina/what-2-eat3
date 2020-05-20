import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Results2 from "./Results2"

const useStyles = makeStyles(theme => ({

}));

const happy = "happy";

export default function Results() {
    const classes = useStyles();
    
    return (
        <div>
            <Results2 happy={happy}/>
        </div>
    );
}