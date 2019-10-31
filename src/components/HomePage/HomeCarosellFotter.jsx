import React from "react";
import {PartnerDB} from '../../inc/HomePage/PartnerCarousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HomeCarosellFotter() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                {PartnerDB.map((Partner, index) =>

                        <ul className=" partnerCarouselItem"  key={index}>
                            <li className="item"><img src={Partner} alt="" /></li>
                        </ul>
                )

                }
            </Slider>
        </>
    )
}


export {
    HomeCarosellFotter
}
