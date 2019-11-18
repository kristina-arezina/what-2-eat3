import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textField: {
        width: "500px",
        marginTop:"calc(10% - 50px)",
        height: 600,
        position: "absolute",
        marginLeft: "calc(50% - 250px)",
    },
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
            />
        </div>
    );
}