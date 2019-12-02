import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function DarkChocolate() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Food
                </Typography>
                <Typography variant="h5" component="h2">
                    Dark Chocolate <span>🍫</span>

                </Typography>
                <Typography color="textSecondary">
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Dark chocolate is rich in minerals, such as iron, magnesium, and zinc.
                    The cocoa in dark chocolate also contains antioxidants called flavonoids, which may provide several health benefits.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}