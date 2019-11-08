import React, { useState } from "react";

import "../pages/assets/product.css";
//
import FooterComponent from "../components/FooterComponent/FooterComponent";
//
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
//
import { Container, Modal, Button } from "react-bootstrap";
import { ImgSlick } from "../components/offerPageComponents/NewBookComponent";
import { ImageCarousel } from "../components/ProductImgCarosellComponents/ProductImgCarosell";
import { Link } from "react-router-dom";
import {HeaderComponent, MobileHeader} from "../components/header/Header";
import TabComponent from "../components/TabComponent/TabComponent";
import RatingComponent from "../components/ratingComponent/Rating";


function ProductPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                        <Link to="">Primary school </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="">Shop </Link>
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
                  <ImageCarousel />
                </div>

                <div className="col-sm-6">
                  <div className="card productCardDetails border-0">
                    <div className="card-header border-0 bg-white">
                      <div className="productCardHead">
                        <h2 className="productSingleTitle">
                          Math time className - 2
                        </h2>
                        <RatingComponent/>
                        <p>(7 reviews)</p>
                      </div>
                      <h6 className="authName">
                        by <Link to="#">Sam Smith</Link>
                      </h6>
                    </div>

                    <div className="card-body productCardBody">
                      <h5 className="product-single-Price mb-4">
                        $ 16.99{" "}
                        <span className="productAvaility">Available</span>
                      </h5>
                      <div className="productSortDes">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor enim ipsam voluptatem quia
                          voluptas quia non numquam eius. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum.
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
                              {" "}
                              <i className="fas fa-shopping-cart"></i> Add to
                              cart
                            </Link>
                          </div>

                          <div className="col text-center">
                            <Link to="/" className="btn linkBtnBorder">
                              <i className="far fa-star"></i>Add to favorites
                            </Link>
                          </div>
                        </div>
                        <hr className="hrBorder mt-4" />
                      </div>
                      <TabComponent />
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
          <Button variant={"primary"}> Go to checkout</Button>
          <button className="linkBtnBorder" style={{ borderRadius: "4px" }}>
            {" "}
            Continue shopping{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProductPage;
