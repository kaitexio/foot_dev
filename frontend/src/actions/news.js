import {createAction} from 'redux-actions';


//一覧取得
export const REQUEST_NEWS_LIST = "REQUEST_NEWS_LIST"
export const SUCCESS_NEWS_LIST = "SUCCESS_NEWS_LIST"
export const requestNewsList = createAction(REQUEST_NEWS_LIST);
export const successNewsList = createAction(SUCCESS_NEWS_LIST);


//詳細取得
export const REQUEST_NEWS_DETAIL = "REQUEST_NEWS_DETAIL"
export const SUCCESS_NEWS_DETAIL = "SUCCESS_NEWS_DETAIL"
export const requestNewsDetail = createAction(REQUEST_NEWS_DETAIL);
export const successNewsDetail = createAction(SUCCESS_NEWS_DETAIL);

//コメント投稿
export const REQUEST_NEWS_COMMENT_CREATE = 'REQUEST_NEWS_COMMENT_CREATE';
export const SUCCESS_NEWS_COMMENT_CREATE = 'SUCCESS_NEWS_COMMENT_CREATE';
export const requestNewsCommentCreate = createAction(REQUEST_NEWS_COMMENT_CREATE);
export const successNewsCommentCreate = createAction(SUCCESS_NEWS_COMMENT_CREATE);

//ランキング取得
export const REQUEST_NEWS_RANKING = "REQUEST_NEWS_RANKING"
export const SUCCESS_NEWS_RANKING = "SUCCESS_NEWS_RANKING"
export const requestNewsRanking = createAction(REQUEST_NEWS_RANKING);
export const successNewsRanking = createAction(SUCCESS_NEWS_RANKING);


//トレンド取得
export const REQUEST_GET_TREND = "REQUEST_GET_TREND"
export const SUCCESS_GET_TREND = "SUCCESS_GET_TREND"
export const requestGetTrend = createAction(REQUEST_GET_TREND)
export const successGetTrend = createAction(SUCCESS_GET_TREND)

//フィルター
export const REQUEST_GET_FILTER_NEWS = "REQUEST_GET_FILTER_NEWS"
export const SUCCESS_GET_FILTER_NEWS = "SUCCESS_GET_FILTER_NEWS"
export const requestGetFilterNews = createAction(REQUEST_GET_FILTER_NEWS)
export const successGetFilterNews = createAction(SUCCESS_GET_FILTER_NEWS)
