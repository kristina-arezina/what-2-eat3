import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Salmon() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
                    Food
                </Typography>
                <Typography variant="h5" component="h2" color="textPrimary" style={{textTransform: "lowercase"}}>
                    Berries <span>🍓</span>
                </Typography>
                <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Berries are rich in flavonoid, which helps regulate mood and improve memory and reduces inflammation.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Typography style={{color:"#000000"}}> Learn More</Typography></Button>
            </CardActions>
        </Card>
    )
}