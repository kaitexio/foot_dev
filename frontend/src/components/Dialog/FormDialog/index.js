import React, {useState} from 'react';


import classes from './formDialog.module.scss';

import {Button, useMediaQuery, useTheme} from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const FormDialog = ({children, buttonLabel, dialogTitle, variant, kind}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderInterface = (kind, buttonLabel, variant) => {
        if (kind === 'button') {
            return (
                <Button className={classes.button} type="button" color="primary" variant={variant} onClick={handleClickOpen}>
                    {buttonLabel}
                </Button>
            )
        } else if (kind === 'a') {
            return (<a onClick={handleClickOpen}>{buttonLabel}</a>)
        }
    }

    return (
        <div className={classes.root}>
            {renderInterface(kind, buttonLabel, variant)}
            <Dialog classes={{paper: classes.paper}} open={open} fullScreen={fullScreen} onClose={handleClose}
                    aria-labelledby="form-dialog-title" maxWidth="md">
                <DialogTitle className={classes.title} id="form-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <div className={classes.socialLogin}>
                        <button className={classes.buttonTw}>
                            <TwitterIcon style={{color: "#eaeaea"}}/>
                            <span>Twitterログイン</span>
                        </button>
                        <button className={classes.buttonFb}>
                            <FacebookIcon style={{color: "#eaeaea"}}/>
                            <span>Facebookログイン</span>
                        </button>
                    </div>
                    <Divider className={classes.divider}/>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}


export default FormDialog;