import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import CheckoutTab from './CheckoutTab';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
// Book Images
import bookImage1 from "../assets/images/books/book_img_01.jpg";
import './checkout.css'
import store from '../redux/store'

const CheckoutPage = () => {

  const cartItems = store.getState().shop.cart

  return (
    <>
      <div className="allWrapper bgGray">
        <header className="header clearfix border-0 pt-5 pb-5" id="header">
        <Container>
              <Row>
                <Col>
                <BreadCrumb
                  url='/'
                  option1='Home'
                  option2="Checkout"
                />
                </Col>
              </Row>
            </Container>
        </header>

        <main className="mainContent clearfix" id="mainContent">
          {cartItems.length!==0 ? <section className="checkoutProductDetails clearfix pt-5 pb-5" id="checkoutProductDetails" >
            <Container>
              <Card className="border-0">
                <Card.Body>
                  <Row>
                    {cartItems.map((item)=>(
                    <>
                    <Col sm="8">
                      <div className="productCartList webScrollbar">
                        <div className="productCartSingle d-flex align-items-center mb-2">
                          <div className="cartProductMedia bgGray">
                            <img src={JSON.parse(item.cover_images).img_1} alt="" />
                          </div>
                          <div className="cartProductDes pl-3">
                            <h3>
                              <Link to="#">
                               {item.name}
                              </Link>
                            </h3>
                            <p>
                            Price:<span className="price"> {item.price} </span>
                            </p>
                            <p>
                            Quantity:<span className="qut"> {item.quantity} </span>
                            </p>
                            <p>
                            Total:<span className="totalPrice"> {item.price*item.quantity} </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>                      
                  </>
                    ))}

                  <Col className="align-self-end">
                        <div className="cartProductValue clearfix" id="cartProductValue">
                          <ul className="productValue text-right">
                            <li>
                              <strong>Price:</strong> $444
                            </li>
                            <li>
                              <strong>Delivery:</strong> $00.00
                            </li>
                            <li>
                              <strong>Total:</strong> $50.00
                            </li>
                          </ul>
                        </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </section> :  <h2 className="text-center text-primary mb-5"> You haven't any product </h2>}
          <section className="checkoutInfoDetails pb-5 clearfix" id="checkoutInfoDetails" >
           <CheckoutTab/>
          </section>
        </main>
      </div>
    </>
  );
};

export default CheckoutPage;
