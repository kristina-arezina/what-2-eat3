import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
        </Card>
    )
}
