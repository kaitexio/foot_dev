import React from "react";
import styles from "./notFound.module.scss";

const NotFound = () => {
    return (
        <div className={styles.root}>
            <div className={styles.statusCode}>
                404
            </div>
        </div>

    )
}

export default NotFound;