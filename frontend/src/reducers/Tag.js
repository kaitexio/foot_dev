import {SUCCESS_GET_TREND} from "../actions/news";


const initialState = {
    loading: true,
    results: []
};

const Tag = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_GET_TREND:
            return {...state, loading: false, results: action.payload}

        default:
            return state

    }
}

export default Tag;