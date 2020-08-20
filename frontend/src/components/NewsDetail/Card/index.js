import React from 'react';
import moment from "moment";


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import WebIcon from '@material-ui/icons/Web';
import Button from "@material-ui/core/Button";

import classes from "./newsCard.module.scss";
import setImage from "../../../utils/setImage";
import Text from "../../Common/Text";


const NewsDetailCard = ({news}) => {
    const image = setImage()
    const {title, media, url, date} = news;
    return (
        <div className={classes.box}>
            <Card className={classes.card}>
                <a href={url}>
                    <CardMedia
                        component="img"
                        height="210"
                        image={image}
                        className={classes.image}
                    />
                </a>
                <CardContent className={classes.cardContent}>
                    <div className={classes.title}>
                        <a href={url}>
                            <h1>
                                {title}
                            </h1>
                        </a>
                    </div>
                    <div className={classes.info}>
                        <span className={classes.span}>
                            <WebIcon fontSize="small" className={classes.caption}/>
                            <Text className={classes.caption} children={media} component={'media'}/>
                        </span>
                        <span className={classes.span}>
                             <AccessTimeIcon fontSize="small" className={classes.caption}/>
                             <Text className={classes.caption} children={moment(date).format("M月D日S時mm分")}
                                   component={'time'}/>
                        </span>
                    </div>
                    <div className={classes.button}>
                        <Button variant="contained" fullWidth={true} href={url}>続きを読む</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


export default NewsDetailCard;
