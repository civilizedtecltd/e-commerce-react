import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import '../pages/assets/home.css'
// Category Section Images
import productCatImg from '../assets/images/product_cat_img_01.jpg';
import productCatImg2 from '../assets/images/product_cat_img_02.jpg';
import productCatImg3 from '../assets/images/product_cat_img_03.jpg';

// Feature Icon Images
import freatureIcon1 from '../assets/images/feature_icon_img_01.png';
import freatureIcon2 from '../assets/images/feature_icon_img_02.png';
import freatureIcon3 from '../assets/images/feature_icon_img_03.png';
import freatureIcon4 from '../assets/images/feature_icon_img_04.png';

//Payment Icon Images
import paypalIcon from '../assets/images/paypal_icon_img.png';
import masterCardIcon from '../assets/images/master_card_icon_img.png';
import visaIcon from '../assets/images/visa_icon_img.png';

import FooterComponent from '../components/FooterComponent/FooterComponent';
import {HomeCarosellFotter} from "../components/HomePage/HomeCarosellFotter";
import {NewsLetterComponent} from "../components/offerPageComponents/NewsLetterComponent";


const Home = () => {
  return (<>

    <div className="allWrapper">
      <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container>
          <Row className="justify-content-between">
            <Col>
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>{/* end of headFeatureList */}
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of headerTopBar */}

      <header className="header userHeader clearfix" id="header">
        <Container>
          <Row className="align-items-center">
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}

            </Col>{/* end of Col */}

            <Col>
              <nav className="mainMenu mainNav" id="mainNav">
                <ul className="navTabs">
                  <li>
                    <Link to="#" className="active">Home</Link>
                  </li>{/* end of li */}
                </ul>{/* end of navTabs */}

              </nav>{/* end of Nav */}
              <Link to="#" className="generalLink" id="responsiveMainNavToggler"><i className="fa fa-bars"></i></Link>
              <div className="clearfix"></div>
              <div className="responsiveMainNav"></div>{/* end of Nav */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between align-items-center">
                  <li><Link to="/"><i className="fas fa-search"></i> Search</Link></li>
                  <li><Link to="/"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li><Link to="/"><i className="far fa-user"></i> Login</Link></li>
                </ul>{/* end of headPopBarList */}
              </div>{/* end of headPopBar */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </header>{/* end of header */}

      <main className="mainContent clearfix" id="mainContent">
        <section className="productCat secGap clearfix" id="productCat">
          <Container>
            <Row>

              <Col sm="4">
                <Card className="productCatCard">
                  <div className="productCatMedia">
                    <Link to="#"><img src={productCatImg} alt="" /></Link>
                  </div>{/* end of productCatMedia*/}
                  <Card.Body className="text-center">
                    <Link to="#"><h3 className="productCatTitle">Kindergarten</h3></Link>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of productCatCard */}
              </Col>{/* end of Col */}

              <Col sm="4">
                <Card className="productCatCard">
                  <div className="productCatMedia">
                    <Link to="#"><img src={productCatImg2} alt="" /></Link>
                  </div>{/* end of productCatMedia*/}
                  <Card.Body className="text-center">
                    <Link to="#"><h3 className="productCatTitle">Primary school</h3></Link>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of productCatCard */}
              </Col>{/* end of Col */}
              
              <Col sm="4">
                <Card className="productCatCard">
                  <div className="productCatMedia">
                    <Link to="#"><img src={productCatImg3} alt="" /></Link>
                  </div>{/* end of productCatMedia*/}
                  <Card.Body className="text-center">
                    <Link to="#"><h3 className="productCatTitle">Secondary school</h3></Link>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of productCatCard */}
              </Col>{/* end of Col */}
              
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of productCat */}

        <section className="ourBenefits clearfix secGap bgGray" id="ourBenefits">
          <Container>
            <Row>
              <Col>
                <h2 className="sectionTitle mb-5 text-center">Our <span>benefits</span></h2>
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}

            <Row>

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon1} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>Fast delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon2} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>LOREM IPSUM</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon3} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>Dolor set amet</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon4} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>Adipiscing vero</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of ourBenefits */}

        <section className="ourPartners clearfix p-5" id="ourPartners">
          <Container>
            <Row>
              <Col>
                <div className="partnersCarousel">


                    <HomeCarosellFotter/>

                </div>{/* end of partnersCarousel */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of ourPartners */}

        <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
          <Container className="container">
            <NewsLetterComponent/>
          </Container>{/* end of Container */}
        </section>{/* end of mailSubscribe */}

      </main>{/* end of mainContent */}

      <FooterComponent/>

    </div>{/* end of allWrapper */}
    
  </>);
}

export default Home;

