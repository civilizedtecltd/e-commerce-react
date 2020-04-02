import React, {useState, useEffect} from 'react';
import {Form, Accordion , useAccordionToggle, Alert, Tabs, Tab, Image, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setPayment } from '../redux/actions/authActions';
import { deliveryMethod } from '../redux/actions/shopActions';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import card_icon_img from '../assets/images/user/card_icon_img.png';
import './checkout.css';
import '../assets/css/theme.css'
import defaultMethods from '../inc/PaymentMethods/defaultPaymentMethods.json';
/* import paypal_icon from './assets/images/paypal.png'; */
/* import visa from '../assets/images/payment/visa.png'; */
/* import amex from './assets/images/Amex-icon.jpg' */

import master_card from '../assets/images/payment/master.png'
import visa from '../assets/images/payment/visa.png'
import paypal_icon from '../assets/images/payment/paypal2.png'
import amex from '../assets/images/payment/amex.png'


import visa_master from '../assets/images/payment/visa_master_cart.png'
import Paypal from '../assets/images/payment/paypal.png'
import Mpesa from '../assets/images/payment/mpesa.png'
import Discover from '../assets/images/payment/Discover.jpg'
import UnionPay from '../assets/images/payment/UnionPay_logo.svg'

import './assets/paymentbar.css';


const PaymentMethods = (props) => {

    const [method, setMethod] = useState('');
    const [key, setKey] = useState('payPal');

    const [deliveryMethod, setDeliveryMethod] = useState({
        standard: true,
        express: false
    });

    const [alert, setAlert] = useState({
        status: false,
        type: 'danger',
        message: ''
    });


    const [check,setChecked] = useState({
        paypal:true,
        visa:false,
        amex:false,
        master:false,
    })


    useEffect(()=>{
        props.getDeliveryMethod()
    }, []);



    const checkDelivery = (e) => {

        if(e.target.name === 'standard'){
          setDeliveryMethod({
              standard: true,
              express: false
          })

          props.callback({
                method: method,
                delivery: 1,
                paymentData: props.delivery[0]
          });

        }

        if(e.target.name === 'express') {
            setDeliveryMethod({
                standard: false,
                express: true
            })

            props.callback({
                method: method,
                delivery: 2,
                paymentData: props.delivery[1]
            });
        }
    }


    const paymentMethodSelect = (e) => {
        e.preventDefault();
        switch(e.target.value){
            case 'paypal':
                    setMethod('PAYPAL');
                break;
            case 'visa':
            case 'amex':
            case 'master':
                    window.alert('Currently this payment method is not supported!.');
                break;
            default:
                window.alert('Currently this payment method is not supported!.');    
        }
    }

    return (<>
        <PageLoader loading={false} />



    {/*     <h3 className="mt-4 mb-2">Select Payment Method</h3> */}
            {/* ======================================================  */}
            <div className="paymentMethodsArea1">

            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="visaMaster" title={<Image src={visa_master} style={{width:"10",}} />} disabled>
                    <h1>Not available</h1>
                </Tab>
                <Tab eventKey="payPal" title={<Image src={Paypal} />}>
                        <div className="paypalTitle">
                            <p>You can pay by following cards through paypal.</p>
                        </div> 
                        <div className="card-area">
                            <div className="payment-title"> <h4>PayPal accepts</h4> </div>
                            <div className="payment-card-section">
                                {/* visa */}
                            <input type="radio" className="radio_item" value="visa" name="item" id="radio2" 
                            onChange={()=>setChecked({visa:!check.visa})} onClick={paymentMethodSelect} checked={ check.visa ? true : false } />
                            <label className="label_item" htmlFor="radio2"> <img src={visa} alt="visa-icon" /> </label>
                            
                            {/* master */}
                            <input type="radio" className="radio_item" value="master" name="item" id="radio4" 
                            onChange={()=>setChecked({master:!check.master})} onClick={paymentMethodSelect} checked={ check.master ? true : false } />
                            <label className="label_item" htmlFor="radio4"> <img src={master_card} alt="master-card" /></label>

                            {/* amex */}
                            <input type="radio" className="radio_item" value="amex" name="item" id="radio3" 
                            onChange={()=>setChecked({amex:!check.amex})}  onClick={paymentMethodSelect} checked={ check.amex ? true : false }/>
                            <label className="label_item" htmlFor="radio3"><img src={amex} alt="american-express" /></label>

                            {/* Discover */}
                            <input type="radio" className="radio_item" value="Discover" name="item" id="radio1" 
                            onChange={()=> setChecked({paypal:!check.paypal})} onClick={paymentMethodSelect} checked={ check.paypal ? true : false }/>
                            <label className="label_item" htmlFor="radio1"> <img src={Discover} alt="paypal icon"/></label>

                            {/* UnionPay */}
                            <input type="radio" className="radio_item" value="UnionPay" name="item" id="radio1" 
                            onChange={()=> setChecked({paypal:!check.paypal})} onClick={paymentMethodSelect} checked={ check.paypal ? true : false }/>
                            <label className="label_item" htmlFor="radio1"> <img src={UnionPay} alt="paypal icon"/></label>
                            </div>
                        </div>
                           
                         
                </Tab>
                <Tab eventKey="mpeg" title={<Image src={Mpesa}  />} disabled>
                   <h1>Not available</h1>
                </Tab>
            </Tabs>
            </div>
        {/* ======================================================  */}
        <div className="payment-header-card mt-3 d-flex justify-content-between">
            <div>
            <Form.Check
                custom
                type="radio"
                className="ml-2"
                label={props.delivery? props.delivery[0].delivery_name.charAt(0).toUpperCase() + props.delivery[0].delivery_name.substring(1) : ''}
                checked={deliveryMethod.standard}
                name="standard"
                id="standard009"
                onChange={checkDelivery}
            />
            </div>
            <div>
                <div className="col text-right shippingCostPrice">
            <span className="shippingCost"><strong>Time:</strong> {props.delivery ? 24*props.delivery[0].delivery_time : 24*7 } hours</span> <span className="shippingPrice pl-3 pr-3"><strong>Price:</strong> Ksh {props.delivery ? props.delivery[0].price : '0'}</span>
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
                        {props.delivery ? 24 * props.delivery[1].delivery_time : 24*7} hours
                    </span>
                    <span className="shippingPrice pl-3 pr-3">
                        <strong>Price:</strong> Ksh {props.delivery ? props.delivery[1].price : '0'}
                    </span>
                </div>
            </div>
        </div>
        <div className="mt-3">
            <Alert show={alert.status} variant={alert.type} onClose={() => setAlert({...alert, status: false})} dismissible>
                <p>{alert.message}</p>
            </Alert>
        </div>
    </>);
}
const mapStateToProps = state =>({
    ...state.auth,
    delivery: state.shop.deliveryMethod
})
const mapDispatchToProps = dispatch => ({
    getDeliveryMethod   : () => dispatch(deliveryMethod),
    addCard             : (info) => dispatch(setPayment(info))
})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethods);
