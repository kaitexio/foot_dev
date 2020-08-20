import {
    SUCCESS_GET_FILTER_NEWS,
    SUCCESS_NEWS_LIST
} from "../actions/news";


const initialState = {
    loading: true,
    results: []
};

const NewsList = (state = initialState, action) => {
    switch (action.type) {


        case SUCCESS_NEWS_LIST:
            return {...state, loading: false, results: action.payload}


        case SUCCESS_GET_FILTER_NEWS:
            return {...state, results: action.payload}

        default:
            return state

    }
}

export default NewsList;