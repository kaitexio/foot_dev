import {SUCCESS_NEWS_RANKING} from "../actions/news";


const initialState = {
    loading: true,
    results: []
};

const Ranking = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS_NEWS_RANKING:
            return {...state, loading: false, results: action.payload}

        default:
            return state
    }
}

export default Ranking;