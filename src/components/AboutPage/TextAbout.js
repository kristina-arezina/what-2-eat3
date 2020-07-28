import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    marginLeft:"7%",
    marginRight:"2%",
    marginTop: "8%"
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
  card: {
    maxWidth: 345,
  }
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [checked] = React.useState(true);

  return (
    <div className={classes.root}>
      
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
      </Grid>
    </div>
  );
}

