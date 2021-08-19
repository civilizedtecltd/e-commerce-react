import React from "react";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStyles } from "./styled";

//===============slider====================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import LazyLoad from 'react-lazyload';

const settings = {
    dots: false,
    infinite: true,
    /* ,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true */
    slidesToShow: 6,
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

const DifferentProductView = (props) => {
    const classes = useStyles();        
    const { title, seeAllLink, bookList } = props;

    if(bookList.length < 6){
        return (
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.titleBox}>
                        <h4>{title}</h4>
                        <Link
                            className={classes.sellAllLink}
                            to={seeAllLink}
                        >
                            See all
                        </Link>
                    </div>
                    <div className={classes.content}>
                        {bookList && bookList.map((item, index) =>                                                                 
                            <Link
                                className={classes.item}
                                to={`/product/${item.id}`}
                                key={index}
                            >
                                <div className={classes.content}>
                                    <div className={classes.itemCard}>
                                        <div className={classes.itemMediaContent}>
                                            <img
                                                className={classes.itemMedia}
                                                src={item.cover_images.img_1}
                                                alt="product image"
                                                loading = "lazy"
                                            />
                                        </div>
                                        <div className={classes.itemCardContent}>
                                            <div className={classes.description}>                                                   
                                                {item.name.substring(
                                                    0,
                                                    50
                                                )}                                                    
                                            </div>                                                
                                            <div className={classes.price}>
                                                <div>{item.book_type ? item.book_type : 'Hardcover'}</div>
                                                <div className = 'price-value'>
                                                    {item.discount_price && item.discount_price > 0 ? 
                                                    (<> 
                                                        <span className="discount-price">Ksh {item.discount_price}</span>
                                                        <span>Ksh {item.original_price}</span>                                                             
                                                    </>)                                                         
                                                    : 
                                                    (
                                                        <span>Ksh {item.original_price}</span>
                                                    )                                                    
                                                    }
                                                </div>
                                            </div>                                                                                                                                                                
                                        </div>
                                    </div>
                                </div>                                                                                
                            </Link>                                                                                                                     
                        )}
                    </div>                                                                                                                                                                                                                          
                </div>
            </Container>
        );
    } else {
        return (
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.titleBox}>
                        <h4>{title}</h4>
                        <Link
                            className={classes.sellAllLink}
                            to={seeAllLink}
                        >
                            See all
                        </Link>
                    </div>
                                                        
                    <Slider {...settings}>                                         
                            {bookList && bookList.map((item, index) =>                                                                 
                                <Link
                                    className={classes.item}
                                    to={`/product/${item.id}`}
                                    key={index}
                                >
                                    <div className={classes.content}>
                                        <div className={classes.itemCard}>
                                            <div className={classes.itemMediaContent}>
                                                <img
                                                    className={classes.itemMedia}
                                                    src={item.cover_images.img_1}
                                                    alt="product image"
                                                    loading = "lazy"
                                                />
                                            </div>
                                            <div className={classes.itemCardContent}>
                                                <div className={classes.description}>                                                   
                                                    {item.name.substring(
                                                        0,
                                                        50
                                                    )}                                                    
                                                </div>                                                
                                                <div className={classes.price}>
                                                    <div>{item.book_type ? item.book_type : 'Hardcover'}</div>
                                                    <div className = 'price-value'>
                                                        {item.discount_price && item.discount_price > 0 ? 
                                                        (<> 
                                                            <span className="discount-price">Ksh {item.discount_price}</span>
                                                            <span>Ksh {item.original_price}</span>                                                             
                                                        </>)                                                         
                                                        : 
                                                        (
                                                            <span>Ksh {item.original_price}</span>
                                                        )                                                    
                                                        }
                                                    </div>
                                                </div>                                                                                                                                                                
                                            </div>
                                        </div>
                                    </div>                                                                                
                                </Link>                                                                                                                     
                                )}                                                                   
                    </Slider>                
                </div>
            </Container>
        );
    }       
};
export default DifferentProductView;
