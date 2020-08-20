import {
    REQUEST_GET_FILTER_NEWS,
    REQUEST_GET_TREND,
    REQUEST_NEWS_DETAIL,
    REQUEST_NEWS_LIST,
    REQUEST_NEWS_RANKING, SUCCESS_GET_FILTER_NEWS, SUCCESS_GET_TREND,
    SUCCESS_NEWS_DETAIL,
    SUCCESS_NEWS_LIST, SUCCESS_NEWS_RANKING
} from "../actions/news";


const initialState = {
    loading: true,
    comment: [],
    id: "",
    title: "",
    date: "",
    img: "",
    url: "",
    media: "",
    views: 0,
    diff_time: "",
    related_news: []

};

const News = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS_NEWS_DETAIL:
            return {
                ...state, loading: false, comment: action.payload.comment,
                id: action.payload.id,
                title: action.payload.title,
                date: action.payload.date,
                img: action.payload.img,
                url: action.payload.url,
                media: action.payload.media,
                views: action.payload.views,
                diff_time: action.payload.diff_time,
                related_news: action.payload.related_news
            }

        default:
            return state

    }
}

export default News;