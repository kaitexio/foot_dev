import React from "react";

import * as PropTypes from "prop-types";

import {makeStyles} from '@material-ui/styles';


import TopBar from "../../../components/MenuAppBar";


const useStyles = makeStyles(() => ({
    root: {
        marginTop: 50,
        height: '100%'
    },
    contentsContainer: {
        height: '100%',
        minWidth: "1024px",
        width: "100%",
        margin: "auto",
        position: "relative",
    }
}));


const MinimalLayout = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TopBar/>
            <main className={classes.contentsContainer}>{children}</main>
        </div>
    )
}

MinimalLayout.propTypes = {
    children: PropTypes.node
};

export default MinimalLayout;