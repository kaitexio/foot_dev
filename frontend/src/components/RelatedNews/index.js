import React from "react";


import styles from "./relatedNews.module.scss";
import setImage from "../../utils/setImage";
import Text from "../Common/Text";

const RelatedNews = ({itemList}) => {
    return (
        <div>
            {itemList.map((item, index) =>
                <a key={index} className={styles.sideNews} href={`${item.id}`}>
                    <div className={styles.sideNewsImage} style={{backgroundImage: `url(${setImage()})`}}/>
                    <div className={styles.sideNewsBody}>
                        <div className={styles.sideNewsTitle}>
                            {item.title}
                        </div>
                        <div className={styles.caption}>
                        <Text children={item.media} component={"media"}/>
                        <Text children={item.diff_time} component={"time"}/>
                        </div>

                    </div>
                </a>
            )
            }
        </div>
    );

}

export default RelatedNews;