import React, { useState, useEffect } from 'react';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from 'axios'

//===============slider====================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/theme.css';
import LazyLoad from 'react-lazyload';
import {URL} from '../../constants/config';


function CategoryHome (props) {

    const [category, setCategory] = useState([]);

    useEffect(() => {
 const abortController = new AbortController();
            props.callback(true);
            axios.get(URL._CATEGORY)
                .then(res => {
                    setCategory(res.data.data)
                    props.callback(false)
                })
                .catch(error => {
                    console.log(error);
                });
         return () => {
           abortController.abort();
         }; 
    }, []);

    if(category.length < 4){
        return(<>
            <div className="categorySlider">
                <div className="row">
                {category.map((item, index) =>
                    <div className="col-sm-4" key={index}>
                        <LazyLoad once={true} height={200}>
                            <Link to={`/shop/category/${item.id}/${item.category}`}>
                                <Card className="productCatCard">
                                    <div className="productCatMedia">
                                        <img src={`${item.image}`} alt="" />
                                    </div>
                                    <Card.Body className="text-center">
                                        <h3 className="productCatTitle home-ctg-limit-character">{item.category} </h3>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </LazyLoad>
                    </div>
                )}
                </div>
            </div>
            </>)
    }else{
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

        return (
            <div className="categorySlider">
            <Slider {...settings} >

                {category.map((item, index) =>
                    <Col key={index}>
                        <LazyLoad once={true} height={200}>
                            <Link to={`/shop/category/${item.id}/${item.category}`}>
                                <Card className="productCatCard">
                                    <div className="productCatMedia">
                                        <img src={`${item.image}`} alt="" />
                                    </div>
                                    <Card.Body className="text-center">
                                        <h3 className="productCatTitle home-ctg-limit-character">{item.category} </h3>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </LazyLoad>
                    </Col>
                )}

            </Slider>
            </div>
        );
    }



}

export {CategoryHome } ;
