import {call, fork, put, take} from "redux-saga/effects";
import {reset, startSubmit, stopSubmit} from "redux-form";
import {push} from 'connected-react-router';
import {requestLogin, requestLogout, requestSign_up, successLogin, successLogout} from "../actions/auth";
import {fetchPost} from "../utils/fetch";
import {AuthUrls} from "../constants";
import {setAuthData} from "./utils/common";


export function* Login() {
    while (true) {
        const action = yield take(requestLogin)
        yield put(startSubmit('login'))

        const [data, error] = yield call(fetchPost, AuthUrls.LOGIN, false, action.payload)
        if (data && !error) {
            setAuthData(data.key)
            yield put(successLogin(data.key))
            yield put(push('/'));
            yield put(stopSubmit('login'));
            yield put(reset('login'));
        } else {
            yield put(
                stopSubmit(
                    'login',
                    {_error: 'ユーザーネームまたはパスワードが正しくありません。'}
                )
            );
        }
    }
}

export function* Logout() {
    while (true) {
        yield take(requestLogout)
        const [data, error] = yield call(fetchPost, AuthUrls.LOGOUT)
        if (data && !error) {
            localStorage.removeItem("token")
            yield put(successLogout())
            yield put(push('/'));
        } else {
            console.log("error")

        }
    }
}


export function* SignUp() {
    while (true) {
        const action = yield take(requestSign_up)
        yield put(startSubmit('signup'))
        const params = action.payload
        const [data, error] = yield call(fetchPost, AuthUrls.SIGNUP, false, params)
        if (data && !error) {
            setAuthData(data.key, true)
            yield put(push('/setting'));
            yield put(stopSubmit('signup'));
            yield put(reset('signup'));

        } else {

            console.log(error)
            yield put(stopSubmit('signup', error));
        }
    }
}


const Auth = [
    fork(Login),
    fork(Logout),
    fork(SignUp),

];

export default Auth;