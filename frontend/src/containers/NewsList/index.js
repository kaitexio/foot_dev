import React, {Suspense, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import {requestGetTrend, requestNewsList, requestNewsRanking} from "../../actions/news";
import CardSkeleton from "../../components/Skeleton/CardSkeleton";
import NewsCard from "../../components/NewsList/Card";

import styles from "./newsList.module.scss";
import Slider from "../Slider/Slider";
import Skeleton from "@material-ui/lab/Skeleton";
import Ranking from "../../components/Ranking";
import TagList from "../../components/TagList";


const NewsList = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.NewsList.loading)
    const newsList = useSelector(state => state.NewsList.results)
    const tag = useSelector(state => state.Tag.results)
    const ranking = useSelector(state => state.Ranking.results)
    useEffect(() => {
            dispatch(requestNewsList());
            dispatch(requestNewsRanking());
            dispatch(requestGetTrend());

        },
        [])
    return (
        <>
            {loading ? (
                <>
                    <div className={styles.skeletonSlider}>
                        <Skeleton animation="pulse" variant="rect" height="100%" width="100%"/>
                    </div>
                    <Container className={styles.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                        </Grid>
                    </Container>
                </>
            ) : (
                <>
                    <Slider loading={loading} newsList={newsList.slice(0, 5)}/>
                    <Container className={styles.cardGrid}>
                        <div className={styles.primary}>
                            <h2 className={styles.sectionTitle}>LATEST</h2>

                            <Grid container spacing={4}>
                                {newsList.map((item, index) =>
                                    <Grid item key={index} xs={12} sm={6}>
                                        <NewsCard key={index} index={index} news={item}/>
                                    </Grid>
                                )}
                            </Grid>
                        </div>
                        <div className={styles.sub}>
                            <div className={styles.tag}>
                                <h3 className={styles.subTitle}>TRENDS</h3>
                                <TagList itemList={tag}/>
                            </div>
                            <div>
                                <h3 className={styles.subTitle}>RANKING</h3>
                                <Ranking itemList={ranking}/>
                            </div>
                        </div>
                    </Container>
                </>
            )}
        </>
    );
}

export default NewsList;


