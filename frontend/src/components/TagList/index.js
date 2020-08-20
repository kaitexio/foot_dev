import React from "react";

import styles from "./tagList.module.scss";
import Chip from "@material-ui/core/Chip";

const TagList = ({itemList}) => {
    return (
        <>
            <div className={styles.content}>
                <ul className={styles.tagList}>
                    {itemList.map((item, key) =>
                        <li key={key}>
                            <Chip className={styles.chip} component="a" href={`tag/${item.name}`}
                                  variant="outlined" label={item.name} clickable/>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default TagList;