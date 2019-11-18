import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textField: {
        width: "200px",
        top: "340px",
        left:"40%",
        height: 80,
        position: "absolute",

    }}));

export default function GoButton() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained"
                    className={classes.textField}
            >
                GO
            </Button>
        </div>
    );
}