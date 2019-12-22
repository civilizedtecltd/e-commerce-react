import React from 'react';
import{Link} from 'react-router-dom'
import {Card, Col, Image} from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import Slider from "react-slick";
import '../../assets/css/theme.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {URL} from "../../constants/config";


const ImgSlick = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: (props.images.length < 5)? props.images.length : 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
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
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 453,
                settings: {
                    slidesToShow: 2,
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
        <div>
            <Slider {...settings}>
                { ( props.images.length === 0 ) ? <></> : props.images.map((item, index) =>
                    <div key={index}>
                        <Col className="col-auto">
                            <LazyLoad once={true} height={200}>
                                <Card className="productCard border-0 bg-transparent">
                                    <div className= "productMedia mb-3 bgGray">
                                        <Image src={(item.cover_images !== null) ? `${URL.BASE}/${item.cover_images.img_1}`: ''} alt="Book Image" />
                                    </div>

                                    <div className="productContent">
                                        <Link to={`/product/${item.id}`}><h4 className="productTitle limit-character mr-4" >{item.name} </h4></Link>
                                        <h5 className="authorName">{item.book_author.name}</h5>
                                        <p className="productPrice">$ {item.price}</p>
                                    </div>
                                </Card>
                            </LazyLoad>
                        </Col>
                    </div>
                )
                }
            </Slider>
        </div>
    );
}


export default ImgSlick;
