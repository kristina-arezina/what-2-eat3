import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GoButton from "./Button"
import '../../App.css';


const useStyles = makeStyles(theme => ({
    textField: {
        width: "500px",
        top:"100px",
        height: 600,
        left: "calc(50% - 250px)",
        position: "relative",
    },
    parent:{
        backgroundColor:"#f4f4f4",
        backgroundAttachment: "scroll",
        },
    input: {
        color: "black"
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#2E0854 !important"
    },
    floatingLabelFocusStyle: {
        color: "black"
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.parent}>
            <TextField
                rows="10"
                id="standard-multiline-static"
                placeholder="How did your day go?"

                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                    className: classes.input,
                    classes: {
                        notchedOutline: classes.notchedOutline
                    }                }}
                InputPlaceholderProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
            />
            <GoButton/>
        </div>
    );
}