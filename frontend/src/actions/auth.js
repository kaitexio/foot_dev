import {createAction} from 'redux-actions';


//ログイン
export const REQUEST_LOGIN = "REQUEST_LOGIN"
export const SUCCESS_LOGIN = "SUCCESS_LOGIN"
export const requestLogin = createAction(REQUEST_LOGIN);
export const successLogin = createAction(SUCCESS_LOGIN);

//ログアウト
export const REQUEST_LOGOUT = "REQUEST_LOGOUT"
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT"
export const requestLogout = createAction(REQUEST_LOGOUT);
export const successLogout = createAction(SUCCESS_LOGOUT);

//サインアップ
export const REQUEST_SIGN_UP = "REQUEST_SIGN_UP"
export const SUCCESS_SIGN_UP = "SUCCESS_SIGN_UP"
export const requestSign_up = createAction(REQUEST_SIGN_UP);
export const successSign_up = createAction(SUCCESS_SIGN_UP);
