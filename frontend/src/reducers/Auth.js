import {
    REQUEST_LOGIN,
    REQUEST_LOGOUT,
    REQUEST_SIGN_UP,
    SUCCESS_LOGIN,
    SUCCESS_LOGOUT,
    SUCCESS_SIGN_UP
} from "../actions/auth";

const initialState = {
    loading: true,
    authenticated: false,
    token: undefined,
    payload: {}
};

const Auth = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST_LOGIN:
            return {...state, payload: action.payload}

        case SUCCESS_LOGIN:
            return {...state, authenticated: true, token: action.payload};

        case REQUEST_LOGOUT:
            return {...state}

        case SUCCESS_LOGOUT:
            return {...state, authenticated: false, token: undefined}

        case REQUEST_SIGN_UP:
            return {...state, payload: action.payload};

        case SUCCESS_SIGN_UP:
            return {...state, authenticated: true, token: action.payload};


        default:
            return state

    }
}

export default Auth;