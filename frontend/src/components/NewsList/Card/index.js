import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import classes from './newsListCard.module.scss';
import setImage from "../../../utils/setImage";
import Text from "../../Common/Text";


const NewsCard = ({news}) => {
    const {id, title, img, date, media, diff_time} = news;
    const image = setImage()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <a href={`/news/${id}`}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        title={title}
                        className={classes.image}
                    />
                    <CardContent className={classes.cardContent}>
                        <div className={classes.articleInfo}>
                            <Text children={media} component={"media"}/>
                            <Text children={diff_time} component={"time"}/>
                        </div>
                        <div className={classes.cardText}>
                            {title}
                        </div>
                    </CardContent>
                </a>
            </CardActionArea>
        </Card>
    );
}

export default NewsCard;