import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    height: 1000,
    marginLeft:"10%"
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
    height: 500,
    width:"70%",
  },
  paper2: {
    margin: theme.spacing(1),
    height: 400,
    width:"50%",
  },
  toggle:{
    color:'#f4f4f4',
  },
  button: {
    marginTop:'2%',
    marginLeft:'calc(50% - 200px)',
    backgroundColor: "#2E0854"
  }
}));

export default function TextAbout() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>
      <FormControlLabel
      className={classes.toggle} 
        control={<Switch className={classes.toggle} checked={checked} onChange={handleChange} />}
        label="What is What2Eat?"
      />
      </Button>
      
      <div className={classes.container}>
        <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon />
            </svg>
          </Paper>
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper elevation={4} className={classes.paper2}>
            <svg className={classes.svg}>
              <polygon />
            </svg>
          </Paper>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon />
            </svg>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}