import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { Lia } from '../components/LiComponent/CommonLiComponent';
import FooterComponent from "../components/FooterComponent/FooterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import { categoryClass } from "../inc/users/users";
import { URL } from '../constants/config';
import { removeFromCart, deleteAllFromCart } from '../redux/actions/shopActions'

const CartPage = (props) => {
 
  const favoriteItem = props.favorite
  const [cartItems, setCartItems] = useState(props.cart)

  let totalItemQuantity = 0;
  let totalBookPrice = 0;
  let delivery_cost = 0

  let [totalQty , setQty] = useState([]);
  let [totalPrice , setTotalPrice]= useState([]);
 
 
  
  if(cartItems.length !== 0) {
    cartItems.map(item=> {
      totalQty.push( item.quantity );
      totalPrice.push( item.price * item.quantity)
    })
  } 
  

  if (totalQty.length !== 0) {
    totalItemQuantity = totalQty.reduce((quantities, quantity) => quantities + quantity)
    totalBookPrice = totalPrice.reduce((prices, price) => prices + price);
  }



  const handleClick = (event) => {
    event.preventDefault()
    cartItems.find((book, index) => {
      if (Number(book.id) === Number(event.target.id)) {
        props.removeItem(book.id)
        cartItems.splice(index, 1)
      }
    })

  }

  const handleDeleteAll = (event) => {
    event.preventDefault();
    props.deleteAll()
    setCartItems([])
  }

  const handleQuantity = (e)=> {
    e.preventDefault();
    if(e.target.value <= 0) e.target.value=1
    const price = document.getElementById(`price-${e.target.id}`).innerHTML;
    const TP = document.getElementById(`tp-${e.target.id}`);
    TP.innerHTML="$"+ parseFloat(e.target.value) * parseFloat(price.substr(1))

    //const grand_total = document.getElementById('grand-total')
    //  grand_total.innerHTML = `$ ${parseFloat(TP) + parseFloat(delivery_cost)}`

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
                                {cartItems.map((item, index) => (<tr key={index}>
                                  <td>
                                    <div className="cartProductDetails d-flex flex-fill align-items-center">
                                      <div className="cartProductMedia bgGray ">
                                        <img src={URL.BASE + "/" + item.cover_images.img_1} alt="" />
                                      </div>
                                      <div className="cartProductTitle">
                                        <h3>
                                          {item.name}
                                        </h3>
                                      </div>
                                    </div>
                                  </td>
                                  <td id={`price-${item.id}`}>${item.price}</td>
                                  <td className="cartQntN">
                                    <Form.Control type="number" placeholder="1" id={item.id} defaultValue={item.quantity} onChange={handleQuantity} />
                                  </td>
                                  <td id={`tp-${item.id}`}>${item.price * item.quantity}</td>
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
                          <span className="pPrice">${totalPrice}</span>
                            </li>
                            <li>
                              Delivery.............................................
                          <span className="pPrice">${delivery_cost}</span>
                            </li>
                            <li>
                              Total.....................................................
                          <span className="pPrice" id="grand-total">${parseFloat(totalPrice) + parseFloat(delivery_cost)}</span>
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
