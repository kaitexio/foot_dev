import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import {Provider} from "react-redux";


import * as serviceWorker from './serviceWorker';

import App from './containers/App';
import {configureStore, history} from "./store";
import theme from "./theme";
import {MuiThemeProvider} from "@material-ui/core";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router>
            <Provider store={configureStore(history)}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" component={App}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();