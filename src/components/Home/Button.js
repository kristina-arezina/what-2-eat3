import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textField: {
        width: "200px",
        top: "50%",
        left:"calc(50% - 100px)",
        height: 80,
        position: "absolute",
        background: "#2E0854",
        color:"white"
    },
}));

export default function GoButton() {
    const classes = useStyles();

    return (
        <div>
            <Button
                href="/results"
                variant="contained"
                    className={classes.textField}
            >
                GO
            </Button>
        </div>
    );
}