import {call, put, fork, take} from "redux-saga/effects";
import {requestEdit, requestMe, successEdit, successMe} from "../actions/user";
import {fetchGet, fetchPatch} from "../utils/fetch";
import {reset, startSubmit, stopSubmit} from "redux-form";
import {push} from "connected-react-router";


function* getMe() {
    while (true) {
        const action = yield take(requestMe)
        if (localStorage.getItem('token')) {
            const [data, error] = yield call(fetchGet, 'api/users/me', true)
            if (data && !error) {
                yield put(successMe(data));
            } else {
                console.log("error happened in getMe")
            }
        } else {
            console.log("Not found token")
        }

    }
}

function* postUserEdit() {
    while (true) {
        const action = yield take(requestEdit)
        yield put(startSubmit('setting'))
        const [data, error] = yield call(fetchPatch, `api/users/me`, true, action.payload)
        if (data && !error) {
            yield put(successEdit(data))
            yield put(push('/setting'));
            yield put(stopSubmit('setting'));
            yield put(reset('setting'));
        } else {
            yield put(stopSubmit('setting', error));
        }

    }
}

const User = [
    fork(getMe),
    fork(postUserEdit)
]

export default User;