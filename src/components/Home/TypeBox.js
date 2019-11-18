import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GoButton from "./Button"
import '/Users/milanarezina/WebstormProjects/what-2-eat3/what2eat3/src/App.css';


const useStyles = makeStyles(theme => ({
    textField: {
        width: "500px",
        top:"100px",
        height: 600,
        left: "calc(50% - 250px)",
        position: "relative",
    },
    input: {
        color: "black"
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "yellow !important"
    }
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div className="parent">
            <TextField
                rows="10"
                id="standard-multiline-static"
                label="Multiline"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                    className: classes.input,
                    classes: {
                        notchedOutline: classes.notchedOutline
                    }                }}
            />
            <GoButton/>
        </div>
    );
}