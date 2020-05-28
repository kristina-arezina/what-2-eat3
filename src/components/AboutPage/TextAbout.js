import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    marginLeft:"7%",
    marginRight:"2%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
  },
  toggle:{
    color:'#f4f4f4',
  },
  button: {
    marginTop:'2%',
    marginBottom:'2%',
    marginLeft:'calc(50% - 200px)',
    backgroundColor: "#8b5eb1"
  },
  card: {
    maxWidth: 345,
  }
}));

export default function AutoGrid() {
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
            label="Find out more about Care2Eat"
          />
        </Button>
      <Grid container spacing={3}>
      <Grid item xs>
      <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon />
            </svg>
          </Paper>
        </Grow>
        </Grid>

        <Grid item xs>
        <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon />
            </svg>
          </Paper>
        </Grow>
        </Grid>
      
        <Grid item xs>
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
        </Grid>
        <Grid item xs>
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
        </Grid>
      </Grid>
    </div>
  );
}

