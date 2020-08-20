import {all} from "redux-saga/effects";
import News from "./news";
import Auth from "./auth";
import Comment from "./comment";
import User from "./user";


export default function* rootSaga() {

    yield all([
        ...News,
        ...Comment,
        ...Auth,
        ...User,
    ]);

}