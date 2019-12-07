import React, { useEffect, useState } from "react";
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
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { URL } from '../constants/config';
import './assets/shop.css';


const ShopPage = (props) => {
    console.log(props)
    const { id, title } =  useParams();

    const totalItem = props.cart.length
    const favoriteItem = props.favorite;
    const books = (props.book.data !== undefined ) ? props.book.data : [];

    const [show , setShowBook ] = useState(5);
    let [page , setPage ] = useState(1);
    const [totalPage , setTotalPage] = useState(1)


    const total_pages = (Number(show) !== 0 && Number(show) <= Number(props.totalItem)) ? Math.ceil(Number(props.totalItem)/Number(show)) : 1 ;

    if(totalPage !== total_pages){
      setTotalPage(total_pages);
    }

    if(Number(show) !== Number(props.showItem)){
      setShowBook(Number(props.showItem));
    }


    useEffect(() => {
      return ( id === 'all') ? props.fetchAllBook(page, show) : props.fetchBooksByCategory(id, page,show) ;
    },[]);

  const handleShowBook = (e)=> {
    e.preventDefault()
    console.log(e.target.value)
    setShowBook(Number(e.target.value));

    const t_pages = (Number(e.target.value) !== 0 && Number(e.target.value) <= Number(props.totalItem)) ? Math.ceil(Number(props.totalItem)/Number(e.target.value)) : 1 ;
    setTotalPage(t_pages);
    return ( id === 'all') ? props.fetchAllBook(page, show) : props.fetchBooksByCategory(id, page, Number(e.target.value));
  }


  const handleNext = (e) => {
      e.preventDefault();

      if(page!==totalPage){
        setPage(++page)
        props.fetchBooksByCategory(id, page, show);
      }

  }

  const handlePreviews = (e)=>{
    e.preventDefault();
    if(page!==1){
      setPage(--page)
      props.fetchBooksByCategory(id, page, show);
    }
    if(page==0) return setPage(1)
  }

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
          </section>

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
                      </div>

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
                      </div>


                      <div className="singleFilterCard">
                        <h5>Price Range</h5>
                        <Form>
                          <PriceRanger />
                        </Form>
                      </div>


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

                    </div>
                  </aside>
                </Col>

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

                    </Row>

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
                            <select name="up-filter-select" className="filterSelect form-control" value={show} onChange={handleShowBook}>
                              <option value="16">16</option>
                              <option value="10">10</option>
                              <option value="5">5</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <nav aria-label="Page navigation">
                          <ul className="pagination align-items-center justify-content-between">
                            <li className="page-item" onClick={handlePreviews}>
                              <button className="page-link">
                                <i className="fas fa-chevron-left"></i>
                              </button>
                            </li>
                            <li className="page-item">Page</li>
                            <li className="page-item">
                              <input id="page" type="text" className="page-link" value={ page } readOnly/>


                            </li>
                            <li className="page-item">of</li>
                            <li className="page-item">
                              <input type="text" id="total-page" value= {totalPage} className="page-link" readOnly/>
                            </li>
                            <li className="page-item" onClick={handleNext} >
                              <button className="page-link">
                                <i className="fas fa-chevron-right"></i>
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>

                    </div>

                    <Row>
                      {
                        (books.length === 0) ?  <></> : books.map((book, index) => {

                            return (

                              <Col key = {index} sm="3">
                                <LazyLoad once={true} height={200}>
                                   <Card className="productCard border-0 bg-transparent">
                                <div className="productMedia mb-3 bgGray">
                                  <img src={(book.cover_images !== null) ? `${URL.BASE}/${book.cover_images.img_1}` : '' } alt="" />
                                </div>
                                {/* end of productMedia */}

                                <div className="productContent">
                                  <Link to={`/product/${book.id}`}>
                                    <h4 className="productTitle mb-1">
                                      {book.name}
                                    </h4>
                                  </Link>
                                  <h5 className="authorName mb-1">{book.book_author.name}</h5>
                                  <p className="productPrice">$ {book.price} </p>
                                </div>
                                {/* end of productContent */}
                              </Card>
                                </LazyLoad>
                            </Col>
                            );
                        })

                      }
                    </Row>

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
                            <select name="up-filter-select" className="filterSelect form-control" value={show} onChange={handleShowBook}>
                              <option value="16">16</option>
                              <option value="10">10</option>
                              <option value="5">5</option>
                            </select>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <nav aria-label="Page navigation">
                          <ul className="pagination align-items-center justify-content-between">
                            <li className="page-item" onClick={handlePreviews}>
                              <button className="page-link">
                                <i className="fas fa-chevron-left"></i>
                              </button>
                            </li>
                            <li className="page-item">Page</li>
                            <li className="page-item">
                              <input id="next-page" type="text" className="page-link" value={ page } readOnly/>


                            </li>
                            <li className="page-item">of</li>
                            <li className="page-item">
                              <input type="text" id="total-page" value= {totalPage} className="page-link" readOnly/>
                            </li>
                            <li className="page-item" onClick={handleNext} >
                              <button className="page-link">
                                <i className="fas fa-chevron-right"></i>
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>

                    </div>


                  </div>
                </Col>
              </Row>
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

const mapStateToProps = (state) =>{
  const initItem = (state.book.total !== undefined) ? state.book.total : 1;
  const initShowItem = (state.book.show !== undefined) ? state.book.show: 5;
  return {
   book: state.book,
   cart: state.shop.cart,
   totalItem: initItem,
   showItem: initShowItem,
   favorite: state.favorite
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    fetchAllBook        : (page, show) => dispatch(fetchAllBook(page, show)),
    fetchBooksByCategory: (id, page, show) => dispatch(fetchBooksByCategory(id, page, show))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
