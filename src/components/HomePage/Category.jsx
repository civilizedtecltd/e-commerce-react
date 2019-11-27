import React, { useState, useEffect } from 'react';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from 'axios'

//===============slider====================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/theme.css';

import {URL} from '../../constants/config';


function CategoryHome () {

    const [category, setCategory] = useState([]);

    useEffect(()=> {

            axios.get(URL._CATEGORY)
                .then(res => {
                    setCategory(res.data.data)
                })
                .catch(error => {
                    console.log(error);
                });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },  {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 453,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 336,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const imgStyle = {
        width:"100%",
        height:"420px"
    }
        return (
                <Slider {...settings} >

                            {category.map((item, index) =>
                                    <Col key={index}>
                                        <Link to={`/shop/category/${item.id}/${item.category}`}>
                                            <Card className="productCatCard">
                                                <div className="productCatMedia">
                                                    <img src={`${URL.BASE}/${item.image}`} alt="" style={imgStyle} />
                                                </div>{/* end of productCatMedia*/}
                                                <Card.Body className="text-center">
                                                    <h3 className="productCatTitle">{item.category} </h3>
                                                </Card.Body>{/* end of Card.Body */}
                                            </Card>{/* end of productCatCard */}
                                        </Link>
                                    </Col>
                                )
                            }

                </Slider>
        );
}

export {CategoryHome } ;
