import React, {useState} from "react";

import * as PropTypes from "prop-types";

import {useMediaQuery} from "@material-ui/core";
import classNames from "classnames";

import TopBar from "../../../components/MenuAppBar";
import classes from "./MainLayout.module.scss";
import Footer from "../../../components/Footer";



const MainLayout = ({children}) => {
    return (

        <div className={classes.contentsContainer}>
            <TopBar/>
            <main className={classes.main}>
            {children}
            </main>
            <Footer/>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;