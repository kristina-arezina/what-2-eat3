import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function DarkChocolate() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
                    Food
                </Typography>
                <Typography variant="h5" component="h2" color="textPrimary" style={{textTransform: "lowercase"}}>
                    Dark Chocolate <span role="img" aria-label="chocolate">🍫</span>

                </Typography>
                <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Dark chocolate is rich in minerals, such as iron, magnesium, and zinc.
                    The cocoa in dark chocolate also contains antioxidants called flavonoids, which may provide several health benefits.
                </Typography>
            </CardContent>
        </Card>
    )
}
