import React, { useState, useEffect } from 'react';
import { Form, Alert, Tabs, Tab, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPayment } from '../redux/actions/authActions';
import { setPaymentDetails } from '../redux/actions/shopActions';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
//import card_icon_img from '../assets/images/user/card_icon_img.png';
import './checkout.css';
import '../assets/css/theme.css'
//import defaultMethods from '../inc/PaymentMethods/defaultPaymentMethods.json';
/* import paypal_icon from './assets/images/paypal.png'; */
/* import visa from '../assets/images/payment/visa.png'; */
/* import amex from './assets/images/Amex-icon.jpg' */

import master_card from '../assets/images/payment/master.png'
import visa from '../assets/images/payment/visa.png'
//import paypal_icon from '../assets/images/payment/paypal2.png'
import amex from '../assets/images/payment/amex.png'


import visa_master from '../assets/images/payment/visa_master_cart.png'
import Paypal from '../assets/images/payment/paypal.png'
import Mpesa from '../assets/images/payment/mpesa.png'
import Discover from '../assets/images/payment/Discover.jpg'
import UnionPay from '../assets/images/payment/UnionPay_logo.svg'

import './assets/paymentbar.css';


const PaymentMethods = (props) => {

    const [paymentType, setPaymentType] = useState('swype');

    const [deliveryMethod, setDeliveryMethod] = useState({
        standard: true,
        express: false
    });

    const [alert, setAlert] = useState({
        status: false,
        type: 'danger',
        message: ''
    });

    useEffect(() => {
        if (deliveryMethod.standard) {
            props.callback({
                method: paymentType,
                delivery: 1,
                deliveryInfo: props.delivery[0]
            });
        }
    }, []);



    const checkDelivery = (e) => {

        if (e.target.name === 'standard') {
            setDeliveryMethod({
                standard: true,
                express: false
            })

            props.callback({
                method: paymentType,
                delivery: 1,
                deliveryInfo: props.delivery[0]
            });

        }

        if (e.target.name === 'express') {
            setDeliveryMethod({
                standard: false,
                express: true
            })

            props.callback({
                method: paymentType,
                delivery: 2,
                deliveryInfo: props.delivery[1]
            });
        }
    }

    const selectPaymentType = type => {

        setPaymentType(type);

        if (deliveryMethod.standard) {
            props.callback({
                method: type,
                delivery: 1,
                deliveryInfo: props.delivery[0]
            });
        } else {
            props.callback({
                method: type,
                delivery: 2,
                deliveryInfo: props.delivery[1]
            });
        }
    }

    const updatePaymentInfo = e => {
        // e.preventDefault();
        props.setPayment({
            ...props.payment,
            [e.target.name]: e.target.value
        });
    }


    return (<>
        <PageLoader loading={false} />

        {/*     <h3 className="mt-4 mb-2">Select Payment Method</h3> */}
        {/* ======================================================  */}
        {/* <div className="paymentMethodsArea1">
            <Tabs id="controlled-tab-example" activeKey={paymentType} onSelect={selectPaymentType}>
                <Tab eventKey="visaMaster" title={<Image src={visa_master} style={{ width: "10", }} />} disabled>
                    <h1>Not available</h1>
                </Tab>
                <Tab eventKey="payPal" title={<Image src={Paypal} />}>
                    <div className="paypalTitle">
                        <p>You can pay by following cards through paypal.</p>
                    </div>
                    <div className="card-area">
                        <div className="payment-title"> <h4>PayPal accepts</h4> </div>
                        <div className="payment-card-section">
                            <input type="radio" className="radio_item" value="visa" name="item" id="radio2" />
                            <label className="label_item" htmlFor="radio2"> <img src={visa} alt="visa-icon" /> </label>

                            <input type="radio" className="radio_item" value="master" name="item" id="radio4" />
                            <label className="label_item" htmlFor="radio4"> <img src={master_card} alt="master-card" /></label>

                            <input type="radio" className="radio_item" value="amex" name="item" id="radio3" />
                            <label className="label_item" htmlFor="radio3"><img src={amex} alt="american-express" /></label>

                            <input type="radio" className="radio_item" value="Discover" name="item" id="radio1" />
                            <label className="label_item" htmlFor="radio1"> <img src={Discover} alt="paypal icon" /></label>

                            <input type="radio" className="radio_item" value="UnionPay" name="item" id="radio1" />
                            <label className="label_item" htmlFor="radio1"> <img src={UnionPay} alt="paypal icon" /></label>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="mpesa" title={<Image src={Mpesa} />}>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Mobile Number:</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <input type="text" className="form-control" name="mpesa_number" onChange={updatePaymentInfo} />
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div> */}
        {/* ======================================================  */}

        <div className="row d-flex align-items-center">
            <div className="col-md-3">
                <h3>Payment Mobile Number:</h3>
            </div>
            <div className="col-md-4">
                <div className="input-group">
                    <input type="text" className="form-control" name="payment_number" onChange={updatePaymentInfo} value={props.payment.payment_number} />
                </div>
            </div>
            <div className="col-md-3">
                {props.inputErr && <Alert variant="danger" className="ml-2">{props.inputErr}</Alert>}
            </div>
        </div>
        <div className="payment-header-card mt-3 d-flex justify-content-between">
            <div>
                <Form.Check
                    custom
                    type="radio"
                    className="ml-2"
                    label={props.delivery ? props.delivery[0].delivery_name.charAt(0).toUpperCase() + props.delivery[0].delivery_name.substring(1) : ''}
                    checked={deliveryMethod.standard}
                    name="standard"
                    id="standard009"
                    onChange={checkDelivery}
                />
            </div>
            <div>
                <div className="col text-right shippingCostPrice">
                    <span className="shippingCost"><strong>Time:</strong> {props.delivery ? 24 * props.delivery[0].delivery_time : 24 * 7} hours</span> <span className="shippingPrice pl-3 pr-3"><strong>Price:</strong> Ksh {props.delivery ? props.delivery[0].price : '0'}</span>
                </div>
            </div>
        </div>

        <div className="payment-header-card mt-3 d-flex justify-content-between">
            <div>
                <Form.Check
                    custom
                    type="radio"
                    className="ml-2"
                    label={props.delivery ? props.delivery[1].delivery_name.charAt(0).toUpperCase() + props.delivery[1].delivery_name.substring(1) : ''}
                    checked={deliveryMethod.express}
                    name="express"
                    id="express22"
                    onChange={checkDelivery}
                />
            </div>
            <div>
                <div className="col text-right shippingCostPrice">
                    <span className="shippingCost"><strong>Time:</strong>
                        {props.delivery ? 24 * props.delivery[1].delivery_time : 24 * 7} hours
                    </span>
                    <span className="shippingPrice pl-3 pr-3">
                        <strong>Price:</strong> Ksh {props.delivery ? props.delivery[1].price : '0'}
                    </span>
                </div>
            </div>
        </div>
        <div className="mt-3">
            <Alert show={alert.status} variant={alert.type} onClose={() => setAlert({ ...alert, status: false })} dismissible>
                <p>{alert.message}</p>
            </Alert>
        </div>
    </>);
}
const mapStateToProps = state => ({
    ...state.auth,
    delivery: state.shop.deliveryMethod,
    payment: state.shop.payment
})
const mapDispatchToProps = dispatch => ({
    addCard: (info) => dispatch(setPayment(info)),
    setPayment: (payment) => dispatch(setPaymentDetails(payment))
})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethods);
