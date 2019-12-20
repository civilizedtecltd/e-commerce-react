import React, {useState, useRef, useEffect} from 'react';
import {Form, Accordion , useAccordionToggle, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setPayment } from '../redux/actions/authActions';
import { setDeliveryAddress } from '../redux/actions/shopActions';

import PageLoader from "../components/pageLoader/PageLoaderComponent";
import card_icon_img from '../assets/images/user/card_icon_img.png'
import './checkout.css';
import '../assets/css/theme.css'

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

    const paymentMethods = (props.user.payment && props.user.payment.length === 3)? props.user.payment : defaultMethods;

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
            }
        });
    }

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
            delivery: (deliveryMethod.standard) ? 1 : 2
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
                delivery: 1
          });

        }
        if(e.target.name === 'express') {
            setDeliveryMethod({
                standard: false,
                express: true
            })

            props.callback({
                payment: { ...card},
                delivery: 2
            });
        }
    }

    const handleCardOnClick = (e) => {
        e.preventDefault();
        const clearAlert = setTimeout(() => {
            setAlert({status: false, message:''});
        }, 5000);

        if(!card.ccv || !card.card_number || !card.mm || !card.yy){
            setAlert({
                status: true,
                type: 'danger',
                message: `Please insert every field value to add ${card.payment_type} card.`
            });
            return () =>  clearTimeout(clearAlert);

        }else{
             props.addCard({
                ...card
            });

            props.callback({
                payment: {...card},
                delivery: (deliveryMethod.standard) ? 1 : 2
            });
        }
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
                            <hr style={{borderColor:"#e2e2e2"}}/>
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col-sm-10 form-group">
                                        <label htmlFor={`card-number${index+1}`}>Card number</label>
                                        <input type="text" name="card_number" className="form-control" id={`card-number${index+1}`} aria-describedby="cardNumber"  defaultValue={item.card_number} onChange={handleCardOnChange}/>
                                    </div>
                                    <div className="col">
                                        <img src={card_icon_img} alt=""/>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-between">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="card-exp-mm">Expiry date</label>
                                        <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                            <li><input type="text" name="mm" className="form-control" id={`card-exp-mm${index+1}`} aria-describedby="cardMM" placeholder="MM" defaultValue={item.mm} onChange={handleCardOnChange} /></li>
                                            <li className="cardBl">/</li>
                                            <li><input type="text" name="yy" className="form-control" id={`card-exp-yy${index+1}`} aria-describedby="cardYY" placeholder="YY" defaultValue={item.yy} onChange={handleCardOnChange} /></li>
                                        </ul>
                                    </div>

                                    <div className="col offset-sm-4 form-group">
                                        <label htmlFor="card-ccv">CVV</label>
                                        <input type="text" name="ccv" className="form-control" id={`card-ccv${index+1}`} aria-describedby="emailHelp" placeholder="CCV" onChange={handleCardOnChange} />
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
                label="Standard"
                checked={deliveryMethod.standard}
                name="standard"
                id="standard009"
                onChange={checkDelivery}
            />
            </div>
            <div>
                <div className="col text-right shippingCostPrice">
                    <span className="shippingCost"><strong>Time:</strong> 170 hours</span> <span className="shippingPrice pl-3 pr-3"><strong>Price:</strong> $0</span>
                </div>
            </div>
        </div>

        <div className="payment-header-card mt-3 d-flex justify-content-between">
            <div>
            <Form.Check
                custom
                type="radio"
                className="ml-2"
                label="Express"
                checked={deliveryMethod.express}
                name="express"
                id="express22"
                onChange={checkDelivery}
            />
            </div>
            <div>
                <div className="col text-right shippingCostPrice">
                    <span className="shippingCost"><strong>Time:</strong> 170 hours</span> <span className="shippingPrice pl-3 pr-3"><strong>Price:</strong> $0</span>
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
    ...state.auth
})

const mapDispatchToProps = dispatch => ({
    addCard: (info) => dispatch(setPayment(info))
})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethods);
