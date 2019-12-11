import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { Lia } from '../components/LiComponent/CommonLiComponent';
import FooterComponent from "../components/FooterComponent/FooterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import CartTable from '../components/CartComponents/CartsTableComponent';

import { categoryClass } from "../inc/users/users";


import { removeFromCart, deleteAllFromCart } from '../redux/actions/shopActions'

const CartPage = (props) => {

  const favoriteItem = props.favorite;
  const [cartItems, setCartItems] = useState(props.cart)

  let totalBookPrice = 0;
  let delivery_cost = 0;


  useEffect(() => {
    const items = props.cart;

    items.map((item, index) => {
        item.amountPrice = item.quantity * item.price;
        items[index] = item;
     setCartItems([...items]);
    })

  },[props.cart.length]);


  if(cartItems.length !== 0){
     cartItems.map((item) =>totalBookPrice += item.amountPrice
     )
  }


  const handleDeleteClick = (id) => {
    cartItems.find((book) => {
      if (Number(book.id) === Number(id)) {
         props.removeItem(book.id)
      }
    })

  }

  const handleDeleteAll = (event) => {
    event.preventDefault();
    props.deleteAll()
    setCartItems([])
  }

  const handleQuantity = (itemQty)=> {

    const { id, qty } = itemQty;
    const items = props.cart;

    items.find(item => {
        if(Number(item.id) === Number(id)){
          item.quantity = qty;
          item.amountPrice = item.quantity * item.price;
        }
    })

    setCartItems([...items]);
  }

  return (
    <>
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={favoriteItem.length}
          cartItem={cartItems.length} />
        <MobileHeader />
        <main className="mainContent clearfix" id="mainContent">
          <section className="sectionBreadcrumb secGap clearfix pb-0" id="sectionBreadcrumb">
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
              {(cartItems.length === 0) ? <Row>
                <Col>
                  <div className="contentArea text-center mt-5 mb-5">
                    <h2 className="sectionTitle mb-3">
                      Your cart is <span> empty </span>
                    </h2>
                    <p>
                      It’s not a problem. Just choose a category you’re
                      interested in and add goods to favorites list
                    </p>
                  </div>
                </Col>
              </Row> : <section className="cartSection clearfix" id="cartSection">
                  <Container>
                    <Row>
                      <Col>
                        <Card className="table-responsive border-0 cartTableBody">
                          <Card.Body className="p-0">
                             <CartTable
                                items={cartItems}
                                updateQty={handleQuantity}
                                onDelete={handleDeleteClick}
                             />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button className="btnGraySm" onClick={handleDeleteAll}>
                          Delete all <i className="fas fa-times"></i>
                        </Button>
                      </Col>

                      <Col>
                        <Form className="form-inline cartPromo justify-content-end">
                          <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Promo Code" />
                          </Form.Group>
                          <Button type="submit" className="ml-2">
                            Apply
                          </Button>
                        </Form>
                      </Col>
                    </Row>
                    <Row className="justify-content-end text-right mt-4 mb-5">
                      <Col sm="4">
                        <div className="cartProductPrice">
                          <ul className="cartPriceList">
                            <li>
                              Price.....................................................
                          <span className="pPrice">${totalBookPrice}</span>
                            </li>
                            <li>
                              Delivery.............................................
                          <span className="pPrice">${delivery_cost}</span>
                            </li>
                            <li>
                              Total.....................................................
                          <span className="pPrice" id="grand-total">${parseFloat(totalBookPrice) + parseFloat(delivery_cost)}</span>
                            </li>
                          </ul>
                          <Link to="/checkout" className="btn btn-primary" style={{color:'white'}}>Checkout</Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>

              }



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

                              {categoryClass.kindergartenSchool.map((pre, index) => <Lia
                                key={`kindergarten-${index}`}
                                Title={pre}
                                Url={'/'}
                              />)}

                            </ul>
                          </Col>


                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">
                              Primary school
                            </h3>
                            <ul className="cardWidgetList cardWidgetList2 text-center">
                              {categoryClass.primarySchool.map((item, index) => <Lia
                                key={`primary-${index}`}
                                Title={item}
                                Url={'/'}
                              />)}
                            </ul>
                          </Col>

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">
                              Secondary school
                            </h3>
                            <ul className="cardWidgetList text-center">
                              {categoryClass.secondarySchool.map((item, index) => <Lia
                                key={`secondary-${index}`}
                                Title={item}
                                Url={'/'}
                              />)}
                            </ul>
                          </Col>
                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                            <ul className="cardWidgetList text-center">
                              {categoryClass.stationery.map((item, index) => <Lia
                                key={`stationary-${index}`}
                                Title={item}
                                Url={'/'}
                              />)}
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
            className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
            id="mailSubscribe"
          >
            <Container className="container">
              <NewsLetterComponent />
            </Container>

          </section>
          {/* end of mailSubscribe */}
        </main>
        {/* end of allWrapper */}

        <FooterComponent />
      </div>
      {/* end of allWrapper */}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
  favorite: state.favorite
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeFromCart(id)),
    deleteAll: () => dispatch(deleteAllFromCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
