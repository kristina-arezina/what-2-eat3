import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Avocado() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
                    Food
                </Typography>
                <Typography variant="h5" component="h2" color="textPrimary" style={{textTransform: "lowercase"}}>
                    Avocados <span role="img" aria-label="avocado">🥑</span>
                </Typography>
                <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Avocados are loaded with healthy fats, fiber and various important nutrients.
                    Their potential health benefits include improving digestion, decreasing risk of depression, and protection against cancer.
                </Typography>
            </CardContent>
        </Card>
    )
}
