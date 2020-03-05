import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux'
import  './assets/offerPage.css';
import '../assets/css/theme.css';
import NewBookComponent from '../components/offerPageComponents/NewBookComponent';
import ImgSlick from '../components/offerPageComponents/ImgSlickComponent';
import {NewsLetterComponent} from '../components/offerPageComponents/NewsLetterComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import HeaderComponent from "../components/header/Header";
import MobileHeader from "../components/header/MobileHeader";
import {NewBookDB}from '../inc/offerPage/NewBook';
import blogPostImage1 from '../assets/images/post_img_01.jpg';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import bannerImage from '../assets/images/banner_img_01.jpg'


const offerPage = (props) => {

  const totalItem = props.cart.length
  const favoriteItem = props.favorite.items;

  const image =[
    {
      book_author:"Author 1",
      cover_images:{
        img_1: bannerImage,
        img_2: bannerImage,
        img_3: bannerImage
      }
    },
   
  
  ]
  return (<>
  <PageLoader loading={props.favorite.pending}/>
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
        <section className="offerBanner clearfix sectionBgImage sectionBgImg02" id="offerBanner">
          <Container className="container">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="offerBannerCard text-center">
                  <h1 className="offerBannerTitle mb-3">Back to school offer</h1>
                  <h2 className="discountTxt mb-3">50%</h2>
                  <h3 className="offerBannerPara mb-3">On all biology books</h3>
                  <Link to="/shop" className="btn offerBannerBtn shadow">Shop now <i className="fas fa-arrow-right"></i></Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="newProduct productView secGap bgGray clearfix" id="newProduct">
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className="sectionTitle mb-5"><span>New</span> Book</h2>
              </Col>
            </Row>
            <div className="ImageSlickOfferPage">
              <ImgSlick images={image}/>
            </div>
          </Container>
        </section>

        <section className="blogArea secGap clearfix" id="blogArea">
          <Container>
            <Row>
              <Col sm="8">
                <article className="singleArticle articleArea">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>

                  <div className="articleBody p-5">
                    <h2 className="postTitle mb-2"><Link to="#">New books on math</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit ament, connecter advising elite, sed do elusion</p>
                  </div>
                </article>
              </Col>

              <Col sm="4">
                <article className="singleArticle articleArea">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>

                  <div className="articleBody p-3">
                    <h2 className="postTitle mb-1"><Link to="#">Environment programme</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit ament, connecter advising elite, sed do elusion</p>
                  </div>
                </article>

                <article className="singleArticle articleArea mt-3">
                  <div className="articleMedia">
                    <img src={blogPostImage1} alt="" />
                  </div>

                  <div className="articleBody p-3">
                    <h2 className="postTitle mb-1"><Link to="#">Environment programme</Link></h2>
                    <p className="postPara">Lorem ipsum dolor sit ament, connecter advising elite, sed do elusion</p>
                    </div>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="actualProduct productView secGap clearfix" id="newProduct">
          <Container>
            <Row className="justify-content-between align-items-center mb-5">
              <Col>
                <h2 className="sectionTitle"><span>Actual </span> New</h2>
              </Col>
              <Col className="text-right">
                <Link to="#" className="btn linkBtn">View more</Link>
              </Col>
            </Row>
            <Row className="justify-content-between">
              {NewBookDB.map((newBook, index) => <NewBookComponent
                  key={index}
                  ImageBg="bgGray"
                  BookImage={newBook.Img}
                  ProductTitle={newBook.Title}
                  AuthorName={newBook.Author}
                  ProductPrice={newBook.Price}
                />)
              }
            </Row>
          </Container>
        </section>
        <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
          <Container className="container">
              <NewsLetterComponent/>
          </Container>
        </section>
      </main>
     <FooterComponent/>
    </div>
    </>);
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    favorite: state.favorite
  }
}

export default connect(mapStateToProps,null) (offerPage);
