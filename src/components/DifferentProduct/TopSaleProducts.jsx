import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTopSaleBooksLimit } from "../../redux/actions/bookActions";
import { useStyles } from "./styled";
import DifferentProductView from "./DifferentProductView";

//===============slider====================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from 'react-lazyload';

const settings = {
    dots: false,
    infinite: true,
    /*
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

const TopSaleProducts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const topSaleBooks = useSelector((state) => state.book.topSaleBooks);

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        dispatch(fetchTopSaleBooksLimit());
    }, [dispatch]);

    useEffect(() => {
        const tempBookList = [];
        topSaleBooks && topSaleBooks.forEach(item => {

            switch(item.discount_type){
                case 'HARD_COVER':
                    item.original_price = item.price_hardcover;
                    item.discount_price = item.sales_price_hardcover;
                    item.book_type = 'Hardcover';
                    break;
                case 'PDF':
                    item.original_price = item.price_pdf;
                    item.discount_price = item.sales_price_pdf;
                    item.book_type = 'Pdf';  
                    break;
                case 'EPUB':
                    item.original_price = item.price_epub;
                    item.discount_price = item.sales_price_epub;
                    item.book_type = 'Epub'; 
                    break;
                case 'AUDIO':
                    item.original_price = item.price_audiobook;
                    item.discount_price = item.sales_price_audiobook; 
                    item.book_type = 'Audiobook';
                    break;
                default:
                    if(item.price_hardcover > 0 && item.sales_price_hardcover === 0){

                        item.original_price = item.price_hardcover;
                    }else if(item.price_pdf > 0 && item.sales_price_pdf === 0){
        
                        item.original_price = item.price_pdf;
                    }else if(item.price_epub > 0 && item.sales_price_epub === 0){
        
                        item.original_price = item.price_epub;
                    }else if(item.price_audiobook > 0 && item.sales_price_audiobook == 0){
        
                        item.original_price = item.price_audiobook;
                    }                
            }                                        
            tempBookList.push(item);
        });

        if(tempBookList.length > 0){
            setBookList([...tempBookList])
        }
    }, [topSaleBooks]);

    return <DifferentProductView title = "Top Sales Product" seeAllLink = "/top-products/sale" bookList = {bookList} />    
};
export default TopSaleProducts;
