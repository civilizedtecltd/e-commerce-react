import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import { connect } from 'react-redux'
import NewBookComponent from "../components/offerPageComponents/NewBookComponent";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { showFavItems, removeFavItem } from '../redux/actions/favoriteActions';
import { URL } from '../constants/config'
import './assets/favorite.css'
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import {categoryClass} from "../inc/users/users";
import {Lia} from "../components/LiComponent/CommonLiComponent";

const FavoritesPage = (props) => {

  const totalItem = props.cart.length;
  const [favorite , setFavorite ] = useState([])

  useEffect(() => {
    props.showAllFavItem()
    setFavorite(props.favorite)
  },[props.favorite.length]);


  const removeFavoriteItem = (id) => {
    props.removeFavItem(id);
  }



  return (
    <>
      <PageLoader loading={false}/>
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={favorite.length}
          cartItem={totalItem}
        />
        <MobileHeader
         favorite_item={favorite.length}
         cartItem={totalItem}
        />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="sectionBreadcrumb secGap clearfix pb-0"
            id="sectionBreadcrumb"
          >

            <Container>
              <Row>
                <Col>
                  <BreadCrumb />
                </Col>
              </Row>
            </Container>
          </section>
          { favorite.length === 0 ?
          <section className="chooseCategory clearfix" id="chooseCategory">
            <Container>
              <Row>
               <Col xs={12}>
                  <div className="contentArea text-center mt-5 mb-5">
                    <h2 className="sectionTitle mb-3">
                      You don’t have any <span>Favorites</span>
                    </h2>

                    <p>
                      It’s not a problem. Just choose a category you’re
                      interested in and add goods to favorites list
                    </p>

                  </div>
              </Col>
              </Row>


              <Row>
                <Col>
                  <Card className="border-0">
                    <Card.Body className="p-0">
                      <div className="cardContentDetails pt-5 pb-5 mb-5 bgGray clearfix">
                        <Row>
                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">Kindergarten</h3>
                            <ul className="cardWidgetList text-center">
                              {categoryClass.kindergartenSchool.map((priClass, index)=><Lia
                                  key={index}
                                  Title={priClass}
                                  Url={'/'}
                              />)}
                            </ul>
                          </Col>{/* end of Col */}

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">Primary school</h3>
                            <ul className="cardWidgetList cardWidgetList2 text-center">
                              {categoryClass.primarySchool.map((priClass, index)=><Lia
                                  key={index}
                                  Title={priClass}
                                  Url={'/'}
                              />)}
                            </ul>
                          </Col>{/* end of Col */}

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">Secondary school</h3>
                            <ul className="cardWidgetList text-center">
                              {categoryClass.secondarySchool.map((priClass, index)=><Lia
                                  key={index}
                                  Title={priClass}
                                  Url={'/'}
                              />)}
                            </ul>
                          </Col>{/* end of Col */}

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                            <ul className="cardWidgetList text-center">
                              {categoryClass.stationery.map((priClass, index)=><Lia
                                  key={index}
                                  Title={priClass}
                                  Url={'/'}
                              />)}
                            </ul>
                          </Col>{/* end of Col */}
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
            :

        <> <section
            className="favoritesItems secGap productView clearfix"
            id="favoritesItems"
          >
            <Container>
              <Row className="mt-5 mb-5 ">
                {favorite.map((item, index) => (
                  <NewBookComponent
                    key={index}
                    bookId={item.id}
                    ImageBg="bgGray"
                    BookImage={`${URL.BASE}/${item.cover_images.img_1}`}
                    ProductTitle={item.name}
                    AuthorName={item.book_author.name}
                    ProductPrice={item.price}
                    isFev={true}
                    removeFavItem = { removeFavoriteItem }
                    stateFav= { setFavorite }
                  />
                ))}
              </Row>
            </Container>
          </section>


          <section
            className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
            id="mailSubscribe"
          >
            <Container className="container">
              <NewsLetterComponent />
            </Container>
          </section>
          </>
}
        </main>

        <FooterComponent />
      </div>

</>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    favorite: state.favorite
  }
}

const mapDispatchToProps =(dispatch) => {
    return {
       showAllFavItem: () => dispatch(showFavItems()),
       removeFavItem: (id) => dispatch(removeFavItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
