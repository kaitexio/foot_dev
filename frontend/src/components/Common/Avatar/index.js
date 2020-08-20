import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const AvatarIcon = ({kind}) => {
    const classes = useStyles();

    switch (kind) {
        case 'small':
            return (
                <Avatar className={classes.small}/>
            )
        case 'medium':
            return (
                <Avatar className={classes.medium}/>
            )

        case 'large':
            return (
                <Avatar className={classes.large}/>
            )

    }
}

export default AvatarIcon;