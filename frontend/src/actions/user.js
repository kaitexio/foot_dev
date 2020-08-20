import {createAction} from 'redux-actions';

// プロフィール取得
export const REQUEST_ME = 'REQUEST_ME';
export const SUCCESS_ME = 'SUCCESS_ME';
export const requestMe = createAction(REQUEST_ME);
export const successMe = createAction(SUCCESS_ME);

// プロフィール編集
export const REQUEST_ME_EDIT = 'REQUEST_ME_EDIT';
export const SUCCESS_ME_EDIT = 'SUCCESS_ME_EDIT';
export const requestEdit = createAction(REQUEST_ME_EDIT);
export const successEdit = createAction(SUCCESS_ME_EDIT);

// パスワード再設定(ログイン済み)
export const REQUEST_PASSWORD = 'REQUEST_PASSWORD';
export const SUCCESS_PASSWORD = 'SUCCESS_PASSWORD';
export const requestPassword = createAction(REQUEST_PASSWORD);
export const successPassword = createAction(SUCCESS_PASSWORD);