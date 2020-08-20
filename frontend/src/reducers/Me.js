import {REQUEST_NEWS_DETAIL, REQUEST_NEWS_LIST, SUCCESS_NEWS_DETAIL, SUCCESS_NEWS_LIST} from "../actions/news";
import {REQUEST_ME, REQUEST_ME_EDIT, SUCCESS_ME, SUCCESS_ME_EDIT} from "../actions/user";

const initialState = {
    loading: false,
    username: '',
    img: '',
    email: '',
    follow: '-',
    follower: '-'

};

const Me = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS_ME:
            return {
                ...state, username: action.payload.username,
                img: action.payload.img,
                email: action.payload.email,
                follow: '-',
                follower: '-'
            }

        case SUCCESS_ME_EDIT:
            return {
                ...state, username: action.payload.username,
                img: action.payload.img,
                email: action.payload.email,
                follow: '-',
                follower: '-'
            }


        default:
            return state

    }
}

export default Me;