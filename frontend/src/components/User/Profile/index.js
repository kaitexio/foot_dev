import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from '@material-ui/core';

import styles from "./profile.module.scss";

const Profile = props => {
    const {className, me, ...rest} = props;
    return (
        <div
            {...rest}
            className={styles.userHeader}
        >
            <div className={styles.userIcon}>
                <Avatar
                    alt="Person"
                    src={me.img}
                />

            </div>
            <div className={styles.userInfo}>
                {me.username ? (
                    me.username
                ) : (
                    "No Account"
                )
                }
            </div>
        </div>
    );
};


Profile.propTypes = {
    className: PropTypes.string,
    user: PropTypes.object
};


export default Profile;