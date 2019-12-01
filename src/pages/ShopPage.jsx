import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import { connect  } from 'react-redux';
import {fetchAllBook, fetchBooksByCategory} from '../redux/actions/bookActions';
import { LiSpan } from '../components/LiComponent/CommonLiComponent';

import filter from '../inc/shop/stage';
import discipline from '../inc/shop/discipline';
import author from '../inc/shop/author';
import publish_house from '../inc/shop/publish_house';
import publish_year from '../inc/shop/publish_year';
import book_cover from '../inc/shop/book_cover';
import language from '../inc/shop/language';

// Product Images
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import PriceRanger from "../components/PriceRangeSlider/PriceRangeSlider";
import {HeaderComponent, MobileHeader} from "../components/header/Header";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { URL } from '../constants/config';
import './assets/shop.css';


const ShopPage = (props) => {

    const { id, title } =  useParams();
    const totalItem = props.cart.length
    const favoriteItem = props.favorite;
    const books = (props.book !== undefined ) ? props.book : [];

    useEffect(() => {
      return ( id === 'all') ? props.fetchAllBook() : props.fetchBooksByCategory(id) ;
    },[]);

  return (
    <>
      <div className="allWrapper">
        <HeaderComponent
         favorite_item={favoriteItem.length}
         cartItem={totalItem}
          />
        <MobileHeader />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="sectionBreadcrumb secGap clearfix pb-0"
            id="sectionBreadcrumb"
          >

            <Container>
              <Row>
                <Col>
                <BreadCrumb />
                </Col>
              </Row>
            </Container>
            {/* end of Container */}
          </section>
          {/* end of Breadcrumb */}

          <section
            className="productsBodyAsidebar clearfix"
            id="productsBodyAsidebar"
          >
            <Container>
              <Row>
                <Col sm="3">
                  <aside
                    className="asideFilterBar secGap clearfix"
                    id="asideFilterBar"
                  >
                    <h2 className="asideTitle">Filters</h2>

                    <div className="asideBody bgGray" id="asideBody">
                      <div className="singleFilterCard">
                        <h5>Stage</h5>
                        <ul className="filterList">
                          {filter.map((data, index) => (
                              <LiSpan

                            key={index}
                            Url={data.url}
                            itemName={data.name}
                            Value={data.value}
                          />)
                          )}
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Discipline</h5>
                        <ul className="filterList">
                            {discipline.map((data, index) => (
                                <LiSpan

                                    key={index}
                                    Url={data.url}
                                    itemName={data.name}
                                    Value={data.value}
                                />)
                            )}
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Price Range</h5>
                        <Form>
                          <PriceRanger />
                        </Form>
                        {/* end of Form */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Author</h5>
                        <ul className="filterList">
                          {author.map((data, index) => (
                              <LiSpan

                                  key={index}
                                  Url={data.url}
                                  itemName={data.name}
                                  Value={data.value}
                              />)
                          )}
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Publishing house</h5>
                        <ul className="filterList">
                          {publish_house.map((data, index) => (
                              <LiSpan

                                  key={index}
                                  Url={data.url}
                                  itemName={data.name}
                                  Value={data.value}
                              />)
                          )}
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Publishing Year</h5>
                        <ul className="filterList">
                          {publish_year.map((data, index) => (
                              <LiSpan

                                  key={index}
                                  Url={data.url}
                                  itemName={data.name}
                                  Value={data.value}
                              />)
                          )}
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard">
                        <h5>Book Cover</h5>
                        <ul className="filterList">
                          {book_cover.map((data, index) => (
                              <LiSpan

                                  key={index}
                                  Url={data.url}
                                  itemName={data.name}
                                  Value={data.value}
                              />)
                          )}
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}

                      <div className="singleFilterCard p-0 border-0 m-0">
                        <h5>Language</h5>
                        <ul className="filterList">
                          {language.map((data, index) => (
                              <LiSpan
                                  key={index}
                                  Url={data.url}
                                  itemName={data.name}
                                  Value={data.value}
                              />)
                          )}
                        </ul>
                        {/* end of filterList */}
                      </div>
                      {/* end of singleFilterCard */}
                    </div>
                    {/* end of asideBody */}
                  </aside>
                  {/* end of asideFilterBar */}
                </Col>
                {/* end of Col */}

                <Col>
                  <div
                    className="allProductContent secGap clearfix"
                    id="allShopProduct"
                  >
                    <Row className="mb-5">
                      <Col className="col">
                        <h2 className="pageTitle">
                          <span>{title}</span>  Books
                        </h2>
                      </Col>
                      {/* end of Col */}
                    </Row>
                    {/* end of Row */}
                    <div className="row mb-4">
                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Sort By</label>
                          </li>
                          <li>
                            <select className="filterSelect form-control">
                              <option>Popular</option>
                              <option>New</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Show</label>
                          </li>

                          <li>
                            <select className="filterSelect form-control">
                              <option>16</option>
                              <option>10</option>
                              <option>5</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <nav aria-label="Page navigation">
                          <ul className="pagination align-items-center justify-content-between">
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-chevron-left"></i>
                              </Link>
                            </li>
                            <li className="page-item">Page</li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">of</li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                7
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>

                    </div>

                    <Row>
                      {
                        (books.length === 0) ?  <></> : books.map((book, index) => {

                            let bookCover = {
                                  img1: `${URL.BASE}/images/books/default.png`,
                                  img2: `${URL.BASE}/images/books/default.png`,
                                  img3: `${URL.BASE}/images/books/default.png`
                              }

                            if(book.cover_images !== null){

                              const cover = JSON.parse(book.cover_images)
                              bookCover = `${URL.BASE}/${cover.img_1}`;
                            }

                            return (

                              <Col key = {index} sm="3">
                                <LazyLoad once={true} height={200}>
                                   <Card className="productCard border-0 bg-transparent">
                                <div className="productMedia mb-3 bgGray">
                                  <img src={bookCover} alt="" />
                                </div>
                                {/* end of productMedia */}

                                <div className="productContent">
                                  <Link to={`/product/${book.id}`}>
                                    <h4 className="productTitle mb-1">
                                      {book.name}
                                    </h4>
                                  </Link>
                                  <h5 className="authorName mb-1">{book.book_author.name}</h5>
                                  <p className="productPrice">$ {book.price}</p>
                                </div>
                                {/* end of productContent */}
                              </Card>
                                </LazyLoad>
                            </Col>
                            );
                        })

                      }
                    </Row>

                    <div className="row mt-4">

                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Sort By</label>
                          </li>
                          <li>
                            <select className="filterSelect form-control">
                              <option>Popular</option>
                              <option>New</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Show</label>
                          </li>

                          <li>
                            <select className="filterSelect form-control">
                              <option>16</option>
                              <option>10</option>
                              <option>5</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <nav aria-label="Page navigation">
                          <ul className="pagination align-items-center justify-content-between">
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-chevron-left"></i>
                              </Link>
                            </li>
                            <li className="page-item">Page</li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">of</li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                7
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-chevron-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>

                    </div>
                    {/* end of Container */}
                  </div>
                  {/* end of allProductContent */}
                </Col>
                {/* end of Col */}
              </Row>
              {/* end of Row */}
            </Container>
            {/* end of Container */}
          </section>
          {/* end of productsBodyAsidebar */}
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
        {/* end of mainContent */}
        <FooterComponent />
      </div>
      {/* end of allWrapper */}
    </>
  );
};

const mapStateToProps = (state) =>{
  return {
    ...state,
   cart: state.shop.cart,
   favorite: state.favorite
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    fetchAllBook        : () => dispatch(fetchAllBook()),
    fetchBooksByCategory: (id) => dispatch(fetchBooksByCategory(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
