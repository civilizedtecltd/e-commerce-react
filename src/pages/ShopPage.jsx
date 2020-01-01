import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import { connect  } from 'react-redux';
import { createUseStyles } from 'react-jss'
import {fetchAllBook, fetchBooksByCategory,filterByPriceRange, filterShortBy, fetchBooksByFilter} from '../redux/actions/bookActions';
import { fetchStages } from '../redux/actions/filterAction';

import Filters from '../components/shop/FiltersComponents'
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { URL } from '../constants/config';
import './assets/shop.css';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
const useStyle = createUseStyles({
  page_field:{
    width: "50px",
    marginRight: "5px",
    marginLeft:'5px'
  }
})

const ShopPage = (props) => {

    const classes = useStyle()

    const { id, title, showItem, pageNumber, keyword, filter_type, filter_id } = useParams();

    //const isNaN_id = Number(id)

    const [isNaN_id] = useState(Number(id));
    const [lowerPrice , setLowerPrice] = useState(null);
    const [higherPrice , setHigherPrice] = useState(null);
    let [show , setShowBook ] = useState(5);
    let [page , setPage ] = useState(1);
    let [totalPage , setTotalPage] = useState(props.book.totalPage)
    let [sortBy , setSortBy] = useState('')

    const totalItem = props.cart.length
    const favoriteItem = props.favorite.items;
    const books = props.book.data ? props.book.data : [];
    const shopUrl = window.location.pathname


    const PriceRange = (minPrice, maxPrice) => {
      setLowerPrice(minPrice)
      return setHigherPrice(maxPrice)
    }




    useEffect(()=>{

        props.stageList(isNaN_id);

      if(page && show && sortBy){

         return props.filterShortBy(page,show,sortBy)
      }
      else if(shopUrl==='/shopping'){

        return props.fetchAllBook(1, 5, null)
      }
      else if(page && show && filter_type && filter_id ){

        props.getBooksByFilter(page, show, filter_type, filter_id);

      }
      else if(page && show && lowerPrice && higherPrice) {

        return props.filterByPrice(page, show, lowerPrice, higherPrice)

      }else if(id === 'all' && pageNumber  && showItem  && keyword) {

        return props.fetchAllBook(page, show, keyword)

      }else if(isNaN_id !== NaN && page && show) {

        return props.fetchBooksByCategory(id, page, show);

      }

    },[sortBy, higherPrice, lowerPrice, page, show, id, filter_type, filter_id])

  const handleShowBook = (e)=> {
    e.preventDefault()
    setShowBook(e.target.value);
  }

  const handleNext = (e) => {
      e.preventDefault();
      if(page !== totalPage){
       return setPage(++page)
      }
  }

  const handlePreviews = (e)=>{
    e.preventDefault();
    if(page !== 1){
      setPage(--page)
    }
    if(page === 0) return setPage(1)
  }
  const handleSortBy = (e) =>{
      e.preventDefault();
      return setSortBy(e.target.value)
  }

  return (
    <>
      <PageLoader loading={props.book.pending}/>
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
                  <Filters
                   callback={PriceRange} />
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
                  {books.length === 0? <h1 className="text-center">Sorry, No Result Found :(</h1> :<>

                  <Row className="Pagination-Row mb-5">
                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Sort By</label>
                          </li>
                          <li>
                            <select className="filterSelect form-control" value={sortBy} onChange ={handleSortBy}>
                              <option value="">select</option>
                              <option value="Popular">Popular</option>
                              <option value="New">New</option>
                              <option value="Price: low to high">Price: low to high</option>
                              <option value="Price: high to low">Price: high to low</option>
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
                            <li className={`page-item ${classes.page_field}`} onClick={handlePreviews}>
                              <button className="page-link">
                                <i className="fas fa-chevron-left"></i>
                              </button>
                            </li>
                            <li className={`page-item ${classes.page_field}`}>Page</li>
                            <li className={`page-item ${classes.page_field}`}>
                              <input id="page" type="text" className="page-link" value={ page } readOnly/>


                            </li>
                            <li className="page-item">of</li>
                            <li className={`page-item ${classes.page_field}`}>
                              <input type="text" id="total-page" value= {props.book.totalPage} className="page-link" readOnly/>
                            </li>
                            <li className="page-item" onClick={handleNext} >
                              <button className="page-link">
                                <i className="fas fa-chevron-right"></i>
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>

                    </Row>

                    <Row className="Product_Row">
                      {
                        (books.length === 0) ?  <></> : books.map((book, index) => {

                            return (

                              <Col key = {index} sm="3 mb-5">
                                <LazyLoad once={true} height={200}>
                                   <Card className="productCard border-0 bg-transparent">
                                <div className="productMedia mb-3 bgGray">
                                <Link to={`/product/${book.id}`}>
                                  <img src={(book.cover_images !== null) ? `${book.cover_images.img_1}` : '' } alt="" />
                                  </Link>
                                </div>

                                <div className="productContent">
                                  <Link to={`/product/${book.id}`}>
                                    <h4 className="productTitle limit-character">
                                      {book.name}
                                    </h4>
                                  </Link>
                                  <h5 className="authorName">{book.book_author.name}</h5>
                                  <p className="productPrice">$ {book.price} </p>
                                </div>
                              </Card>
                                </LazyLoad>
                            </Col>
                            );
                        })
                      }
                    </Row>

                    <Row className="Pagination-Row mt-5">
                      <div className="col">
                        <ul className="singleFilter d-flex align-items-center">
                          <li>
                            <label htmlFor="">Sort By</label>
                          </li>
                          <li>
                            <select className="filterSelect form-control" value={sortBy} onChange ={handleSortBy}>
                              <option value="">select</option>
                              <option value="Popular">Popular</option>
                              <option value="New">New</option>
                              <option value="Price: low to high">Price: low to high</option>
                              <option value="Price: high to low">Price: high to low</option>
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
                            <li className={`page-item ${classes.page_field}`}>Page</li>
                            <li className={`page-item ${classes.page_field}`}>
                              <input id="next-page" type="text" className="page-link" value={ page } readOnly/>


                            </li>
                            <li className="page-item">of</li>
                            <li className={`page-item ${classes.page_field}`}>
                              <input type="text" id="total-page" value= {props.book.totalPage} className="page-link" readOnly/>
                            </li>
                            <li className="page-item" onClick={handleNext} >
                              <button className="page-link">
                                <i className="fas fa-chevron-right"></i>
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>

                    </Row>

                  </>
}
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
   favorite: state.favorite,
   filter: state.filter,
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    fetchAllBook         : (page, show) => dispatch(fetchAllBook(page, show)),
    fetchBooksByCategory : (id, page, show) => dispatch(fetchBooksByCategory(id, page, show)),
    filterByPrice        : (page,show,lowPrice,highestPrice)=>dispatch(filterByPriceRange(page,show,lowPrice,highestPrice)),
    filterShortBy        : (page,show,query)=>dispatch(filterShortBy(page,show,query)),
    stageList            : (category_id) => dispatch(fetchStages(category_id)),
    getBooksByFilter     : (page, show, filterType, filterId) => dispatch(fetchBooksByFilter(page, show, filterType, filterId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
