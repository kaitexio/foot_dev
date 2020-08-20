import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {connectRouter} from 'connected-react-router';

import Auth from './Auth';
import News from './News';
import Me from './Me'
import Comment from "./Comment";
import NewsList from "./NewsList";
import Ranking from "./Ranking";
import Tag from "./Tag";

export default history =>
    combineReducers({
            router: connectRouter(history),
            form: formReducer,
            Auth,
            News,
            NewsList,
            Ranking,
            Me,
            Comment,
            Tag
        }
    );
