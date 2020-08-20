import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";


import NewsDetailCard from "../../components/NewsDetail/Card";
import CommentForm from "../../components/Comment/form";
import CommentList from "../../components/Comment/CommentList";
import {requestNewsDetail} from "../../actions/news";

import classes from "./newsDetail.module.scss";
import Divider from "@material-ui/core/Divider";
import AskLogin from "../../components/AskLogin";
import RelatedNews from "../../components/RelatedNews";

const NewsDetail = (props) => {

    const dispatch = useDispatch();
    const id = props.match.params.id
    const news = useSelector(state => state.News)
    const token = localStorage.getItem("token")

    useEffect(() => {
        dispatch(requestNewsDetail(id))
    }, [])
    return (
        <div className={classes.newsSummaryContainer}>
            <div className={classes.contentsArea}>
                <NewsDetailCard news={news}/>
                <div className={classes.newsComment}>
                    {token ? (
                        <CommentForm/>
                    ) : (
                        <AskLogin/>
                    )
                    }
                    <Divider/>
                    <CommentList comment={news.comment}/>
                </div>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.title}>
                    関連記事一覧
                </div>
                <RelatedNews itemList={news.related_news}/>
            </div>
        </div>
    )
}


export default NewsDetail;