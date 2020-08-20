import React from "react";
//material ui
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {Skeleton} from '@material-ui/lab';
import {CardContent} from "@material-ui/core";


const useStyles = makeStyles(theme => ({

    media: {
        height: 190,
    },

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,

    },

    cardText: {
        height: 50,
        width: 250,
        textOverflow: 'ellipsis',
    },
    cardComment: {
        display: "flex",
    }

}))

const CardSkeleton = () => {
    const classes = useStyles();

    return (
        <>

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <Skeleton animation="pulse" variant="rect" className={classes.media}/>
                    <CardContent className={classes.cardContent}>
                        <div className={classes.cardText}>
                            <Skeleton animation="pulse" height={10} style={{marginBottom: 6}}/>
                            <Skeleton animation="pulse" height={10} width="80%"/>
                            <Skeleton animation="pulse" height={6} width="15%" style={{marginTop: 6}}/>
                        </div>
                    </CardContent>

                </Card>
            </Grid>
        </>
    );
}

export default CardSkeleton;