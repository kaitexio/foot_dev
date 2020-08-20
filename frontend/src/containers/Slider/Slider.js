import React from "react";


import Slider from "react-slick";
import Slide from "../../components/Slide";
import {NavLink} from "react-router-dom";
import styles from "./Slider.module.scss"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AutoSlider = ({newsList}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
    };
    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderBox}>
                <Slider {...settings} >
                    {newsList.map((item, index) =>
                        <div>
                            <NavLink to={"/news/" + item.id}>
                                <Slide title={item.title} media={item.media} time={item.date}/>
                            </NavLink>
                        </div>
                    )}
                </Slider>

            </div>
        </div>
    )
}


export default AutoSlider;