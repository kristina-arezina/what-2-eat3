import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GoButton from "./Button"

const useStyles = makeStyles(theme => ({
    textField: {
        width: "500px",
        top:"calc(30% - 50px)",
        height: 600,
        position: "absolute",
        left: "calc(50% - 250px)",
    },
    input: {
        color: "white"
    }
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div>
            <TextField
                rows="10"
                id="standard-multiline-static"
                label="Multiline"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                    className: classes.input
                }}
            />
            <GoButton/>
        </div>
    );
}