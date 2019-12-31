import React,{useEffect} from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import '../pages/checkout.css';
import FooterComponent from "../components/FooterComponent/FooterComponent";
import  HeaderComponent from "../components/header/Header";
import  MobileHeader from "../components/header/MobileHeader";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import CartTable from '../components/CartComponents/CartsTableComponent';
import {removeFromCart, deleteAllFromCart, updateQuantity, deliveryMethod} from '../redux/actions/shopActions'
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import MegaMenu from "../components/MegaMenuComponents/MegaMenuComponent";

const CartPage = (props) => {

  const favoriteItem = props.favorite.items;
  const cartItems    = props.cart;

  let totalBookPrice = 0;
  let delivery_cost = (props.delivery) ? props.delivery[0].price : 0;

  if(cartItems.length !== 0){
    cartItems.map((item) =>{
      totalBookPrice += item.amountPrice;
    })
  }
  useEffect(()=>{
    return props.deliveryMethodFetch()
  },[])

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
  }

  const handleQuantity = ({id, qty})=> {
    props.updateItem({id, qty});
  }

  return (
      <>
        <PageLoader loading={false}/>
        <div className="allWrapper">
          <HeaderComponent
              favorite_item={favoriteItem.length}
              cartItem={cartItems.length} />
          <MobileHeader
              favorite_item={favoriteItem.length}
              cartItem={cartItems.length}
          />
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
                {(cartItems.length === 0) ? <>
                      <Row>
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
                      </Row>
                      <Row>
                        <Col>
                          <Card className="border-0">
                            <Card.Body className="p-0">
                              <div className="cardContentDetails pt-5 pb-5 mb-5 bgGray clearfix">
                                <Row>
                                  <MegaMenu/>
                                </Row>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </>

                    :<section className="cartSection clearfix" id="cartSection">
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
                            <Button className="btnGraySm btnDeleteall" onClick={handleDeleteAll}>
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
                              <Table>
                                <tbody>
                                <tr>
                                  <td className="priceCartPage">Price</td>
                                  <td className="priceCartPage">.........................................</td>
                                  <td className="text-right priceCartPage"><span className="priceCartPage">$ {totalBookPrice}</span></td>
                                </tr>
                                <tr>
                                  <td className="priceCartPage">Delivery</td>
                                  <td className="priceCartPage">.........................................</td>
                                  <td className="text-right priceCartPage"><span className="priceCartPage">$ {delivery_cost}</span></td>
                                </tr>
                                <tr>
                                  <td className="priceCartPage">Total</td>
                                  <td className="priceCartPage">.........................................</td>
                                  <td className="text-right priceCartPage"> <span className="priceCartPage" id="grand-total">$ { parseFloat(totalBookPrice) + parseFloat(delivery_cost) }</span></td>
                                </tr>
                                </tbody>
                              </Table>
                              <Link to="/checkout" className="btn btn-primary" style={{color:'white'}}>Checkout</Link>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </section>
                }
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
  favorite: state.favorite,
  delivery: state.shop.deliveryMethod
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeFromCart(id)),
    updateItem: ({id, qty}) => dispatch(updateQuantity({id, qty})),
    deleteAll: () => dispatch(deleteAllFromCart()),
    deliveryMethodFetch:()=> dispatch(deliveryMethod())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
