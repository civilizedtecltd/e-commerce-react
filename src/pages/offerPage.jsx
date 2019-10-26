import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';

//Payment Icon Images
import paypalIcon from '../assets/images/paypal_icon_img.png';
import masterCardIcon from '../assets/images/master_card_icon_img.png';
import visaIcon from '../assets/images/visa_icon_img.png';

// Product Images
import blogPostImage1 from '../assets/images/post_img_01.jpg';

import {NewBookDB}from '../inc/offerPage/NewBook'
import{NewBookComponent} from '../components/offerPageComponents/NewBookComponent'
import{NewsLetterComponent} from '../components/offerPageComponents/NewsLetterComponent'
 

const offerPage = () => {
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

        <section className="offerBanner clearfix sectionBgImage sectionBgImg02" id="offerBanner">
          <Container className="container">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="offerBannerCard text-center">
                  <h1 className="offerBannerTitle mb-3">Back to school offer</h1>
                  <h2 className="discountTxt mb-3">50%</h2>
                  <h3 className="offerBannerPara mb-3">On all biology books</h3>
                  <Link to="#" className="btn offerBannerBtn shadow">Shop now <i className="fas fa-arrow-right"></i></Link>
                </div>{/* end of bannerCard */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of banner */}

        <section class="newProduct productView secGap bgGray clearfix" id="newProduct">
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className="sectionTitle mb-5"><span>New</span> Book</h2>
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}

            <Row className="justify-content-between">

              {NewBookDB.map((newBook, index) => <NewBookComponent
                key={index}
                BookImage={newBook.Img}
                ProductTitle={newBook.Title}
                AuthorName={newBook.Author}
                ProductPrice={newBook.Price}
              />)

              }

            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of newProduct */}

        <section className="blogArea secGap clearfix" id="blogArea">
          <Container>
            <Row>
              <Col sm="8">
                <article className="singleArticle articleArea">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>{/* end of articleMedia */}

                  <div className="articleBody p-5">
                    <h2 className="postTitle mb-2"><Link to="#">New books on math</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                  </div>{/* end of articleBody */}
                </article>{/* end of singleArticle */}
              </Col>{/* end of Col */}

              <Col sm="4">
                <article className="singleArticle articleArea">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>{/* end of articleMedia */}

                  <div className="articleBody p-3">
                    <h2 className="postTitle mb-1"><Link to="#">Environment programm</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                  </div>{/* end of articleBody */}
                </article>{/* end of singleArticle */}

                <article className="singleArticle articleArea mt-3">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>{/* end of articleMedia */}

                  <div className="articleBody p-3">
                    <h2 className="postTitle mb-1"><Link to="#">Environment programm</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>{/* end of articleBody */}
                </article>{/* end of singleArticle */}
              </Col>{/* end of Col */}

            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of blogArea */}

        <section className="actualProduct productView secGap clearfix" id="newProduct">
          <Container>
            <Row className="justify-content-between align-items-center mb-5">
              <Col>
                <h2 className="sectionTitle"><span>Actual </span> New</h2>
              </Col>{/* end of Col */}

              <Col className="text-right">
                <Link to="#" className="btn linkBtn">View more</Link>
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}

            <Row className="justify-content-between">

              {NewBookDB.map((newBook, index) => <NewBookComponent
                  key={index}
                  BookImage={newBook.Img}
                  ProductTitle={newBook.Title}
                  AuthorName={newBook.Author}
                  ProductPrice={newBook.Price}
                />)
              }

            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of newProduct */}

        <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
          <Container className="container">

              <NewsLetterComponent/>
              
          </Container>{/* end of Container */}
        </section>{/* end of mailSubscribe */}

      </main>{/* end of mainContent */}

      <footer className="footer clearfix bg-white pt-5 pb-5" id="footer">
        <Container>
          <Row>
            <Col>
              <div className="footerWidget">
                <div className="footerLogo">
                  <div className="logoWrapper">
                    <h1 className="logoText"><Link to="#">LOGO</Link></h1>
                  </div>{/*  end of logoWrapper */}
                </div>{/*  end of footerLogo */}
              </div>{/*  end of footerWidget */}
            </Col> {/*  end of col */}

            <Col sm="5">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Information</h4>
                <ul className="footerLinksList">
                  <li><Link to="#">Order status</Link></li>
                  <li><Link to="#">How to place an order</Link></li>
                  <li><Link to="#">Return</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Delivery details</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Our support center</Link></li>
                </ul>{/*  end of footerLinksList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col sm="2">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Contact us</h4>
                <ul className="getInTouchList">
                  <li>
                    <Link to="mailto:you@example.com" title="click to mail us">you@example.com</Link>
                  </li>{/*  end of li */}
                  <li>
                    <Link to="tele:1234567890" title="click to call us">+(123) 456 7890</Link>
                  </li>{/*  end of li */}
                  <li>
                    <p>Your long address, city, region, zip code</p>
                  </li>{/*  end of li */}
                </ul>{/*  end of getInTouchList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col className="align-self-center">
              <div className="footerWidget">
                <ul className="footerSocial">
                  <li className="facebook"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li className="facebook"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li className="facebook"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                </ul>{/*  end of footerSocial */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </footer>{/* end of footer */}

      <div className="footerBottom clearfix pb-3" id="footerBottom">
        <Container>
          <hr className="hrBorder" />
          <Row className="align-items-center justify-content-between">
            <Col>
              <p className="copyrights">© 2019 All Rights Reserved</p>
            </Col>{/* end of Col */}

            <Col sm="3">
              <ul className="paymentsNav d-flex justify-content-between align-items-center">
                <li className="paypal">
                  <Link to="#" title="paypal"><img alt="paypal" src={paypalIcon} title="paypal" /></Link>
                </li>{/* end of li */}
                <li className="visa">
                  <Link href="#" title="visa"><img alt="visa card" src={visaIcon} title="visa card" /></Link>
                </li>{/* end of li */}
                <li className="master">
                  <Link to="#" title="master card"><img alt="master card" src={masterCardIcon} title="master card" /></Link>
                </li>{/* end of li */}
              </ul>{/* end of paymentsNav */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of footerBottom */}

    </div>{/* end of allWrapper */}


  </>);
}

export default offerPage;