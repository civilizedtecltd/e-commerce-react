import React, {useState} from 'react';
import {Form, Accordion , useAccordionToggle} from 'react-bootstrap';
import {connect} from 'react-redux';

import './checkout.css';
import '../assets/css/theme.css'
import card_icon_img from '../assets/images/user/card_icon_img.png'
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import { setDeliveryAddress } from '../redux/actions/shopActions';

const CheckToggle = ({ children, eventKey, title }) => {

    const decoratedOnClick = useAccordionToggle(eventKey, () => {

        /* if(eventKey === 0){

            document.getElementById('ch-1').checked=false;
            document.getElementById('ch-2').checked=false;

        }
        if(eventKey === 1){

            document.getElementById('ch-0').checked=false;
            document.getElementById('ch-2').checked=false;

        }

        if(eventKey === 2){

            document.getElementById('ch-0').checked=false;
            document.getElementById('ch-1').checked=false;

        } */
    })



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
    console.log("card: ", card);

    const [deliveryMethod, setDeliveryMethod] = useState({
        standard: false,
        express: false
    });

    const paymentMethods = (props.user.payment)? props.user.payment : [];

    const handleCardOnChange = (e) => {
        setCard({
            ...card,
            payment_info: {
                ...card.payment_info,
                [e.target.name]: e.target.value
            }
        });
    }


    const handleAccordionOnSelect = (selectedKey) => {

      if(selectedKey !== null){
        setCard({
            ...paymentMethods[selectedKey]
        });
      }
    }

    const checkDelivery = (e) => {
        if(e.target.name === 'standard'){
          setDeliveryMethod({
              standard: true,
              express: false
          })
        }
        if(e.target.name==='express') {
            setDeliveryMethod({
                standard: false,
                express: true
            })
        }
    }

    const handleCardOnClick = (e) => {
        e.preventDefault();
        if(!deliveryMethod.express && !deliveryMethod.standard){
            console.log("express: ", deliveryMethod.express, "standard: ", deliveryMethod.standard);
        }else{
            props.callback(card);
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
                                        <label htmlFor="card-number">Card number</label>
                                        <input type="text" name="card_number" className="form-control" id="card-number" aria-describedby="emailHelp" defaultValue={item.payment_info.card_number} onChange={handleCardOnChange}/>
                                    </div>
                                    <div className="col">
                                        <img src={card_icon_img} alt=""/>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-between">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="card-number">Expiry date</label>
                                        <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                            <li><input type="text" name="mm" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="MM" defaultValue={item.payment_info.mm} onChange={handleCardOnChange} /></li>
                                            <li className="cardBl">/</li>
                                            <li><input type="text" name="yy" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="YY" defaultValue={item.payment_info.yy} onChange={handleCardOnChange} /></li>
                                        </ul>
                                    </div>

                                    <div className="col offset-sm-4 form-group">
                                        <label htmlFor="card-number">CVV</label>
                                        <input type="text" name="ccv" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="CCV" onChange={handleCardOnChange} />
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


    </>);
}
const mapStateToProps = state =>({
    ...state.auth
})
export default connect(mapStateToProps, null)(PaymentMethods);
