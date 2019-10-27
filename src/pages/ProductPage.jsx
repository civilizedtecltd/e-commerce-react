import React , { useState } from 'react';
import '../pages/assets/product.css'
import FooterComponent from '../components/FooterComponent/FooterComponent';
import {NewsLetterComponent} from "../components/offerPageComponents/NewsLetterComponent";
import {Col, Container, Row ,Modal ,Button} from "react-bootstrap";
import {NewBookDB} from "../inc/offerPage/NewBook";
import {ImgSlick, NewBookComponent} from "../components/offerPageComponents/NewBookComponent";
import { ImageCarrosull} from "../components/ProductImgCarosellComponents/ProductImgCarosell";
import reviews_avater from "../assets/images/reviews_avater.jpg"
import {Link} from 'react-router-dom';


function ProductPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return (<>
      <div className="allWrapper">

        <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
          <Container>
            <Row className="justify-content-between">
              <Col>
                <div className="headFeature">
                  <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
                </div>
                {/* end of headFeature */}
              </Col>{/* end of Col */}

              <Col className="col-auto">
                <div className="headFeature">
                  <ul className="headFeatureList d-flex justify-content-between">
                    <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                    <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                    <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                  </ul>
                  {/* end of headFeatureList */}
                </div>
                {/* end of headFeature */}
              </Col>{/* end of Col */}

            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </div>
        {/* end of headerTopBar */}

        <header className="header clearfix" id="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-2">
                <div className="logoWrapper">
                  <h1 className="logoText"><a href="#">LOGO</a></h1>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="headerNav clearfix" id="headerNav">
                  <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Kindergarten <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Primary school</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Secondary school</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Stationery</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Bibles</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="headPopBar clearfix" id="headPopBar">
                  <ul className="headPopBarList d-flex justify-content-between">
                    <li><a href="#"><i className="fas fa-search"></i> Search</a></li>
                    <li><a href="#"><i className="far fa-star"></i> Favorites</a></li>
                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Cart</a></li>
                    <li><a href="#"><i className="far fa-user"></i> Login</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </header>

        <main className="mainContent clearfix" id="mainContent">

          <section className="breadcrumbArea secGap pb-0 clearfix" id="breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Primary school </a></li>
                      <li className="breadcrumb-item"><a href="#">Shop </a></li>
                      <li className="breadcrumb-item active" aria-current="page">Product Page</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>

          <section className="mainBodyContent productDetails secGap clearfix" id="mainBodyContent">
            <div className="container">
              <div className="row">

                <div className="col-sm-6">
                  <ImageCarrosull/>
                </div>
                <div className="col-sm-6">
                  <div className="card productCardDetails border-0">
                    <div className="card-header border-0 bg-white">
                      <div className="productCardHead">
                        <h2 className="productSingleTitle">Math time className - 2</h2>
                        <ul className="productReviewStar">
                          {[1,2,3,4,5].map(rating=><li className="5star"><i className="fas fa-star"></i></li>)}
                        </ul>
                        <p>(7 reviews)</p>
                      </div>
                      <h6 className="authName">by <a href="#">Sam Smith</a></h6>
                    </div>

                    <div className="card-body productCardBody">
                      <h5 className="productsinglePrice mb-4">$ 16.99 <span className="productAvaility">Available</span>
                      </h5>
                      <div className="productSortDes">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          enim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum.</p>
                      </div>

                      <div className="productBtnGroup mt-4 clearfix">
                        <div className="row no-gutters">
                          <div className="col-sm-2">
                            <input className="form-control inputValue" type="number" value="1"/>
                          </div>

                          <div className="col text-center">
                            <a href="#" className="btn linkBtn"  onClick={handleShow} ><i
                                className="fas fa-shopping-cart"></i> Add to cart</a>
                          </div>

                          <div className="col text-center">
                            <Link to="/" className="btn linkBtnBorder"><i className="far fa-star"></i>Add to favorites</Link>
                          </div>
                        </div>
                        <hr className="hrBorder mt-4"/>
                      </div>

                      <div className="productDetailsNavTabs mt-3 clearfix">
                        <ul className="nav nav-pills productNavTabs mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="pills-description-tab" data-toggle="pill"
                               href="#pills-description" role="tab" aria-controls="pills-description"
                               aria-selected="true">Description</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="pills-specifications-tab" data-toggle="pill"
                               href="#pills-specifications" role="tab" aria-controls="pills-specifications"
                               aria-selected="false">Specifications</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="pills-reviews-tab" data-toggle="pill" href="#pills-reviews"
                               role="tab" aria-controls="pills-reviews" aria-selected="false">Reviews (7)</a>
                          </li>
                        </ul>

                        <div className="tab-content productTabContent" id="pills-tabContent">
                          <div className="tab-pane fade show active" id="pills-description" role="tabpanel"
                               aria-labelledby="pills-description-tab">
                            <div className="productDes">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                temporenim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                temporenim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                temporenim ipsam voluptatem quia voluptas quia non numquam eius. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="pills-specifications" role="tabpanel"
                               aria-labelledby="pills-specifications-tab">
                            <ul className="specifications">
                              <li><strong>Author :</strong> Sam Smith</li>
                              <li><strong>Discipline : </strong> Math</li>
                              <li><strong>Stage : </strong> Class 2</li>
                              <li><strong>Publishing house : </strong> Lorem Ipsum</li>
                              <li><strong>Publishing year </strong> 2012</li>
                              <li><strong>Book cover : </strong> Lorem ipsum</li>
                              <li><strong>Language : </strong> English</li>
                              <li><strong>Number of pages : </strong> 135</li>
                            </ul>

                          </div>

                          <div className="tab-pane fade" id="pills-reviews" role="tabpanel"
                               aria-labelledby="pills-reviews-tab">
                            <div className="productReviews clearfix">

                              <div className="card singleReview border-0">
                                <div className="row no-gutters">
                                  <div className="col-auto">
                                    <div className="reviewUserAvater">
                                      <img src="assets/images/reviews_avater.jpg" alt=""/>
                                    </div>
                                  </div>

                                  <div className="col pl-2">
                                    <div className="reviewCardBody">
                                      <div className="row reviewUserInfo">
                                        <div className="col mb-2">
                                          <h6 className="reviewUserName">Sam Smith <span className="reviewDate">May 26, 12:31</span>
                                          </h6>
                                        </div>
                                        <div className="col">
                                          <ul className="productReviewStar justify-content-end">
                                            {[1,2,3,4,5].map(rating=><li className="5star"><i className="fas fa-star"></i></li>)}
                                          </ul>
                                        </div>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        enim ipsam voluptatem quia voluptas quia non numquam eius.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card singleReview border-0">
                                <div className="row no-gutters">
                                  <div className="col-auto">
                                    <div className="reviewUserAvater">
                                      <img src={reviews_avater} alt=""/>
                                    </div>
                                  </div>

                                  <div className="col pl-2">
                                    <div className="reviewCardBody">
                                      <div className="row reviewUserInfo">
                                        <div className="col mb-2">
                                          <h6 className="reviewUserName">Sam Smith <span className="reviewDate">May 26, 12:31</span>
                                          </h6>
                                        </div>
                                        <div className="col">
                                          <ul className="productReviewStar justify-content-end">
                                            {[1,2,3,4,5].map(rating=><li className="5star"><i className="fas fa-star"></i></li>)}
                                          </ul>
                                        </div>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        enim ipsam voluptatem quia voluptas quia non numquam eius.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card singleReview border-0">
                                <div className="row no-gutters">
                                  <div className="col-auto">
                                    <div className="reviewUserAvater">
                                      <img src={reviews_avater} alt=""/>
                                    </div>
                                  </div>

                                  <div className="col pl-2">
                                    <div className="reviewCardBody">
                                      <div className="row reviewUserInfo">
                                        <div className="col mb-2">
                                          <h6 className="reviewUserName">Sam Smith <span className="reviewDate">May 26, 12:31</span>
                                          </h6>
                                        </div>
                                        <div className="col">
                                          <ul className="productReviewStar justify-content-end">
                                            {[1,2,3,4,5].map(rating=><li className="5star"><i className="fas fa-star"></i></li>)}
                                          </ul>
                                        </div>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        enim ipsam voluptatem quia voluptas quia non numquam eius.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>

                            <div className="postReviews clearfix">
                              <h3>Post a review</h3>
                              <ul className="productReviewStar postReviewStar mb-3">
                                {[1,2,3,4,5].map(rating=><li className="5star"><i className="fas fa-star"></i></li>)}
                              </ul>

                              <form className="postReviewsForm">
                                <textarea name="" id="" cols="30" rows="5"
                                          placeholder="Share your experience"></textarea>
                                <button className="btn btn-primary mt-3">Post a review</button>
                              </form>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <hr/>
          <section className="similarBooks productView secGap clearfix secBorder" id="similarBooks">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h2 className="sectionTitle mb-5"><span>Similar</span> Book</h2>
                </div>
              </div>

              <ImgSlick/>

            </div>
          </section>


        </main>

        <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
          <Container className="container">

            <NewsLetterComponent/>

          </Container>{/* end of Container */}
        </section>
        {/* end of mailSubscribe */}

        <FooterComponent/>

      </div>





      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={'border-0'} closeButton> </Modal.Header>
        <Modal.Body> <h2 className={"text-center"}>Product added to cart successfully!</h2> </Modal.Body>
        <Modal.Footer className={'border-0'}>
            <Button variant={"primary"}> Go to checkout</Button>
            <button className="linkBtnBorder" style={{borderRadius:"4px"}} > Continue shoping </button>
        </Modal.Footer>
      </Modal>
    </>)
  }
export default ProductPage;