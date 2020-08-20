import {call, fork, put, take} from "redux-saga/effects";
import {startSubmit, stopSubmit, reset} from "redux-form";
import {push} from "connected-react-router";

import {requestNewsCommentCreate, successNewsCommentCreate} from "../actions/news";
import {fetchGet, fetchPost} from "../utils/fetch";


function* postComment() {
    while (true) {
        const action = yield take(requestNewsCommentCreate)

        yield put(startSubmit('comment'))
        const [data, error] = yield call(fetchPost, `api${action.pathname}/comment`, true, action.payload)
        if (data && !error) {
            yield put(stopSubmit('comment'))
            yield put(successNewsCommentCreate(data))
            yield put(reset('comment'))
            yield put(push(action.pathname));
        } else {
            yield put(stopSubmit('comment', error));
            yield put(push(action.pathname));
        }

    }
}

const Comment = [
    fork(postComment),
];

export default Comment;