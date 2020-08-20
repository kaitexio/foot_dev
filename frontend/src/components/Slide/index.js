import React from "react";
import classes from "./Slide.module.scss";

import moment from "moment";
import setImage from "../../utils/setImage";

const Slide = (props) => {
    const {title, media, time,image} = props;
    const img = setImage()
    return (
        <div className={classes.slideContainer} style={{backgroundImage: `url(${img})`,backgroundSize:"cover",backgroundPosition:"center",backgroundColor:`rgba(0,0,0,0.4)` }}>
            <div className={classes.slideInfo}>
                <div className={classes.title}>
                    <h1>{title}</h1>
                </div>
                <div className={classes.SubText}>
                    <div><h5>{media}</h5></div>
                    <div className={classes.time}><h5>{moment(time).format("M月D日S時mm分")}</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Slide;