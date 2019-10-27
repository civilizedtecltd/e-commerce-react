import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import HeaderComponent from '../components/header/Header';

// Category Section Images
import productCatImg from '../assets/images/product_cat_img_01.jpg';
import productCatImg2 from '../assets/images/product_cat_img_02.jpg';
import productCatImg3 from '../assets/images/product_cat_img_03.jpg';

// Feature Icon Images
import freatureIcon1 from '../assets/images/feature_icon_img_01.png';
import freatureIcon2 from '../assets/images/feature_icon_img_02.png';
import freatureIcon3 from '../assets/images/feature_icon_img_03.png';
import freatureIcon4 from '../assets/images/feature_icon_img_04.png';



//Carousel Images
import carouselItem1 from '../assets/images/partners_logo_img_01.png';
import carouselItem2 from '../assets/images/partners_logo_img_02.png';
import carouselItem3 from '../assets/images/partners_logo_img_03.png';
import carouselItem4 from '../assets/images/partners_logo_img_04.png';
import carouselItem5 from '../assets/images/partners_logo_img_05.png';
import carouselItem6 from '../assets/images/partners_logo_img_06.png';
import FooterComponent from '../components/FooterComponent/FooterComponent';


const Home = () => {
  return (<>

    <div className="allWrapper">
    <HeaderComponent/>
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

        <section className="ourPartners clearfix secGap" id="ourPartners">
          <Container>
            <Row>
              <Col>
                <div className="partnersCarousel">
                  <ul className="d-flex partnerCarouselItem align-items-center justify-content-between">
                    <li className="item"><img src={carouselItem1} alt="" /></li>
                    <li className="item"><img src={carouselItem2} alt="" /></li>
                    <li className="item"><img src={carouselItem3} alt="" /></li>
                    <li className="item"><img src={carouselItem4} alt="" /></li>
                    <li className="item"><img src={carouselItem5} alt="" /></li>
                    <li className="item"><img src={carouselItem6} alt="" /></li>
                  </ul>{/* end of partnerCarousel */}
                </div>{/* end of partnersCarousel */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of ourPartners */}

        <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
          <Container className="container">
            <Row className="justify-content-center">
              <Col sm="10">
                <Card className="subscribeCard border-0 rounded-0">
                  <Card.Body className="text-center pt-5 pb-5">
                    <h1>Subscribe to our newsletter</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> enim ipsam voluptatem quia voluptas quia non numquam eius</p>
                    
                    <Form className="d-flex subscribeForm justify-content-center mt-3">

                      <Form.Group controlId="mailSubscribe" className="mb-2">
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>{/* end of Form.Group */}

                      <Button type="submit" className="mb-2">Subscribe</Button>

                    </Form>{/* end of Form */}
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of mailSubscribe */}

      </main>{/* end of mainContent */}

      <FooterComponent/>

    </div>{/* end of allWrapper */}
    
  </>);
}

export default Home;

