import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Pear() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
                    Food
                </Typography>
                <Typography variant="h5" component="h2" color="textPrimary" style={{textTransform: "lowercase"}}>
                    Pears <span> 🍐</span>
                </Typography>
                <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Pears are a rich source of important minerals, such as copper and potassium.
                    Copper plays a role in immunity, cholesterol metabolism, and nerve function, whereas potassium aids
                    muscle contractions and heart function.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}