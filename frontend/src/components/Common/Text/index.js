import React from "react";
import style from "./text.module.scss";

const Text = ({children, component}) => {

    switch (component) {
        case 'time':
            return <span className={style.time}>{children}</span>
        case 'media':
            return <span className={style.media}>{children}</span>
        case 'caption':
            return <div className={style.caption}>{children}</div>

        default:
            return <div className={style.default}>{children}</div>
    }
}

export default Text;