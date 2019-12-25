import React, {useState,useEffect}  from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from 'react-redux';
import {getUser} from '../redux/actions/authActions';
import { deliveryMethod } from '../redux/actions/shopActions'
import CheckoutTab from './CheckoutTab';
import { URL} from '../constants/config';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import './checkout.css';


const CheckoutPage = (props) => {

  const cartItems = props.cart;

  let totalBookPrice = 0;
  let delivery_costs = (props.delivery) ?  props.delivery[0].price : 0 ;
  const [delivery_cost , setDeliveryCost] = useState(delivery_costs)



  if(cartItems.length !== 0){
     cartItems.map((item) =>totalBookPrice += item.amountPrice)
  }

  useEffect(()=>{
    props.getUser();
    props.deliveryMethodFetch()
  },[]);


  const getPaymentMethod = (paymentMethod) =>{
    setDeliveryCost(paymentMethod.paymentdata.price)
  }

  return (
    <>
      <PageLoader loading={false}/>
      <div className="allWrapper bgGray">

        <Container >
          <Row>
            <Col className="text-center">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="/">LOGO</Link></h1>
              </div>
            </Col>
          </Row>
        </Container>

        <main className="mainContent clearfix" id="mainContent">
          {cartItems.length === 0 ?'' :
          <section className="checkoutProductDetails clearfix pt-5 pb-5" id="checkoutProductDetails">
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
                              <Link to="!#">
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
                            Total:<span className="totalPrice"> ${ item.amountPrice } </span>
                            </p>
                        </div>
                  </div>))}
                    </div>
                 </Col>
                  <Col className="align-self-end">
                        <div className="cartProductValue clearfix" id="cartProductValue">
                          <ul className="productValue text-right">
                            <li>
                              <strong>Total Product Price: </strong> ${totalBookPrice}
                            </li>
                            <li>
                              <strong>Delivery:</strong> ${delivery_cost}
                            </li>
                            <li>
                              <strong>In Total Total:</strong> ${parseFloat(totalBookPrice) + parseFloat(delivery_cost)}
                            </li>
                          </ul>
                        </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </section> }
          <section className="checkoutInfoDetails pb-5 clearfix" id="checkoutInfoDetails">
           <CheckoutTab totalPrice={totalBookPrice} getPaymentMethod={getPaymentMethod}/>
          </section>
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart:state.shop.cart,
  delivery: state.shop.deliveryMethod
});

const mapDispatchToProps = dispatch => ({
    getUser : () => dispatch(getUser()),
    deliveryMethodFetch:()=> dispatch(deliveryMethod())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
