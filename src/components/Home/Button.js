import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textField: {
        width: "200px",
        left:"calc(50% - 100px)",
        height: 80,
        background: "#2E0854",
        color:"white",
        top: "80px",
    },
}));

export default function GoButton() {
    const classes = useStyles();

    return (
        <div>
            <Button
                href="/results"
                
                    className={classes.textField}
            >
                GO
            </Button>
        </div>
    );
}