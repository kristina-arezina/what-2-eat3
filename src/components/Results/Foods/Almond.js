import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function Almond() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
                    Food
                </Typography>
                <Typography color="textPrimary" variant="h5" component="h2" style={{textTransform: "lowercase"}}>
                    Almonds
                </Typography>
                <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Almonds are high in healthy monounsaturated fats, fiber, protein and various important nutrients. Additionally, they
                    are high in antioxidants that can protect your cells from oxidative damage, a major contributor to aging and disease.
                </Typography>
            </CardContent>
        </Card>
    )
}
