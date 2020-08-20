import React from 'react';
import {Avatar, Divider} from "@material-ui/core";
import classes from "./commentList.module.scss";

function CommentList({comment}) {
    return (
        <div className={classes.commentContainer}>
            {comment.map((item, index) => (
                <div key={index} className={classes.commentRow}>
                    <div>
                        <div className={classes.listAvatar}>
                            <Avatar style={{width: 35, height: 35}}/>
                        </div>
                        <div className={classes.userprofile}>
                            <div className={classes.nameWrapper}>
                                <div className={classes.name}>{item.user.username}</div>
                            </div>
                        </div>
                        <div className={classes.commentTime}>
                            {item.diff_time}
                        </div>
                    </div>


                    <div className={classes.commentWrapper}>
                        <div className={classes.comment}>
                            {item.text}
                        </div>
                    </div>
                    <Divider variant="inset"/>
                </div>
            ))}
        </div>
    )
}

export default CommentList;