import React from "react";

import styles from "./ranking.module.scss";
import setImage from "../../utils/setImage";
import Text from "../Common/Text";

const Ranking = ({itemList}) => {
    return (
        <div className={styles.content}>
            {itemList.map((item, index) =>
                <a key={index} className={styles.sideNews} href={`news/${item.id}`}>
                    <div className={styles.rank}>{index + 1}</div>
                    <div className={styles.sideNewsImage}
                         style={{backgroundImage: `url(${setImage()})`}}/>
                    <div className={styles.sideNewsBody}>
                        <div className={styles.sideNewsTitle}>
                            {item.title}
                        </div>
                        <Text children={item.media} component={"media"}/>
                        <Text children={item.diff_time} component={"time"}/>
                    </div>
                </a>
            )
            }
        </div>

    );
}
export default Ranking;