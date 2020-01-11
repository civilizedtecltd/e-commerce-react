import React, {useState, useEffect} from 'react';
import {Form, Accordion , useAccordionToggle, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setPayment } from '../redux/actions/authActions';
import { deliveryMethod } from '../redux/actions/shopActions';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import card_icon_img from '../assets/images/user/card_icon_img.png';
import './checkout.css';
import '../assets/css/theme.css'
import NumberFormat from 'react-number-format';
import defaultMethods from '../inc/PaymentMethods/defaultPaymentMethods.json';


const CheckToggle = ({ children, eventKey, title }) => {

    const decoratedOnClick = useAccordionToggle(eventKey, () => {});

    return (
        <Form.Check
            custom
            className="ml-2"
            type="radio"
            label={title}
            name="formHorizontalRadios"
            id={`ch-${eventKey}`}
            onClick={decoratedOnClick}
        >
            {children}

        </Form.Check>
    );
}


const PaymentMethods = (props) => {

    const [card, setCard] = useState({});
    const [selectedMethod, setSelectedMethods]= useState(null);
    const [deliveryMethod, setDeliveryMethod] = useState({
        standard: true,
        express: false
    });
    const [alert, setAlert] = useState({
        status: false,
        type: 'danger',
        message: ''
    });

    const paymentMethods = (props.user.payment && props.user.payment.length >= 3) ? props.user.payment : defaultMethods;

    if(props.user.payment && props.user.payment.length < 3){

        const savedMethods = props.user.payment;
        savedMethods.map(item => {
            switch(item.payment_type){
                case 'MPESA':
                        paymentMethods[0] = { ...item}
                    break;
                case 'VISA':
                        paymentMethods[1] = { ...item}
                    break;
                case 'PAYPAL':
                       paymentMethods[2] = { ...item}
                    break;
                default :
                  return paymentMethods
            }
        });
    }

    useEffect(()=>{
        props.getDeliveryMethod()
    }, []);

    const handleCardOnChange = (e) => {
        const currentMethod = {
            ...paymentMethods[selectedMethod],
            [e.target.name]: e.target.value
        }

        paymentMethods[selectedMethod] = currentMethod;

        setCard({
            ...currentMethod
        });
    }


    const handleAccordionOnSelect = (selectedKey) => {

      if(selectedKey !== null){
        setSelectedMethods(selectedKey);
        setCard({
            ...paymentMethods[selectedKey]
        });

        props.callback({
            payment: { ...paymentMethods[selectedKey]},
            delivery: (deliveryMethod.standard) ? 1 : 2,
            paymentData: (deliveryMethod.standard) ? props.delivery[0] : props.delivery[1]
        });
      }
    }

    const checkDelivery = (e) => {

        if(e.target.name === 'standard'){
          setDeliveryMethod({
              standard: true,
              express: false
          })

          props.callback({
                payment: { ...card},
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
                payment: { ...card},
                delivery: 2,
                paymentData: props.delivery[1]
            });
        }
    }

    const handleCardOnClick = (e) => {
        e.preventDefault();

        if (!card.payment_type) return setAlert({status: true, type: 'danger', message: 'Please select payment type.'})
        if (!card.ccv)          return setAlert({status: true, type: 'danger', message: 'Please provide cvv number.'})
        if (!card.card_number)  return setAlert({status: true, type: 'danger', message: 'Please provide card number.'})
        if (!card.yy)           return setAlert({status: true, type: 'danger', message: 'Please provide YY.'})
        if (!card.mm)           return setAlert({status: true, type: 'danger', message: 'Please provide MM.'})

        if(card.ccv && card.card_number && card.mm && card.yy){
             props.addCard({
                ...card
            });

            props.callback({
                payment: {...card},
                delivery: (deliveryMethod.standard) ? 1 : 2,
                paymentData:  (deliveryMethod.standard) ? props.delivery[0] : props.delivery[1]
            });
        }
        /* console.log("card: ", card); */

    }

    //Card Input Format
    const limit = (val, max) => {
        if (val.length === 1 && val[0] > max[0]) {
            val = '0' + val;
        }

        if (val.length === 2) {
            if (Number(val) === 0) {
                val = '01';

                //this can happen when user paste number
            } else if (val > max) {
                val = max;
            }
        }

        return val;
    }

    const cardExpiryMonth = (val) => {
        return limit(val.substring(0, 2), '12');
    }

    const cardExpiryYear = (val) => {
        return val.substring(0,2);
    }

    return (<>
        <PageLoader loading={false} />
        <Accordion  onSelect={handleAccordionOnSelect}>
            {(paymentMethods.length === 0) ? <></> : paymentMethods.map((item, index) => (<div key={index}>
                    <div className="payment-header-card mt-4">
                        <CheckToggle eventKey={index} title={item.payment_type}/>
                    </div>
                    <Accordion.Collapse eventKey={index}>
                        <div className="clearfix">
                            <div className="m-2">
                              <Alert show={alert.status} variant={alert.type} onClose={() => setAlert({...alert, status: false})} dismissible>
                                <p>{alert.message}</p>
                              </Alert>
                            </div>
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col-sm-10 form-group">
                                        <label htmlFor={`card-number${index+1}`}>Card number</label>
                                        <NumberFormat format="#### #### #### ####"
                                                      placeholder="____ ____ ____ ____"
                                                      mask={['_', '_','_','_','_', '_','_','_','_', '_','_','_','_', '_','_','_']}
                                                      type="text"
                                                      name="card_number"
                                                      className="form-control"
                                                      id={`card-number${index+1}`}
                                                      aria-describedby="cardNumber"
                                                      value={item.card_number}
                                                      onChange={handleCardOnChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <img src={card_icon_img} alt=""/>
                                    </div>
                                </div>
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="card-exp-mm">Expiry date</label>
                                        <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                            <li><NumberFormat
                                                type="text"
                                                format={cardExpiryMonth}
                                                placeholder="MM"
                                                mask={['M', 'M']}
                                                name="mm"
                                                className="form-control"
                                                id={`card-exp-mm${index+1}`}
                                                aria-describedby="cardMM"
                                                value={item.mm}
                                                onChange={handleCardOnChange}
                                            /></li>
                                            <li className="cardBl">/</li>
                                            <li><NumberFormat
                                                type="text"
                                                format={cardExpiryYear}
                                                placeholder="YY"
                                                mask={['Y', 'Y']}
                                                name="yy"
                                                className="form-control"
                                                id={`card-exp-yy${index+1}`}
                                                aria-describedby="cardYY"
                                                value={item.yy}
                                                onChange={handleCardOnChange}
                                            /></li>
                                        </ul>
                                    </div>
                                    <div className="col offset-sm-4 form-group">
                                        <label htmlFor="card-ccv"> CVV </label>
                                        <NumberFormat
                                            type="text"
                                            name="ccv"
                                            format="###"
                                            className="form-control"
                                            id={`card-ccv${index+1}`}
                                            aria-describedby="emailHelp"
                                            placeholder="CCV"
                                            value={item.ccv}
                                            onChange={handleCardOnChange}
                                        />
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={card_icon_img} alt=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button type="button" className="btn btn-primary" disabled={false} onClick={handleCardOnClick}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Collapse>
            </div>)
            )}
        </Accordion>

        <h3 className="mt-4 mb-2">Choose a delivery method</h3>

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
