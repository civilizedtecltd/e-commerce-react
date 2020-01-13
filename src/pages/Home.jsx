
import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Card,} from 'react-bootstrap';
import { connect } from 'react-redux'
import '../pages/assets/home.css'

import featureIcon1 from '../assets/images/feature_icon_img_01.png';
import featureIcon2 from '../assets/images/feature_icon_img_02.png';
import featureIcon3 from '../assets/images/feature_icon_img_03.png';
import featureIcon4 from '../assets/images/feature_icon_img_04.png';

import FooterComponent from '../components/FooterComponent/FooterComponent';
import { HomeCarouselFooter } from "../components/HomePage/HomeCarouselFooter";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import  CategoryHome from "../components/HomePage/Category";
import PageLoader from "../components/pageLoader/PageLoaderComponent";

import {fetchMaxMinPrice, fetchDiscipline, fetchAuthors, fetchPublishers, fetchPublishingYears, fetchLanguages} from '../redux/actions/filterAction';

const Home = (props) => {

  const [loading, setLoading] = useState(false);
  const totalItem = props.cart.length
  const favoriteItem = props.favorite.items;

  const handleCategoryLoading = (status) =>{
      setLoading(status);
  }

  useEffect(()=>{
    props.maxMinPrice();
    props.getDisciplineList();
    props.getAuthorsList();
    props.getPublisherList();
    props.getPublishingYearList();
    props.getLanguageList();
 },[])

  return (<>
    <PageLoader loading = {loading}/>
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
        <section className="productCat secGap clearfix" id="productCat">
          <Container>
                <CategoryHome callback={handleCategoryLoading}/>
          </Container>
        </section>

        <section className="ourBenefits clearfix secGap bgGray" id="ourBenefits">
          <Container>
            <Row>
              <Col>
                <h2 className="sectionTitle mb-5 text-center">Our <span>benefits</span></h2>
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={featureIcon1} alt="" />
                  </div>

                  <Card.Body className="text-center">
                    <h4>Fast delivery</h4>
                    <p>Lorem ipsum dolor sit ament, consect etur  adipiscing elit, sed do eiusmod</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={featureIcon2} alt="" />
                  </div>{/* end of featureMedia */}

                  <Card.Body className="text-center">
                    <h4>LOREM IPSUM</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur  adipiscing elit, sed do eiusmod</p>
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
                    <p>Lorem ipsum dolor sit amet, consect etur  adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={featureIcon4} alt="" />
                  </div>{/* end of featureMedia */}

                  <Card.Body className="text-center">
                    <h4>Adipiscing vero</h4>
                    <p>Lorem ipsum dolor sit amet, consent etui advising elite, sed do elusion</p>
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
                </div>
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of ourPartners */}

        <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
          <Container className="container">
            <NewsLetterComponent/>
          </Container>{/* end of Container */}
        </section>{/* end of mailSubscribe */}

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

const mapDispatchToProps = (dispatch)=> {
  return {
    maxMinPrice             : () => dispatch(fetchMaxMinPrice()),
    getDisciplineList       : () => dispatch(fetchDiscipline()),
    getAuthorsList          : () => dispatch(fetchAuthors()),
    getPublisherList        : () => dispatch(fetchPublishers()),
    getPublishingYearList   : () => dispatch(fetchPublishingYears()),
    getLanguageList         : () => dispatch(fetchLanguages())
  }
}

export default connect(mapStateToProps , mapDispatchToProps) (Home);

