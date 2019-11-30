import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import  './assets/offerPage.css';
import '../assets/css/theme.css';
// Product Images
import blogPostImage1 from '../assets/images/post_img_01.jpg';

import {NewBookDB}from '../inc/offerPage/NewBook'
import {ImgSlick, NewBookComponent} from '../components/offerPageComponents/NewBookComponent'
import{NewsLetterComponent} from '../components/offerPageComponents/NewsLetterComponent'
import FooterComponent from '../components/FooterComponent/FooterComponent';
import {HeaderComponent, MobileHeader} from '../components/header/Header';

import store from '../redux/store'

const offerPage = () => {

  const totalItem = store.getState().shop.cart.length

  return (<>

    <div className="allWrapper">
      <HeaderComponent cartItem={totalItem}/>
      <MobileHeader />
      <main className="mainContent clearfix" id="mainContent">
        <section className="offerBanner clearfix sectionBgImage sectionBgImg02" id="offerBanner">
          <Container className="container">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="offerBannerCard text-center">
                  <h1 className="offerBannerTitle mb-3">Back to school offer</h1>
                  <h2 className="discountTxt mb-3">50%</h2>
                  <h3 className="offerBannerPara mb-3">On all biology books</h3>
                  <Link to="/shop" className="btn offerBannerBtn shadow">Shop now <i className="fas fa-arrow-right"></i></Link>
                </div>{/* end of bannerCard */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of banner */}

        <section className="newProduct productView secGap bgGray clearfix" id="newProduct">
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className="sectionTitle mb-5"><span>New</span> Book</h2>
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
            <div className="ImageSlickOfferPage">
              <ImgSlick/>
            </div>
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
                    <p className="postPara">Lorem ipsum dolor sit ament, connecter advising elite, sed do elusion</p>
                  </div>{/* end of articleBody */}
                </article>{/* end of singleArticle */}
              </Col>{/* end of Col */}

              <Col sm="4">
                <article className="singleArticle articleArea">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>{/* end of articleMedia */}

                  <div className="articleBody p-3">
                    <h2 className="postTitle mb-1"><Link to="#">Environment programme</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit ament, connecter advising elite, sed do elusion</p>
                  </div>{/* end of articleBody */}
                </article>{/* end of singleArticle */}

                <article className="singleArticle articleArea mt-3">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>{/* end of articleMedia */}

                  <div className="articleBody p-3">
                    <h2 className="postTitle mb-1"><Link to="#">Environment programme</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit ament, connecter advising elite, sed do elusion</p>
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
                  ImageBg="bgGray"
                  BookImage={newBook.Img}
                  ProductTitle={newBook.Title}
                  AuthorName={newBook.Author}
                  ProductPrice={newBook.Price}
                />

                )
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
     <FooterComponent/>
    </div>{/* end of allWrapper */}


  </>);
}

export default offerPage;
