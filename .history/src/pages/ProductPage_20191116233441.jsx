import React, { useState ,useEffect } from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import { Container, Modal, Button } from "react-bootstrap";
import { Link , useParams } from "react-router-dom";

import {addToCard , show_single_book} from '../redux/actions/actions'
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import { ImgSlick } from "../components/offerPageComponents/NewBookComponent";
import { ImageCarousel } from "../components/ProductImgCarosellComponents/ProductImgCarosell";

import {HeaderComponent, MobileHeader} from "../components/header/Header";
import TabComponent from "../components/TabComponent/TabComponent";
import RatingComponent from "../components/ratingComponent/Rating";
import { URL } from '../constants/config';

import "../pages/assets/product.css";

function ProductPage(props) {

  const { id } =  useParams()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    let checkoutItems = []
    checkoutItems.push(JSON.parse(localStorage.getItem('session')));
    checkoutItems.push(
      {userID:1,productID:1},
      {userID:1,productID:2},
      {userID:1,productID:3},
      {userID:1,productID:5},
      )
    localStorage.setItem('session', JSON.stringify(checkoutItems));
    setShow(true)
  };

  (window.localStorage.getItem('checkoutItems'))

  const book = (props.shop.book !== undefined ) ? props.shop.book : false;

  useEffect(() => {
    const book = async () => {
      const result = await axios(URL._SINGLE_BOOK(id));
      return props.book(result.data.data)
    };
    book();
  }, []);


  return (
    <>
      <div className="allWrapper">
        <HeaderComponent />
        <MobileHeader />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="breadcrumbArea secGap pb-0 clearfix"
            id="breadcrumb"
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="#">Primary school </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Shop </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Product Page
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>

          <section
            className="mainBodyContent productDetails secGap clearfix"
            id="mainBodyContent"
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <ImageCarousel
                    image = {(book ? book.cover_images : false )}
                   />
                </div>

                <div className="col-sm-6">
                  <div className="card productCardDetails border-0">
                    <div className="card-header border-0 bg-white">
                      <div className="productCardHead">
                        <h2 className="productSingleTitle">
                          { book ? book.name : ``}
                        </h2>
                        <RatingComponent  value= { book ? book.rating : 0 }/>
                        <p>(7 reviews)</p>
                      </div>
                      <h6 className="authName">
                        by <Link to = {`${URL.BASE}/api/author/${book ? book.book_author.id : '#'}`} > {book ? book.book_author.name : `` } </Link>
                      </h6>
                    </div>

                    <div className="card-body productCardBody">
                      <h5 className="product-single-Price mb-4">
                        $ {book ? book.price : 0 }
                        <span className="productAvaility">{book ? ((book.status === 1) ? `Available` : `Unavailable`) : ``}</span>
                      </h5>
                      <div className="productSortDes">
                        <p>
                          {book ? book.short_description : ``}
                        </p>
                      </div>

                      <div className="productBtnGroup mt-4 clearfix">
                        <div className="row no-gutters">
                          <div className="col-sm-2">
                            <input
                              className="form-control inputValue"
                              type="number"
                              placeholder="1"
                            />
                          </div>

                          <div className="col text-center">
                            <Link
                              to="#"
                              className="btn linkBtn"
                              onClick={handleShow}
                            >
                              <i className="fas fa-shopping-cart"></i> Add to
                              cart
                            </Link>
                          </div>

                          <div className="col text-center">
                            <Link to="/add-to-fev" className="btn linkBtnBorder">
                              <i className="far fa-star"></i>Add to favorites
                            </Link>
                          </div>
                        </div>
                        <hr className="hrBorder mt-4" />
                      </div>
                      <TabComponent
                        description = {book ? book.long_description : `` }
                        specification = {book ? [{
                            author          : book.book_author.name,
                            discipline      : book.book_discipline.name,
                            stage           : book.book_stage.name,
                            publisher       : book.book_publisher.name,
                            publishing_year : book.book_publishing_year.name,
                            book_cover      : book.book_cover,
                            language        : book.book_language.name,
                            page_number     : book.page_number

                        }] : {}}

                        reviews = {[]}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section
            className="similarBooks productView secGap clearfix secBorder"
            id="similarBooks"
          >
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h2 className="sectionTitle mb-5">
                    <span>Similar</span> Book
                  </h2>
                </div>
              </div>
              <ImgSlick />
            </div>
          </section>
        </main>

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

        <FooterComponent />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={"border-0"} closeButton>
          {" "}
        </Modal.Header>
        <Modal.Body>
          {" "}
          <h2 className={"text-center"}>
            Product added to cart successfully!
          </h2>{" "}
        </Modal.Body>
        <Modal.Footer className={"border-0"}>
          <Link to="/checkout" className="btn btn-primary" style={{color:'white'}}> Go to checkout </Link>
          <button className="linkBtnBorder" style={{ borderRadius: "4px" }}>
            Continue shopping
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


const mapStateToProps = (state)=> {
  return{
    ...state
  }
}


const mapDispatchToProps = (dispatch) => {
    return{
      addTocard:(id)=>dispatch(addToCard(id)),
      book:(book) =>dispatch(show_single_book(book))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductPage);
