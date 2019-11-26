import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

//===============slider====================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/theme.css';
import {ctgImg} from '../../inc/HomePage/categorydb'

function CategoryHome () {
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
                <Slider { ...settings } >

                            {ctgImg.map((slideImg, index) =>
                                    <Col key={index}>
                                        <Link to={slideImg.url}>
                                            <Card className="productCatCard">
                                                <div className="productCatMedia">
                                                    <img src={slideImg.img} alt="" style={imgStyle} />
                                                </div>{/* end of productCatMedia*/}
                                                <Card.Body className="text-center">
                                                    <h3 className="productCatTitle">{slideImg.title} </h3>
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
