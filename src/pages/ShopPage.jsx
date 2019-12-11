import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import { connect  } from 'react-redux';
import { createUseStyles } from 'react-jss'
import {fetchAllBook, fetchBooksByCategory} from '../redux/actions/bookActions';
import Filters from '../components/shop/FiltersComponents'

// Product Images
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { URL } from '../constants/config';
import './assets/shop.css';
const useStyle = createUseStyles({
  page_field:{
    width: "50px",
    marginRight: "5px",
    marginLeft:'5px'
  }
})

const ShopPage = (props) => {
    const classes = useStyle()

    const { id, title , pageNumber , showItem, keyword } =  useParams();

    const totalItem = props.cart.length
    const favoriteItem = props.favorite;
    const books = (props.book.data !== undefined ) ? props.book.data : [];

    const [show , setShowBook ] = useState(5);
    let   [page , setPage ] = useState(1);
    const [totalPage , setTotalPage] = useState(1)


    const total_pages = (Number(show) !== 0 && Number(show) <= Number(props.totalItem)) ? Math.ceil(Number(props.totalItem)/Number(show)) : 1 ;

    if(totalPage !== total_pages){
      setTotalPage(total_pages);
    }

    if(Number(show) !== Number(props.showItem)){
      setShowBook(Number(props.showItem));
    }


    useEffect(() => {
      if(pageNumber !== undefined && showItem !==  undefined && keyword !== undefined ) return  books;
      return ( id === 'all') ? props.fetchAllBook(page, show) : props.fetchBooksByCategory(id, page,show) ;

    },[]);

  const handleShowBook = (e)=> {
    e.preventDefault()
    setShowBook(Number(e.target.value));
    const t_pages = (Number(e.target.value) !== 0 && Number(e.target.value) <= Number(props.totalItem)) ? Math.ceil(Number(props.totalItem)/Number(e.target.value)) : 1 ;
    setTotalPage(t_pages);

    return ( id === 'all') ? props.fetchAllBook(page, Number(e.target.value)) : props.fetchBooksByCategory(id, page, Number(e.target.value));
  }

  const handleNext = (e) => {
      e.preventDefault();
      if(page!==totalPage){
        setPage(++page)
        return ( id === 'all') ? props.fetchAllBook(page, show) : props.fetchBooksByCategory(id, page, show);
      }

  }

  const handlePreviews = (e)=>{
    e.preventDefault();
    if(page !== 1){
      setPage(--page)
      return ( id === 'all') ? props.fetchAllBook(page, show) : props.fetchBooksByCategory(id, page, show);
    }
    if(page === 0) return setPage(1)
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
                  <Filters />
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
                            <label htmlFor=""> Sort By</label>
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

                                <div className="productContent">
                                  <Link to={`/product/${book.id}`}>
                                    <h4 className="productTitle limit-character mb-1">
                                      {book.name}
                                    </h4>
                                  </Link>
                                  <h5 className="authorName mb-1">{book.book_author.name}</h5>
                                  <p className="productPrice">$ {book.price} </p>
                                </div>
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
                            <li className={`page-item ${classes.page_field}`}>Page</li>
                            <li className={`page-item ${classes.page_field}`}>
                              <input id="next-page" type="text" className="page-link" value={ page } readOnly/>


                            </li>
                            <li className="page-item">of</li>
                            <li className={`page-item ${classes.page_field}`}>
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
