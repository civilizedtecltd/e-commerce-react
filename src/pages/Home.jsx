
import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card,} from 'react-bootstrap';
import '../pages/assets/home.css'
// Category Section Images
import productCatImg from '../assets/images/product_cat_img_01.jpg';
import productCatImg2 from '../assets/images/product_cat_img_02.jpg';
import productCatImg3 from '../assets/images/product_cat_img_03.jpg';

// Feature Icon Images
import featureIcon1 from '../assets/images/feature_icon_img_01.png';
import featureIcon2 from '../assets/images/feature_icon_img_02.png';
import featureIcon3 from '../assets/images/feature_icon_img_03.png';
import featureIcon4 from '../assets/images/feature_icon_img_04.png';

import FooterComponent from '../components/FooterComponent/FooterComponent';
import { HomeCarouselFooter} from "../components/HomePage/HomeCarouselFooter";
import {NewsLetterComponent} from "../components/offerPageComponents/NewsLetterComponent";
import {HeaderComponent, MobileHeader} from "../components/header/Header";


const Home = () => {
  const cartItem = JSON.parse(window.localStorage.getItem('session'));
  let totalItem= (cartItem !== null) ? (cartItem.length) : 0;
  return (<>

    <div className="allWrapper">

          <HeaderComponent
          cartItem={totalItem}
          />
          <MobileHeader />
      <main className="mainContent clearfix" id="mainContent">
        <section className="productCat secGap clearfix" id="productCat">
          <Container>
            <Row>

                <Col sm="4">
                   <Link to="/shop/category/1">
                <Card className="productCatCard">
                  <div className="productCatMedia">
                    <img src={productCatImg} alt="" />
                  </div>{/* end of productCatMedia*/}
                  <Card.Body className="text-center">
                    <h3 className="productCatTitle">Kindergarten</h3>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of productCatCard */}
              </Link>
                </Col>{/* end of Col */}

              <Col sm="4">
                <Link to="/shop/category/2">
                    <Card className="productCatCard">
                        <div className="productCatMedia">
                            <img src={productCatImg2} alt="" />
                        </div>{/* end of productCatMedia*/}
                        <Card.Body className="text-center">
                            <h3 className="productCatTitle">Primary school</h3>
                        </Card.Body>{/* end of Card.Body */}
                    </Card>{/* end of productCatCard */}
                </Link>
              </Col>{/* end of Col */}

              <Col sm="4">
                <Link to="/shop/category/3">
                    <Card className="productCatCard">
                        <div className="productCatMedia">
                            <img src={productCatImg3} alt="" />
                        </div>{/* end of productCatMedia*/}
                        <Card.Body className="text-center">
                            <h3 className="productCatTitle">Secondary school</h3>
                        </Card.Body>{/* end of Card.Body */}
                    </Card>{/* end of productCatCard */}
                </Link>
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
                    <img src={featureIcon1} alt="" />
                  </div>{/* end of featureMedia */}

                  <Card.Body className="text-center">
                    <h4>Fast delivery</h4>
                    <p>Lorem ipsum dolor sit ament, consent etui advising elite, sed do elusion</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={featureIcon2} alt="" />
                  </div>{/* end of featureMedia */}

                  <Card.Body className="text-center">
                    <h4>LOREM IPSUM</h4>
                    <p>Lorem ipsum dolor sit ament, consent etui advising elite, sed do elusion</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={featureIcon3} alt="" />
                  </div>{/* end of featureMedia */}

                  <Card.Body className="text-center">
                    <h4>Dolor set ament</h4>
                    <p>Lorem ipsum dolor sit ament, consent etui advising elite, sed do elusion</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={featureIcon4} alt="" />
                  </div>{/* end of featureMedia */}

                  <Card.Body className="text-center">
                    <h4>Advising vera</h4>
                    <p>Lorem ipsum dolor sit ament, consent etui advising elite, sed do elusion</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of ourBenefits */}

        <section className="ourPartners clearfix secGap" id="ourPartners">
          <Container>
            <Row>
              <Col>
                <div className="partnersCarousel">
                  <HomeCarouselFooter/>
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

