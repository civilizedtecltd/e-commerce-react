import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Container, Modal, ModalBody, Row } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { connect, useDispatch, useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import {
    fetchAllBook,
    fetchBooksByCategory,
    fetchBooksByFilter,
    fetchRecentSaleBooks,
    fetchTopDiscountBooks,
    fetchTopSaleBooks,
    filterByPriceRange,
    filterShortBy,
} from "../../redux/actions/bookActions";
import { fetchStages } from "../../redux/actions/filterAction";
import Filters from "../../components/shop/FiltersComponents";
import { NewsLetterComponent } from "../../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "../assets/shop.css";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import { BsFilter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Wrapper } from "./styled";
import Sorting from "./shared/Sorting";

const useStyle = createUseStyles({
    page_field: { width: "50px", marginRight: "5px", marginLeft: "5px" },
});

const TopProducts = () => {
    const classes = useStyle();
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);

    const favoriteItem = useSelector((state) => state.favorite.items);
    const totalItem = useSelector((state) => state.shop.cart.length);

    const recentSaleBooks = useSelector((state) => state.book.recentSaleBooks);
    const topSaleBooks = useSelector((state) => state.book.topSaleBooks);
    const topDiscountBooks = useSelector(
        (state) => state.book.topDiscountBooks
    );

    useEffect(() => {
        if (slug === "recent-sale") {
            dispatch(fetchRecentSaleBooks());
            setTitle("Recent Sale");
        } else if (slug === "sale") {
            dispatch(fetchTopSaleBooks());
            setTitle("Top Sale");
        } else if (slug === "discount") {
            dispatch(fetchTopDiscountBooks());
            setTitle("Top Discount");
        }
    }, [dispatch, slug]);

    useEffect(() => {
        if (slug === "recent-sale" && recentSaleBooks) {
            let books = [];
            recentSaleBooks.map((item) => books.push(item.book));
            setProducts(books);
        } else if (slug === "sale" && topSaleBooks) {
            setProducts(topSaleBooks);
        } else if (slug === "discount" && topDiscountBooks) {
            setProducts(topDiscountBooks);
        }
    }, [slug, recentSaleBooks, topSaleBooks, topDiscountBooks]);

    return (
        <>
            {/* <PageLoader loading={pending} /> */}
            <div className="allWrapper">
                <HeaderComponent
                    favorite_item={favoriteItem.length}
                    cartItem={totalItem}
                />
                <MobileHeader
                    favorite_item={favoriteItem.length}
                    cartItem={totalItem}
                />
                <main className="mainContent clearfix" id="mainContent">
                    <section
                        className="productsBodyAsidebar clearfix"
                        id="productsBodyAsidebar"
                    >
                        <Container>
                            <div
                                className="allProductContent secGap clearfix"
                                id="allShopProduct"
                            >
                                <Row className="mb-5">
                                    <Col>
                                        <h2 className="pageTitle">
                                            <span>{title}</span> Books
                                        </h2>
                                    </Col>
                                </Row>

                                {products && products.length === 0 ? (
                                    <h1 className="text-center">
                                        Sorry, No Result Found :(
                                    </h1>
                                ) : (
                                    <>
                                        <Row className="Product_Row">
                                            {products &&
                                                products.map((book, index) => {
                                                    return (
                                                        <Col
                                                            key={index}
                                                            sm="3 mb-5"
                                                        >
                                                            <LazyLoad
                                                                once={true}
                                                                height={200}
                                                            >
                                                                <Card className="productCard border-0 bg-transparent">
                                                                    <div className="productMedia mb-3 bgGray">
                                                                        <Link
                                                                            to={`/product/${book.id}`}
                                                                        >
                                                                            <img
                                                                                loading="lazy"
                                                                                src={
                                                                                    book.cover_images !==
                                                                                    null
                                                                                        ? `${book.cover_images.img_1}`
                                                                                        : ""
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </Link>
                                                                    </div>

                                                                    <div className="productContent">
                                                                        <Link
                                                                            to={`/product/${book.id}`}
                                                                        >
                                                                            <h4 className="productTitle limit-character">
                                                                                {
                                                                                    book.name
                                                                                }
                                                                            </h4>
                                                                        </Link>
                                                                        {/* <h5 className="authorName">
                                                                            {
                                                                                book
                                                                                    .book_author
                                                                                    .name
                                                                            }
                                                                        </h5> */}
                                                                        <p className="productPrice">
                                                                            Ksh{" "}
                                                                            {
                                                                                book.price
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </Card>
                                                            </LazyLoad>
                                                        </Col>
                                                    );
                                                })}
                                        </Row>
                                    </>
                                )}
                            </div>
                        </Container>
                    </section>
                    <section
                        className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
                        id="mailSubscribe"
                    >
                        <Container className="container">
                            <NewsLetterComponent />
                        </Container>
                    </section>
                </main>

                <FooterComponent />
            </div>
        </>
    );
};

export default TopProducts;
