import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Avocado() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Food
                </Typography>
                <Typography variant="h5" component="h2">
                    Avocado 🥑
                </Typography>
                <Typography color="textSecondary">
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Avocados are loaded with healthy fats, fiber and various important nutrients.
                    Their potential health benefits include improving digestion, decreasing risk of depression, and protection against cancer.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}