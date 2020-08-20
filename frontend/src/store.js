import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'connected-react-router';

import {createBrowserHistory} from "history"
import createRootReducer from './reducers';
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
const bindMiddleware = () => {
    if (process.env.REACT_APP_TARGET_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(
            compose(applyMiddleware(createLogger(),routerMiddleware(history), sagaMiddleware))
        );
    }
    return compose(applyMiddleware(createLogger(),routerMiddleware(history), sagaMiddleware));
};

export let store = null;

export const configureStore = () => {
    store = createStore(
        createRootReducer(history),
        bindMiddleware()
    );

    sagaMiddleware.run(rootSaga);
    return store;
}



