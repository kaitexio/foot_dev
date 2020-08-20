import {SUCCESS_NEWS_COMMENT_CREATE} from "../actions/news";

const initialState = {
    loading: true,
    results: [],
};

const Comment = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS_NEWS_COMMENT_CREATE:
            return {...state, loading: false, results: action.payload}

        default:
            return state

    }
}
export default Comment;