import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Asparagus() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
                    Food
                </Typography>
                <Typography variant="h5" component="h2" color="textPrimary" style={{textTransform: "lowercase"}}>
                    Asparagus
                </Typography>
                <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Asparagus is a nutrient-packed vegetable. It is a very good source of fiber, folate,
                    vitamins A, C, E and K, as well as chromium, a trace mineral that enhances the ability of
                    insulin to transport glucose from the bloodstream into cells.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Typography style={{color:"#000000"}}> Learn More</Typography></Button>
            </CardActions>
        </Card>
    )
}