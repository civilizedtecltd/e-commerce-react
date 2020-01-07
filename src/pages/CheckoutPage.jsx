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
  const totalQuantity = cartItems.map(data=>data.quantity)
  const sumTotalQty = totalQuantity.reduce((ac,crr)=>ac+crr)


  if(cartItems.length !== 0){
     cartItems.map((item) => totalBookPrice += item.amountPrice)
  }

  const promoInfo   = (props.promoInfo) ? props.promoInfo : { status: false };
  let promoPrice    = totalBookPrice;

  if(promoInfo.status){
    const { discount, upto } = promoInfo;

    if(Number(totalBookPrice) <= Number(upto)){

        promoPrice = totalBookPrice - (totalBookPrice*(discount/100));

    }else if(Number(totalBookPrice) > Number(upto)){

        promoPrice = totalBookPrice - upto;
    }

  }

  let costWithDelivery  = parseFloat(promoPrice) + parseFloat(delivery_cost);

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
                            <img src={item.cover_images.img_1} alt="" />
                          </div>
                          <div className="cartProductDes pl-3">
                            <h3>
                              <Link to="!#">
                               { item.name }
                              </Link>
                            </h3>
                            <p>
                            Price:<span className="price"> Ksh { item.price } </span>
                            </p>
                            <p>
                            Quantity:<span className="qut"> { item.quantity } </span>
                            </p>
                            <p>
                            Total:<span className="totalPrice"> Ksh { item.amountPrice } </span>
                            </p>
                        </div>
                  </div>))}
                    </div>
                 </Col>
                  <Col className="align-self-end">
                        <div className="cartProductValue clearfix" id="cartProductValue">
                          <ul className="productValue text-right">
                            <li>
                              <strong>Total Quantity: </strong> {sumTotalQty}
                            </li>

                            <li>
                              <strong>Total Product Price: </strong> Ksh {totalBookPrice}
                            </li>
                            { (!promoInfo.status) ?<></> :
                                (
                                <li>
                                    <strong>Discount Price: </strong> ${promoPrice}
                                </li>
                                )
                            }
                            <li>
                              <strong>Delivery:</strong> Ksh {delivery_cost}
                            </li>

                            <li>
                              <strong>In Total Total:</strong> Ksh {costWithDelivery}
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
  delivery: state.shop.deliveryMethod,
  promoInfo: state.shop.promo
});

const mapDispatchToProps = dispatch => ({
    getUser : () => dispatch(getUser()),
    deliveryMethodFetch:()=> dispatch(deliveryMethod())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
