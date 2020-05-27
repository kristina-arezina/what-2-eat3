import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Egg() {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{textTransform: "uppercase"}}>
                    Food
                </Typography>
                <Typography variant="h5" component="h2" color="textPrimary" style={{textTransform: "lowercase"}}>
                    Eggs <span role="img" aria-label="egg">🥚</span>
                </Typography>
                <Typography color="textSecondary" style={{textTransform: "uppercase"}}>
                    Reason
                </Typography>
                <Typography variant="body2" component="p">
                    Both the white and yolk of an egg are rich in nutrients, including proteins, vitamins and minerals.
                    Eggs contain all 9 essential amino acids, are highly concentrated with
                    vitamins and minerals and are among the best sources of choline you can get.
                </Typography>
            </CardContent>
        </Card>
    )
}
