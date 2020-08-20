import {call, put, fork, take,select} from "redux-saga/effects";
import {
    requestGetFilterNews,
    requestGetTrend,
    requestNewsDetail,
    requestNewsList,
    requestNewsRanking,
    successGetFilterNews,
    successGetTrend,
    successNewsDetail,
    successNewsList,
    successNewsRanking

} from "../actions/news";
import {fetchGet} from "../utils/fetch";


function* getNewsDetail() {
    while (true) {
        const action = yield take(requestNewsDetail)
        const [data, err] = yield call(fetchGet, `api/news/${action.payload}`, false)
        if (data && !err) {
            yield put(successNewsDetail(data))

        } else {
            //   errorハンドリング
            console.log("error:getNewsDetail")
        }

    }

}


function* getNewsList() {
    while (true) {
        yield take(requestNewsList)
        const [data, err] = yield call(fetchGet, "api/news", false)
        if (data && !err) {

            yield put(successNewsList(data.results))

        } else {
            //   errorハンドリング
            console.log("error:getNewsList")
        }

    }

}

function* getNewsRanking() {
    while (true) {
        yield take(requestNewsRanking)
        const [data, err] = yield call(fetchGet, "api/news/ranking", false)
        if (data && !err) {
            yield put(successNewsRanking(data.results))
        } else {
            console.log("error:getNewsRanking")
        }
    }
}


function* getTrend() {
    while (true) {
        yield take(requestGetTrend)
        const [data, err] = yield call(fetchGet, "api/news/trend", false)
        if (data && !err) {
            yield put(successGetTrend(data.results))
        } else {
            console.log("error:getTrend")
        }

    }
}

function* getFilterNews() {
    while (true) {
        const action = yield take(requestGetFilterNews)
        const [data, err] = yield call(fetchGet, `api/news/?tag__name=${action.payload}`, false)
        if (data && !err) {
            yield put(successGetFilterNews(data.results))
        } else {
            console.log("error:getFilterNews")
        }
    }


}


const News = [
    fork(getNewsDetail),
    fork(getNewsList),
    fork(getNewsRanking),
    fork(getTrend),
    fork(getFilterNews)
];

export default News;
