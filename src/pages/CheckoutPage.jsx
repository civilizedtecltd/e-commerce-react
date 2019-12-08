import React  from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from 'react-redux'
import CheckoutTab from './CheckoutTab';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import { URL} from '../constants/config';
import './checkout.css';


const CheckoutPage = (props) => {

  const cartItems = props.cart;

  let totalItemQuantity = [];
  let totalPrice = [];

  if(totalItemQuantity.length !==0){
    totalItemQuantity = totalItemQuantity.reduce((quantities, quantity) => quantities + quantity)
    totalPrice = totalPrice.reduce((prices,price)=>prices+price);
  }


  return (
    <>
      <div className="allWrapper bgGray">

        <Container >
          <Row>
            <Col className="text-center">
              <div className="logoWrapper">
                <h1 className="logoText"><a href="#">LOGO</a></h1>
              </div>
            </Col>
          </Row>
        </Container>

        <main className="mainContent clearfix" id="mainContent">
          {cartItems.length ===0 ?'' :
          <section className="checkoutProductDetails clearfix pt-5 pb-5" id="checkoutProductDetails" >
            <Container>
              <Card className="border-0">
                <Card.Body>
                  <Row>
                  <Col sm="8">
                    <div className="productCartList webScrollbar">
                    { cartItems.map((item,index)=>(

                      <div key={index} className="productCartSingle d-flex align-items-center mb-2">
                          <div className="cartProductMedia bgGray">
                            <img src={ URL.BASE +"/"+ item.cover_images.img_1 } alt="" />
                          </div>
                          <div className="cartProductDes pl-3">
                            <h3>
                              <Link to="#">
                               { item.name }
                              </Link>
                            </h3>
                            <p>
                            Price:<span className="price"> ${ item.price } </span>
                            </p>
                            <p>
                            Quantity:<span className="qut"> { item.quantity } </span>
                            </p>
                            <p>
                            Total:<span className="totalPrice"> ${ item.price * item.quantity } </span>
                            </p>
                        </div>
                  </div>))}
                    </div>
                 </Col>
                  <Col className="align-self-end">
                        <div className="cartProductValue clearfix" id="cartProductValue">
                          <ul className="productValue text-right">
                            <li>
                              <strong>Total Product Price: </strong> ${ totalItemQuantity * totalPrice }
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
          </section> }
          <section className="checkoutInfoDetails pb-5 clearfix" id="checkoutInfoDetails" >
           <CheckoutTab/>
          </section>
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart:state.shop.cart
})

export default connect(mapStateToProps, null)(CheckoutPage);
