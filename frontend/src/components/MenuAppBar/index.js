import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

//material ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


import {requestLogout} from "../../actions/auth";
import FormDialog from "../Dialog/FormDialog";
import LoginForm from "../Form/Login";
import SignUpForm from "../Form/SignUp";
import Avatar from "../Common/Avatar";


import styles from './menuAppBar.module.scss';

const TopBar = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" color="secondary" className={styles.root}>
            <Toolbar className={styles.tool}>
                <NavLink exact to="/" className={styles.logo}>
                    <Typography variant="h2">
                        Foot
                    </Typography>
                </NavLink>
                {token ? (
                    <>
                        <div className={styles.menu}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar kind="small"/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <NavLink
                                    exact
                                    to='/setting'
                                >
                                    <MenuItem>

                                        アカウント設定</MenuItem></NavLink>
                                <Divider/>
                                <MenuItem onClick={() => dispatch(requestLogout())}>ログアウト</MenuItem>

                            </Menu>
                        </div>
                    </>
                ) : (
                    <div className={styles.menu}>
                        <FormDialog buttonLabel="ログイン" dialogTitle="ログイン" kind='a'>
                            <LoginForm/>
                        </FormDialog>
                        <FormDialog buttonLabel="新規登録" dialogTitle="新規登録" kind='button' variant="contained">
                            <SignUpForm/>
                        </FormDialog>

                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;