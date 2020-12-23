import React from 'react';
import { connect } from 'react-redux';
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//===============slider====================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/theme.css';
import LazyLoad from 'react-lazyload';



function CategoryHome(props) {


    const categories = (props.categories) ? props.categories : [];

    if (categories.length < 3) {
        return (<>
            <div className="categorySlider">
                <div className="row">
                    {categories.map((item, index) =>
                        <div className="col-sm-4" key={index}>
                            <LazyLoad once={true} height={200}>
                                <Link to={`/shop/category/${item.id}/${item.category}`}>
                                    <Card className="productCatCard">
                                        <div className="productCatMedia">
                                            <img loading="lazy" src={`${item.image}`} alt="book cover" />
                                        </div>
                                        <Card.Body className="text-center">
                                            <div className="productCatTitle home-ctg-limit-character">{item.category} </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </LazyLoad>
                        </div>
                    )}
                </div>
            </div>
        </>)
    } else {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }, {
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

                    {categories.map((item, index) =>
                        <Col key={index}>
                            <LazyLoad once={true} height={200}>
                                <Link to={`/shop/category/${item.id}/${item.category}`}>
                                    <Card className="productCatCard">
                                        <div className="productCatMedia">
                                            <img loading="lazy" src={`${item.image}`} alt="" />
                                        </div>
                                        <Card.Body className="text-center">
                                            <div className="productCatTitle home-ctg-limit-character">{item.category} </div>
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

const mapStateToProps = (state) => ({
    categories: state.site.categories
})

export default connect(mapStateToProps, null)(CategoryHome);
