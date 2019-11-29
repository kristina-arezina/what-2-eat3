import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Apple() {

    return (
<Card >
    <CardContent>
        <Typography color="textSecondary" gutterBottom>
            Food
        </Typography>
        <Typography variant="h5" component="h2">
            Apples 🍎
        </Typography>
        <Typography color="textSecondary">
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
    )
}