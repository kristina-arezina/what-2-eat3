import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Results2 from "./Results2"


const useStyles = makeStyles({
    card: {
        maxWidth: "230px",
        marginTop:"10px",
        marginLeft:"10px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <div>
            <Results2/>
            <Grid container >
                <Grid item xs={3} >
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Food
                </Typography>
                <Typography variant="h5" component="h2">
                    Apples 🍎
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Rich in important antioxidants, flavanoids, and dietary fiber. Help reduce cellular death
                    that is caused by oxidation and inflammation of neurons.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
            </Grid>
            <Grid item xs={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Food
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Almonds
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Reason
                    </Typography>
                    <Typography variant="body2" component="p">
                        Consuming almonds increases vitamin E levelsTrusted Source in the plasma and red blood cells.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </Grid>
            </Grid>

</div>
    );
}