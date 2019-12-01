import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Table,Form , Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { NewBookDB } from "../inc/offerPage/NewBook";
import { NewBookComponent } from "../components/offerPageComponents/NewBookComponent";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { HeaderComponent, MobileHeader } from "../components/header/Header";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { showFevItems, removeFavItem } from '../redux/actions/favoriteActions'
import { URL } from '../constants/config'


const FavoritesPage = (props) => {

  const totalItem = props.cart.length 
  const [favoriteItem, setFavorite ] = useState(props.favorite);

  const handleClick = (event) => {
    event.preventDefault()
    favoriteItem.find((book,index)=>{
      if(Number(book.id) === Number(event.target.id) ){
         props.removeItem(book.id)
         favoriteItem.splice(index,1)
      }
    })

  }


  return (
 
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={favoriteItem.length}
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

          <section className="chooseCategory clearfix" id="chooseCategory">
            <Container>

              <Row>
               { favoriteItem.length ===0 ? <Col xs={12}>
                  <div className="contentArea text-center mt-5 mb-5">
                    <h2 className="sectionTitle mb-3">
                      You don’t have any <span>Favorites</span>
                    </h2>

                    <p>
                      It’s not a problem. Just choose a category you’re
                      interested in and add goods to favorites list
                    </p>

                  </div>
                </Col> : <Col xs={12}>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th className="text-center">Product Name</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Discount</th>
                        <th className="text-center">Image</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {  <Col>
                  <Card className="table-responsive border-0 cartTableBody">
                    <Card.Body className="p-0">
                      <Table responsive className="cardTable">
                        <thead>
                          <tr>
                            <th>Goods</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th></th>
                          </tr>
                        </thead>


                        <tbody>
                          {favoriteItem.map( (item, index) =>(<tr key={index}>
                            <td >
                              <div className="cartProductDetails d-flex flex-fill align-items-center">
                                <div className="cartProductMedia bgGray ">
                                  <img src={ URL.BASE +"/"+ JSON.parse( item.cover_images).img_1 } alt="" />
                                </div>
                                <div className="cartProductTitle">
                                  <h3>
                                    { item.name }
                                  </h3>
                                </div>
                              </div>
                            </td>
                          <td>${ item.price }</td>
                            <td className="cartQntN">
                              <Form.Control type="number" placeholder="1" defaultValue={ item.quantity } />
                            </td>
                          <td>${ item.price * item.quantity }</td>
                            <td>
                              <Button className="btn btn-danger" id={item.id} onClick={handleClick}>
                                Delete <i className="fas fa-times"></i>
                              </Button>
                            </td>
                          </tr>
                          ))}

                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>}
                      
                    </tbody>
                  </Table>
                </Col>
                 }
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


          <section
            className="favoritesItems secGap productView clearfix"
            id="favoritesItems"
          >
            <Container>
              <Row className="mt-5 mb-5 justify-content-between">
                {NewBookDB.map((newBook, index) => (
                  <NewBookComponent
                    key={index}
                    ImageBg="bgGray"
                    BookImage={newBook.Img}
                    ProductTitle={newBook.Title}
                    AuthorName={newBook.Author}
                    ProductPrice={newBook.Price}
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
        </main>
        <FooterComponent />
      </div>
  

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
       removeItem: (id) => dispatch(removeFavItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
