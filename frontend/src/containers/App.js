import React, {useEffect} from "react";
import {Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import MainLayout from "./layout/Main";
import NewsDetail from "./NewsDetail";
import NewsList from "./NewsList";
import RouteWithLayout from "../components/RouteWithLayout";
import MinimalLayout from "./layout/Minimal";
import {requestMe} from "../actions/user";
import Setting from "./Setting";
import NotFound from "./NotFound";
import FilterNewsList from "./FilterNewsList";

import '../assets/scss/index.scss';


const App = (props) => {
    useEffect(() => {
            props.requestMe()
        }
        ,
        [props]
    )

    return (

        <Switch>
            <Redirect exact from="/" to="/news"/>
            <RouteWithLayout exact path="/news" layout={MainLayout} component={NewsList}/>
            <RouteWithLayout exact path="/news/:id" layout={MainLayout} component={NewsDetail}/>
            <RouteWithLayout exact path="/tag/:name" layout={MainLayout} component={FilterNewsList}/>
            <RouteWithLayout exact path="/setting" layout={MinimalLayout} component={Setting}/>
            <RouteWithLayout layout={MinimalLayout} component={NotFound}/>
        </Switch>

    )
};


const mapDispatchToProps = dispatch => ({
    requestMe: () => dispatch(requestMe())
})
const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);