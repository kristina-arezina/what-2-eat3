import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Apple() {

    return (
<Card >
    <CardContent>
        <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
            Food
        </Typography>
        <Typography variant="h5" component="h2" color="textPrimary" style={{textTransform: "lowercase"}}>
            Apples <span>🍎</span>
        </Typography>
        <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
            Reason
        </Typography>
        <Typography variant="body2" component="p">
            Rich in important antioxidants, flavanoids, and dietary fiber. Help reduce cellular death
            that is caused by oxidation and inflammation of neurons.
        </Typography>
    </CardContent>
</Card>
    )
}
