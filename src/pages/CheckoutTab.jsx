import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Col, Row, Button, Alert } from 'react-bootstrap';
import PaypalExpressBtn from "react-paypal-express-checkout";
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { setDeliveryAddress, setPaymentDetails } from '../redux/actions/shopActions';
import { confirmOrder } from '../redux/actions/authActions';
import { clearPromo } from '../redux/actions/shopActions';
import { setRedirectToOrder } from '../redux/actions/siteActions';
import PaymentsMethods from './PaymentMethods';
import { paypalConfig } from '../constants/constants';
import { futureDate } from '../helpers/utils';
import './checkout.css';
import '../assets/css/theme.css';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import { URL } from '../constants/config';
import axios from 'axios';
import LoaderSm from './LoaderSm'

const CheckoutTab = (props) => {
  const history = useHistory()
  const [ setShow ] = useState(false);
  const [step, setStep] = useState({ prev: 0, next: 1, show: false })
  const [iframe, setIframe] = useState('')
  const [iframeLoading, setIframeLoading] = useState(true)
  const [inputErr, setinputErr] = useState(null)

  const [formData, setFormData] = useState({
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    email: props.user.email,
    terms: false,
    policy: false
  });

  const [alert, setAlert] = useState({
    status: false,
    type: 'danger',
    message: ''
  });

  useEffect(() => {
    if (props.redirect_order) {
      setTimeout(() => {
        history.push('/my-order')
      }, 5000);
    }
    if (props.status.error) {
      if (props.status.error.data) {
        setAlert({
          status: true,
          type: 'danger',
          message: props.status.error.data.messages
        })
      }
    }
  }, [props.status.error, props, history])

  const paymentDetails = props.payment

  //const deliveryCost = (paymentDetails.deliveryInfo) ? paymentDetails.deliveryInfo.price : props.delivery[0].price;
  const deliveryTime = (paymentDetails.deliveryInfo) ? paymentDetails.deliveryInfo.delivery_time : props.delivery[0].delivery_time;
  const currencyExchangeRate = (props.currencyRate) ? props.currencyRate.kes : 1;
  const total_cost_in_usd = Math.ceil(props.costWithDelivery / currencyExchangeRate);

  const handleNext = () => {

    const payment_section = document.getElementById('payment-section');
    const address_section = document.getElementById('address-section');
    const order_confirmation_section = document.getElementById('order-confirmation-section');
    const payment_confirmation = document.getElementById('payment-confirmation');

    const step_1_tab = document.getElementById('step-1')
    const step_2_tab = document.getElementById('step-2')
    const step_3_tab = document.getElementById('step-3')
    const step_4_tab = document.getElementById('step-4')

    if (step.next === 1) {
      address_section.classList.remove('tab-active-content')
      payment_section.classList.add('tab-active-content')
      step_1_tab.classList.remove('active-tab')
      step_2_tab.classList.add('active-tab')
      setStep({ prev: 1, next: 2 })

    } else if (step.next === 2) {
      if (paymentDetails.payment_number && paymentDetails.payment_number.length > 5) {
        setIframe('')
        get_ifrm(paymentDetails.payment_number, props.costWithDelivery)
        payment_section.classList.remove('tab-active-content')
        order_confirmation_section.classList.add('tab-active-content')
        step_2_tab.classList.remove('active-tab')
        step_3_tab.classList.add('active-tab')
        setStep({ prev: 2, next: 3 })
      } else {
        setinputErr('Mobile Number Is Required')
        setTimeout(() => {
          setinputErr(null)
        }, 2500);
      }
    } else if (step.next === 3) {
      confirmCheckout()
      order_confirmation_section.classList.remove('tab-active-content')
      payment_confirmation.classList.add('tab-active-content')
      step_3_tab.classList.remove('active-tab')
      step_4_tab.classList.add('active-tab')
      setStep({ prev: 3, next: 4 })
    }
  }

  const handlePrev = () => {

    var payment_section = document.getElementById('payment-section');
    var address_section = document.getElementById('address-section');
    var order_confirmation_section = document.getElementById('order-confirmation-section');
    const payment_confirmation = document.getElementById('payment-confirmation');

    const step_1_tab = document.getElementById('step-1')
    const step_2_tab = document.getElementById('step-2')
    const step_3_tab = document.getElementById('step-3')
    const step_4_tab = document.getElementById('step-4')

    if (step.prev === 1) {
      payment_section.classList.remove('tab-active-content')
      address_section.classList.add('tab-active-content')
      step_2_tab.classList.remove('active-tab')
      step_1_tab.classList.add('active-tab')
      setStep({ prev: 0, next: 1 })
    } else if (step.prev === 2) {
      order_confirmation_section.classList.remove('tab-active-content')
      payment_section.classList.add('tab-active-content')
      step_3_tab.classList.remove('active-tab')
      step_2_tab.classList.add('active-tab')
      setStep({ prev: 1, next: 2 })
    } else if (step.prev === 3) {
      payment_confirmation.classList.remove('tab-active-content')
      order_confirmation_section.classList.add('tab-active-content')
      step_4_tab.classList.remove('active-tab')
      step_3_tab.classList.add('active-tab')
      setStep({ prev: 2, next: 3 })
    }
  }

  const handleOnChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleTermsCheck = () => {
    setFormData({
      ...formData,
      terms: !formData.terms
    })
  }

  const handlePrivacyCheck = () => {
    setFormData({
      ...formData,
      policy: !formData.policy
    })
  }

  const handleEstate = e => {
    const { id, delivery_name, delivery_time, price } = props.delivery[e.target.value]
    setFormData({ ...formData, estate: delivery_name })
    props.setPayment({ method: "swype", delivery: id, deliveryInfo: { id, delivery_name, delivery_time, price } })
    props.getPaymentMethod({ method: "swype", delivery: id, deliveryInfo: { id, delivery_name, delivery_time, price } });
  }

  const getPaymentDetails = (data) => {
    props.getPaymentMethod(data);
    /* props.setPayment({
      ...paymentDetails,
      ...data
    }) */
  }

  const confirmOrder = (paymentInfo) => {
    const books = [];
    props.cart.map(item => {
      return books.push({
        id: item.id,
        quantity: item.quantity
      });
    });

    const promoId = (props.promo) ? props.promo.id : null;
    props.confirmOrder({
      address: formData,
      payment: { method: paymentDetails.method, info: paymentInfo },
      delivery: paymentDetails.delivery,
      books,
      promo: promoId,
      deliveryTime
    });


    props.clearPromo();

    setShow(true);
  }

  const payPalOnSuccess = paypalInfo => confirmOrder(paypalInfo);

  const payPalOnCancel = data => {
    return window.location.href = data.cancelUrl
  }

  const payPalOnError = err => {
  }

  const mpesaOnCheckout = (e) => {
    const books = [];
    props.cart.map(item => {
      return books.push({
        category: item.book_category.category,
        id: item.id,
        quantity: item.quantity
      });
    });

    const promoId = (props.promo) ? props.promo.id : null;

    props.confirmOrder({
      address: formData,
      payment: { method: paymentDetails.method, info: { mpesa_number: paymentDetails.mpesa_number, price: props.costWithDelivery } },
      delivery: paymentDetails.delivery,
      books,
      promo: promoId,
    });
  }

  const confirmCheckout = () => {
    const books = [];
    props.cart.map(item => {
      return books.push({
        category: item.book_category.category,
        id: item.id,
        quantity: item.quantity
      });
    });

    const promoId = (props.promo) ? props.promo.id : null;

    props.confirmOrder({
      address: formData,
      payment: {
        method: paymentDetails.method,
        delivery_time: paymentDetails.deliveryInfo.delivery_time,
        delivery_cost: paymentDetails.deliveryInfo.price,
        info: { mpesa_number: paymentDetails.mpesa_number, price: props.costWithDelivery }
      },
      delivery: paymentDetails.delivery,
      books,
      promo: promoId,
      orderRef: iframe.orderRef
    });
  }

  const get_ifrm = (userMobile, amount) => {
    axios.post(URL._GET_PAY_IFR, { userMobile, amount })
      .then(res => {
        let { iframe, orderRef } = res.data.data
        // let ifr = `/swype_success/${btoa(orderRef)}`
        setIframe({ iframe, orderRef })
        // set order ref
        localStorage.setItem('or', btoa(btoa(orderRef)))
      })
  }

 /*  const set_ifrm_success = () => {
    const nifr = { ...iframe }
    nifr.iframe = `/swype_success/${btoa(nifr.orderRef)}`
    setIframe(nifr)
  } */


  return (
    <>
      <PageLoader loading={false} />
      <Container>
        <Card>
          <Card.Body>
            <div className="checkout-tab">
              <div className="header-section">
                <button id='step-1' className="btn btn-primary active-tab">Address details</button>
                <i className="fas fa-angle-double-right"></i>
                <button id="step-2" className="btn btn-primary">Payment and delivery</button>
                <i className="fas fa-angle-double-right"></i>
                <button id="step-3" className="btn btn-primary">Order confirmation</button>
                <i className="fas fa-angle-double-right"></i>
                <button id="step-4" className="btn btn-primary">Payment confirmation</button>
              </div>

              <div id="address-section" className="tab address-section tab-active-content mt-5">
                <Row>
                  <Col sm="12">
                    <button disabled className="btn btn-primary btn-block d-md-none d-lg-none d-xl-none">Address details</button>
                    <Form className='mt-5' action="post">
                      <Row>
                        <Col sm={6} className="form-group">
                          <label htmlFor="first-name">First Name</label>
                          <input type="text" name='first_name' id="first-name" className="form-control" value={formData.first_name} onChange={handleOnChange} />
                        </Col>

                        <Col sm={6} className="form-group">
                          <label htmlFor="last-name">Last Name</label>
                          <input type="text" name='last_name' id="last-name" className="form-control" value={formData.last_name} onChange={handleOnChange} />
                        </Col>

                        {/* <Col sm={12} className="form-group">
                          <label htmlFor="estate">Estate</label>
                          <input type="text" name="estate" id="estate" className="form-control" onChange={handleOnChange} />
                        </Col> */}

                        <Col col={12} className="form-group">
                          <label htmlFor="country">Estate</label>
                          <select name="estate" id="estate" className="form-control" onChange={handleEstate}>
                            <option value="">--Select one--</option>
                            {props.delivery.map((itm, i) =>
                              <option key={itm.id} value={i}>{itm.delivery_name}</option>
                            )}
                          </select>
                        </Col>

                        <Col col={12} className="form-group">
                          <label htmlFor="city">City</label>
                          <input type="text" name="city" id="city" className="form-control" onChange={handleOnChange} />
                        </Col>

                        <Col sm={12} className="form-group">
                          <label htmlFor="address">Address</label>
                          <input type="text" name="address" id="address" className="form-control" onChange={handleOnChange} />
                        </Col>

                        <Col sm={12} className="form-group">
                          <label htmlFor="zip-code">Zip Code</label>
                          <input type="text" name="zip" id="zipcode" className="form-control" onChange={handleOnChange} />
                        </Col>

                        <Col sm={6} className="form-group">
                          <label htmlFor="house">House/apartment number</label>
                          <input type="text" name="house_num" id="house" className="form-control" onChange={handleOnChange} />
                        </Col>

                        <Col sm={6} className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="text" name="email" id="email" className="form-control" value={formData.email} onChange={handleOnChange} />
                        </Col>

                        <Col sm={6} className="form-group">
                          <label htmlFor="phone-number">Phone Number</label>
                          <input type="text" name="phone" id="phone-number" className="form-control" onChange={handleOnChange} />
                        </Col>

                        <Col sm={12} className="form-group">
                          <label htmlFor="comment">Comments</label>
                          <textarea name="comments" id="comment" cols="30" rows="4" className="form-control" onChange={handleOnChange}></textarea>
                        </Col>

                        <Col sm={12} className="form-group fromCheckbox mt-1">
                          <div className="terms-and-condition">
                            <Form.Check
                              custom
                              type={"checkbox"}
                              label={<b>I agree with</b>}
                              id={`checkboxTerms`}
                              onChange={handleTermsCheck}
                            />
                            <p><Link to="/term/conditions" className="termsTxt">Terms and Conditions</Link></p>
                          </div>
                        </Col>

                        <Col sm={12} className="col-md-12 form-group fromCheckbox mt-1 terms-and-condition">
                          <Form.Check
                            custom
                            type={"checkbox"}
                            label={<b>I agree with</b>}
                            id={`checkboxPrivacy`}
                            onChange={handlePrivacyCheck}
                          />
                          <p><Link to="/privacy" className="termsTxt"> Privacy Policy</Link></p>
                        </Col>
                      </Row>
                      <Col className="text-right p-0">
                        <Button className="btn btn-primary cart-btn-next" disabled={(!formData.terms || !formData.policy || !formData.estate) ? true : false} onClick={handleNext}> Next</Button>
                      </Col>
                    </Form>
                  </Col>
                </Row>
              </div>

              <div id="payment-section" className="tab payment-section mt-3">
                <div className="row">
                  <div className="col col-12">
                    <button disabled className="btn btn-primary btn-block d-md-none d-lg-none d-xl-none mb-3">Payment and delivery</button>
                    {/* <h3 className="mt-2 mb-2">Choose a payment method</h3> */}
                    <br />
                    <br />
                    <PaymentsMethods inputErr={inputErr} callback={getPaymentDetails} />
                    <Form className="mt-5">
                      <Row>
                        <div className="col-12 d-flex justify-content-between p-0">
                          <Col sm="6">
                            <button type="button" className="btn btnSecondary" onClick={handlePrev} >Prev</button>
                          </Col>

                          <Col sm="6" className="col-6 text-right">
                            <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                          </Col>
                        </div>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>

              <div id='order-confirmation-section' className="tab order-confirmation-section">
                <Form className="userInfoForm mt-3">
                  <button disabled className="btn btn-primary btn-block d-md-none d-lg-none d-xl-none mb-3">Payment and delivery</button>
                  <h3 className="mt-2 mb-2">Confirm order details</h3>

                  <Row className="row mt-4">

                    <Col sm="6">
                      <ul className="orderConfrimationList text-large">
                        <li><strong>First name : </strong>{formData.first_name}</li>
                        <li><strong>Last name : </strong>{formData.last_name}</li>
                        <li><strong>Phone : </strong> {formData.phone}</li>
                        <li><strong>Email : </strong>{props.user.email}</li>
                      </ul>
                    </Col>

                    <Col sm="6">
                      <ul className="orderConfrimationList">
                        <li><strong>City : </strong>{formData.city}</li>
                        <li><strong>Estate : </strong> {formData.estate}</li>
                        <li><strong>Address : </strong> {formData.address}</li>
                        <li><strong>Zip code : </strong> {formData.zip}</li>
                      </ul>
                    </Col>

                    <Col sm="6" className="mt-4">
                      <ul className="orderConfrimationList text-large">
                        <li><strong>Product(s) Price : </strong>Ksh {props.productPrice}</li>
                        <li><strong>Delivery method : </strong> {paymentDetails && paymentDetails.deliveryInfo && paymentDetails.deliveryInfo.delivery_name}</li>
                        <li><strong>Delivery cost : </strong>Ksh {paymentDetails && paymentDetails.deliveryInfo && paymentDetails.deliveryInfo.price}</li>
                        <li><strong>In Total: </strong>Ksh {props.costWithDelivery}</li>
                        <li><strong>Expected arrival : </strong>  {futureDate(paymentDetails && paymentDetails.deliveryInfo && paymentDetails.deliveryInfo.delivery_time)}</li>
                      </ul>
                    </Col>
                  </Row>

                  <Row className="form-group mt-5">
                    <div className="col-12 d-flex justify-content-between">
                      <button type="button" className="btn btnSecondary" onClick={handlePrev} >Prev</button>
                      <button type="button" className="btn btnSecondary" onClick={handleNext} disabled={iframe === ""} >Next {iframe === "" && <span className="fa fa-spinner fa-spin" />}</button>
                      {(() => {
                        switch (paymentDetails.method) {
                          case 'payPal':
                            return <PaypalExpressBtn
                              env={paypalConfig.env}
                              client={paypalConfig.client}
                              currency={paypalConfig.currency}
                              total={total_cost_in_usd}
                              onError={payPalOnError}
                              onSuccess={payPalOnSuccess}
                              onCancel={payPalOnCancel}
                            />
                          case 'mpesa':
                            return <Button onClick={mpesaOnCheckout}>Checkoutrr</Button>;
                          default:
                            return null;
                        }
                      })()}

                    </div>
                  </Row>


                </Form>
              </div>

              <div id="payment-confirmation" className="tab payment-confirmation mt-3">
                {/* <button onClick={() => set_ifrm_success()}>success</button> */}
                {(iframe === '' || iframeLoading) && <div className="d-flex align-items-center justify-content-center"><LoaderSm size="100" clr="#3897cf" /></div>}
                <iframe src={iframe.iframe} onLoad={() => setIframeLoading(false)} title="Swype Pay" style={{ width: '100%', height: 580 }}></iframe>
                <Row>
                  <div className="col-12 d-flex justify-content-between p-0">
                    {/* <Col sm="6">
                      <button type="button" className="btn btnSecondary" onClick={handlePrev} >Prev</button>
                    </Col> */}

                    {/* <Col sm="6" className="col-6 text-right">
                      <button type="button" className="btn btn-primary" onClick={handleNext}>Confirm</button>
                    </Col> */}
                  </div>
                </Row>
              </div>

            </div>
          </Card.Body>
        </Card>
        <Alert show={alert.status} variant={alert.type} onClose={() => setAlert({ ...alert, status: false })} dismissible>
          <p>{alert.message}</p>
        </Alert>
      </Container >

      {/* <Modal show = {show} onHide = { handleClose }>
            <Modal.Header className={"border-0"} closeButton>
            </Modal.Header>
            <Modal.Body>
                <h2 className={"text-center"}>
                    Order Completed successfully!
                </h2>
                <div className="order-successful">
                    <Link to="/shop" className="btn btn-primary mt-3" style={{color:'white'}}> Go to Shopping </Link>
                </div>
            </Modal.Body>
            <Modal.Footer className={"border-0"}>

            </Modal.Footer>
        </Modal> */}
    </>)
}


const mapStateToProps = state => {
  return {
    ...state.auth,
    ...state.shop,
    ...state.site,
    delivery: state.shop.deliveryMethod,
  }
}

const mapDispatchToProps = dispatch => ({
  setAddress: (address) => dispatch(setDeliveryAddress(address)),
  setPayment: (payment) => dispatch(setPaymentDetails(payment)),
  setRedirectToOrder: (status) => dispatch(setRedirectToOrder(status)),
  confirmOrder: (info) => dispatch(confirmOrder(info)),
  clearPromo: () => dispatch(clearPromo())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutTab);
