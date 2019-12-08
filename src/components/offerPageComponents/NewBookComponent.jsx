
import React from 'react';
import{Link} from 'react-router-dom'
import {Col, Card, Image} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/theme.css'

import {URL} from '../../constants/config';


function NewBookComponent({bookid, BookImage, ProductTitle, AuthorName, ProductPrice, ImageBg ,isFev = false }){
    const imgStyle = {
        width:"163px",
        height:"224px"
    }
    const titleStyle ={
        width:"190px"
    }
    return(
        <Col className="col-auto">
            <LazyLoad once={true} height={200}>
                <Card className="productCard border-0 bg-transparent">
                    <div className={`productMedia mb-3 ${ImageBg}`}>
                        <Image src={BookImage} alt="Book Image" style={imgStyle} />
                    </div>
                    <div className="productContent">
                        <Link to={`/product/${bookid}`}><h4 className="productTitle limit-character mb-1" >{ProductTitle} {(isFev === true) ?<span className="favoritIcon"><i className="fas fa-star"></i></span> :''}</h4></Link>
                        <h5 className="authorName mb-1">{AuthorName}</h5>
                        <p className="productPrice">$ {ProductPrice}</p>
                        <button  className="btn btn-danger">Remove</button>
                    </div>
                </Card>
            </LazyLoad>
        </Col>)
}


function ImgSlick(props) {

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
    const imgStyle = {
        width:"163px",
        height:"224px"
    }
    const titleStyle ={
        width:"190px"
    }

    return (
        <div>
            <Slider {...settings}>
                { ( props.images.length === 0 ) ? <></> : props.images.map((item, index) =>
                        <div key={index}>
                            <Col className="col-auto">
                                <LazyLoad once={true} height={200}>
                                    <Card className="productCard border-0 bg-transparent">
                                        <div className= "productMedia mb-3 bgGray">
                                            <Image src={(item.cover_images !== null) ? `${URL.BASE}/${item.cover_images.img_1}`: ''} alt="Book Image" style={imgStyle} />
                                        </div>

                                        <div className="productContent">
                                            <Link to={`/product/${item.id}`}><h4 className="productTitle mb-1" style={titleStyle} >{item.name} </h4></Link>
                                            <h5 className="authorName mb-1">{item.book_author.name}</h5>
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


export{
    NewBookComponent,
    ImgSlick
}

