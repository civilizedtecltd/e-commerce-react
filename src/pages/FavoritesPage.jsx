import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from 'react-jss'
import { Container, Row, Col, Card, Table} from "react-bootstrap";
import { connect } from 'react-redux'
import { NewBookComponent } from "../components/offerPageComponents/NewBookComponent";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { showFevItems, removeFavItem } from '../redux/actions/favoriteActions'
<<<<<<< HEAD
import { URL } from '../constants/config';

//import { NewBookDB } from "../inc/offerPage/NewBook";

=======
import { URL } from '../constants/config'
import './assets/favorite.css'
>>>>>>> master
const useStyle = createUseStyles({
  addFavImage:{
    height:100,
    width:100
  },
  textLarge:{
    fontSize:30,
  }
})
const FavoritesPage = (props) => {
  const classes = useStyle()
  const totalItem = props.cart.length;
  const [favorite , setFavorite ] = useState( [...props.favorite] )
  const handleClick = (event) => {
    event.preventDefault()
    favorite.find((item, index)=> {

        if(item.id === Number(event.target.id)){
          props.removeFavItem(item.id)
          favorite.splice(index, 1)
        }
        return setFavorite([...favorite])
    })
  }

  return (
    <>
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={favorite.length}
          cartItem={totalItem}
        />
        <MobileHeader />
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
                            <h3 className="cardWidgetTitle mb-3">
                              Kindergarten
                            </h3>
                            <ul className="cardWidgetList text-center">
                              <li>
                                <Link to="#">Pre 1</Link>
                              </li>
                              <li>
                                <Link to="#">Pre 2</Link>
                              </li>
                              <li>
                                <Link to="#">Pre 3</Link>
                              </li>
                            </ul>
                          </Col>

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">
                              Primary school
                            </h3>
                            <ul className="cardWidgetList cardWidgetList2 text-center">
                              <li>
                                <Link to="#">Class 1</Link>
                              </li>
                              <li>
                                <Link to="#">Class 2</Link>
                              </li>
                              <li>
                                <Link to="#">Class 3</Link>
                              </li>
                              <li>
                                <Link to="#">Class 4</Link>
                              </li>
                              <li>
                                <Link to="#">Class 5</Link>
                              </li>
                              <li>
                                <Link to="#">Class 6</Link>
                              </li>
                              <li>
                                <Link to="#">Class 7</Link>
                              </li>
                              <li>
                                <Link to="#">Class 8</Link>
                              </li>
                            </ul>
                          </Col>

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">
                              Secondary school
                            </h3>
                            <ul className="cardWidgetList text-center">
                              <li>
                                <Link to="#">Form 1</Link>
                              </li>
                              <li>
                                <Link to="#">Form 2</Link>
                              </li>
                              <li>
                                <Link to="#">Form 3</Link>
                              </li>
                              <li>
                                <Link to="#">Form 4</Link>
                              </li>
                            </ul>
                          </Col>

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                            <ul className="cardWidgetList text-center">
                              <li>
                                <Link to="#">Stationery</Link>
                              </li>
                              <li>
                                <Link to="#">Stationery</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <strong>Bibles</strong>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">Bibles</Link>
                              </li>
                            </ul>
                          </Col>
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
                    bookid={item.id}
                    ImageBg="bgGray"
                    BookImage={`${URL.BASE}/${item.cover_images.img_1}`}
                    ProductTitle={item.name}
                    AuthorName={item.book_author.name}
                    ProductPrice={item.price}
                    isFev={true}
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
       showFav: (state) => dispatch(showFevItems(state)),
       removeFavItem: (id) => dispatch(removeFavItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
