import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestGetFilterNews} from "../../actions/news";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../../components/NewsList/Card";

import styles from "./filterNewsList.module.scss";

const FilterNewsList = ({match}) => {
    const dispatch = useDispatch()
    const newsList = useSelector(state => state.NewsList.results)
    const tagName = match.params.name
    useEffect(() => {
            dispatch(requestGetFilterNews(tagName))
        }
        , [tagName])
    return (
        <>
            <Container>
                <div className={styles.title}>
                    TAG : {tagName}
                </div>
                <div>
                    <Grid container spacing={4}>
                        {newsList.map((item, index) =>
                            <Grid item key={index} xs={12} sm={4}>
                                <NewsCard key={index} index={index} news={item}/>
                            </Grid>
                        )
                        }
                    </Grid>
                </div>
            </Container>
        </>
    );
}
export default FilterNewsList;