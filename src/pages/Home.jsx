import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import "../pages/assets/home.css";

import featureIcon1 from "../assets/images/feature_icon_img_01.png";
import featureIcon2 from "../assets/images/feature_icon_img_02.png";
import featureIcon3 from "../assets/images/feature_icon_img_03.png";
import featureIcon4 from "../assets/images/feature_icon_img_04.png";

import FooterComponent from "../components/FooterComponent/FooterComponent";
import { HomeCarouselFooter } from "../components/HomePage/HomeCarouselFooter";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import HeaderComponent from "../components/header/Header";
import MobileHeader from "../components/header/MobileHeader";
import CategoryHome from "../components/HomePage/Category";
import PageLoader from "../components/pageLoader/PageLoaderComponent";

import {
    fetchMaxMinPrice,
    fetchDiscipline,
    fetchAuthors,
    fetchPublishers,
    fetchPublishingYears,
    fetchLanguages,
    fetchBookCovers,
} from "../redux/actions/filterAction";
import ForYou from "../components/forYouComponents/ForYou";
import DifferentProduct from "../components/DifferentProduct/TopDiscountProducts";
import { fetchRecentSaleBooksLimit } from "../redux/actions/bookActions";
import RecentSaleProducts from "../components/DifferentProduct/RecentSaleProducts";
import SaleProducts from "../components/DifferentProduct/TopSaleProducts";
import TopSaleProducts from "../components/DifferentProduct/TopSaleProducts";
import TopDiscountProduct from "../components/DifferentProduct/TopDiscountProducts";

const Home = (props) => {
    const [loading, setLoading] = useState(false);
    const totalItem = props.cart.length;
    const favoriteItem = props.favorite.items;

    // const recentSaleBooks = useSelector((state) => state.book.recentSaleBooks);

    const handleCategoryLoading = (status) => {
        setLoading(status);
    };

    useEffect(() => {
        props.maxMinPrice();
        props.getDisciplineList();
        props.getAuthorsList();
        props.getPublisherList();
        props.getPublishingYearList();
        props.getLanguageList();
        props.getBookCoverList();

        // props.fetchRecentSaleBooksLimit();
    }, []);

    return (
        <>
            <PageLoader loading={loading} />
            <div className="allWrapper lasdkjf">
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
                        className="productCat secGap clearfix"
                        id="productCat"
                    >
                        <Container>
                            <div
                                className="text-center d-md-none mb-2"
                                style={{ fontSize: 15, fontWeight: 700 }}
                            >
                                Swipe left to choose your category
                            </div>
                            <CategoryHome callback={handleCategoryLoading} />
                        </Container>
                    </section>

                    {/* For you components */}
                    <section>
                        {/* <Container>
                            <ForYou />
                        </Container>

                        <Container>
                            <ForYou />
                        </Container>

                        <Container>
                            <ForYou />
                        </Container> */}
                        <TopDiscountProduct />
                        <TopSaleProducts />
                        <RecentSaleProducts />
                    </section>

                    <section
                        className="ourBenefits clearfix secGap bgGray"
                        id="ourBenefits"
                    >
                        <Container>
                            <Row>
                                <Col>
                                    <h2 className="sectionTitle mb-5 text-center">
                                        Our <span>benefits</span>
                                    </h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="3">
                                    <Card className="singleFeature pt-3 pb-3 border-0">
                                        <div className="featureMedia text-center">
                                            <img
                                                loading="lazy"
                                                src={featureIcon1}
                                                alt=""
                                            />
                                        </div>

                                        <Card.Body className="text-center">
                                            <section>
                                                <div style={{ fontSize: 25 }}>
                                                    Quick delivery
                                                </div>
                                                <p>You can track your order</p>
                                            </section>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col sm="3">
                                    <Card className="singleFeature pt-3 pb-3 border-0">
                                        <div className="featureMedia text-center">
                                            <img
                                                loading="lazy"
                                                src={featureIcon2}
                                                alt=""
                                            />
                                        </div>
                                        {/* end of featureMedia */}

                                        <Card.Body className="text-center">
                                            <div style={{ fontSize: 25 }}>
                                                Best Price
                                            </div>
                                            <p>Get the perfect deal</p>
                                        </Card.Body>
                                        {/* end of Card.Body */}
                                    </Card>
                                    {/* end of Card */}
                                </Col>
                                {/* end of Col */}

                                <Col sm="3">
                                    <Card className="singleFeature pt-3 pb-3 border-0">
                                        <div className="featureMedia text-center">
                                            <img
                                                loading="lazy"
                                                src={featureIcon3}
                                                alt=""
                                            />
                                        </div>
                                        {/* end of featureMedia */}

                                        <Card.Body className="text-center">
                                            <div style={{ fontSize: 25 }}>
                                                Explore
                                            </div>
                                            <p>
                                                {" "}
                                                Browse our website, it is
                                                effortless
                                            </p>
                                        </Card.Body>
                                        {/* end of Card.Body */}
                                    </Card>
                                    {/* end of Card */}
                                </Col>
                                {/* end of Col */}

                                <Col sm="3">
                                    <Card className="singleFeature pt-3 pb-3 border-0">
                                        <div className="featureMedia text-center">
                                            <img
                                                loading="lazy"
                                                src={featureIcon4}
                                                alt=""
                                            />
                                        </div>
                                        {/* end of featureMedia */}

                                        <Card.Body className="text-center">
                                            <div style={{ fontSize: 25 }}>
                                                Customized packages
                                            </div>
                                            <p>Books in perfect condition</p>
                                        </Card.Body>
                                        {/* end of Card.Body */}
                                    </Card>
                                    {/* end of Card */}
                                </Col>
                                {/* end of Col */}
                            </Row>
                            {/* end of Row */}
                        </Container>
                        {/* end of Container */}
                    </section>
                    {/* end of ourBenefits */}

                    <section
                        className="ourPartners clearfix secGap"
                        id="ourPartners"
                    >
                        <Container>
                            <Row>
                                <Col>
                                    <div className="partnersCarousel">
                                        <HomeCarouselFooter />
                                    </div>
                                </Col>
                                {/* end of Col */}
                            </Row>
                            {/* end of Row */}
                        </Container>
                        {/* end of Container */}
                    </section>
                    {/* end of ourPartners */}

                    <section
                        className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
                        id="mailSubscribe"
                    >
                        <Container className="container">
                            <NewsLetterComponent />
                        </Container>
                        {/* end of Container */}
                    </section>
                    {/* end of mailSubscribe */}
                </main>
                <FooterComponent />
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        favorite: state.favorite,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        maxMinPrice: () => dispatch(fetchMaxMinPrice()),
        getDisciplineList: () => dispatch(fetchDiscipline()),
        getAuthorsList: () => dispatch(fetchAuthors()),
        getPublisherList: () => dispatch(fetchPublishers()),
        getPublishingYearList: () => dispatch(fetchPublishingYears()),
        getLanguageList: () => dispatch(fetchLanguages()),
        getBookCoverList: () => dispatch(fetchBookCovers()),
        fetchRecentSaleBooksLimit: () => dispatch(fetchRecentSaleBooksLimit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
