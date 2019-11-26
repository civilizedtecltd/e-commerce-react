import React  from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import CheckoutTab from './CheckoutTab';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import './checkout.css'
import store from '../redux/store'

const CheckoutPage = () => {

  const cartItems = store.getState().shop.cart;
  let totalItemQuantity=[];
  let totalPrice = [];

  let totalItem = (cartItems.length !== 0) ?  cartItems.map(item=> {
    totalItemQuantity.push( item.quantity );
    totalPrice.push( item.price * item.quantity)
  }) : totalItemQuantity && totalPrice;

  if(totalItemQuantity.length !==0){
  totalItemQuantity = totalItemQuantity.reduce((quantities, quantity) => quantities + quantity)

  totalPrice = totalPrice.reduce((prices,price)=>prices+price);
  console.log(totalItemQuantity, totalPrice)
  }
  return (
    <>
      <div className="allWrapper bgGray">
        <header className="header clearfix border-0 pt-5 pb-5" id="header">
        <Container>
              <Row>
                <Col>
                <BreadCrumb />
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
                  <Col sm="8">
                    <div className="productCartList webScrollbar">
                    { cartItems.map((item,index)=>(
                    <>
                      <div  key={ index } className="productCartSingle d-flex align-items-center mb-2">
                          <div className="cartProductMedia bgGray">
                            <img src={URL.BASE+"/"+JSON.parse(item.cover_images).img_1} alt="" />
                          </div>
                          <div className="cartProductDes pl-3">
                            <h3>
                              <Link to="#">
                               {item.name}
                              </Link>
                            </h3>
                            <p>
                            Price:<span className="price"> { item.price } </span>
                            </p>
                            <p>
                            Quantity:<span className="qut"> { item.quantity } </span>
                            </p>
                            <p>
                            Total:<span className="totalPrice"> { item.price * item.quantity } </span>
                            </p>
                        </div>
                  </div>

                  </>
                    ))}
                    </div>
                 </Col>
                  <Col className="align-self-end">
                        <div className="cartProductValue clearfix" id="cartProductValue">
                          <ul className="productValue text-right">
                            <li>
                              <strong>Total Product Price:</strong> {totalItemQuantity * totalPrice}
                            </li>
                            <li>
                              <strong>Delivery:</strong> $00.00
                            </li>
                            <li>
                              <strong>In Total Total:</strong> $50.00
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
