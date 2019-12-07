import React, {useState} from 'react';
import {Form, Accordion , useAccordionToggle} from 'react-bootstrap';

import './checkout.css';
import '../assets/css/theme.css'
import card_icon_img from '../assets/images/user/card_icon_img.png'

const CheckToggle = ({ children, eventKey, title }) => {

    const decoratedOnClick = useAccordionToggle(eventKey, () => {

        if(eventKey === 0){

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

        }
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

    const [mpesa, setMpesa] = useState({inactive: true});
    const [visa, setVisa] = useState({inactive: true});

    const [stander, setStander] = useState(false)
    const [express, setExpress] = useState(false)


    const handleMpesaOnChange = e => {
        setMpesa({
            ...mpesa,
            inactive: false,
            [e.target.name]: e.target.value
        });
    }

    const handleMpesaOnClick = () => {
        setMpesa({
            ...mpesa,
            inactive: true
        });

        const mpesaData = mpesa;
        delete mpesaData.inactive;

        props.callback({
            type: 'mpesa',
            data: mpesaData
        });
    }

    const handleVisaOnChange = e => {
        setVisa({
            ...visa,
            inactive: false,
            [e.target.name]: e.target.value
        });
    }

    const handleVisaOnClick = () => {
        setVisa({
            ...visa,
            inactive: true
        })
        const visaData = visa;
        delete visaData.inactive;

        props.callback({
            type: 'visa',
            data: visaData
        });
    }


    const handleAccordionOnSelect = (selectedKey) => {

        switch(Number(selectedKey)){
            case 2:
                return props.callback({ type: 'standard'});
            case 3:
                return props.callback({ type: 'express'});
            default:
                return props.callback({type: 'standard'});
        }
    }

    const standerCheckBox = (e) => {

        if(e.target.name==='stander'){
          setExpress(false)
          setStander(true)
        }
        if(e.target.name==='express') {
            setExpress(true)
            setStander(false)
        }
    }

    return (<>
        <Accordion  onSelect={handleAccordionOnSelect}>

            <div className="payment-header-card">
                <CheckToggle eventKey="0" title="Mpesa"/>
            </div>
            <Accordion.Collapse eventKey="0">
                <div className="clearfix">
                    <hr style={{borderColor:"#e2e2e2"}}/>
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col-sm-10 form-group">
                                <label htmlFor="card-number">Card number</label>
                                <input type="text" name="card_number" className="form-control" id="card-number" aria-describedby="emailHelp" onChange={handleMpesaOnChange}/>
                            </div>
                            <div className="col">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row align-items-center justify-content-between">
                            <div className="col-sm-3 form-group">
                                <label htmlFor="card-number">Expiry date</label>
                                <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                    <li><input type="text" name="mm" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="MM" onChange={handleMpesaOnChange} /></li>
                                    <li className="cardBl">/</li>
                                    <li><input type="text" name="yy" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="YY" onChange={handleMpesaOnChange} /></li>
                                </ul>
                            </div>

                            <div className="col offset-sm-4 form-group">
                                <label htmlFor="card-number">CVV</label>
                                <input type="text" name="ccv" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="" onChange={handleMpesaOnChange} />
                            </div>
                            <div className="col-sm-2">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary" disabled={mpesa.inactive} onClick={handleMpesaOnClick}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Accordion.Collapse>

            <div className="payment-header-card mt-3">
                <CheckToggle eventKey="1" title="Visa"/>
            </div>
            <Accordion.Collapse eventKey="1">
                <div className="clearfix">
                    <hr style={{borderColor:"#e2e2e2"}}/>
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col-sm-10 form-group">
                                <label htmlFor="card-number">Card number</label>
                                <input type="text" name="card_number" className="form-control" id="card-number" aria-describedby="emailHelp" onChange={handleVisaOnChange}/>
                            </div>
                            <div className="col">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row align-items-center justify-content-between">
                            <div className="col-sm-3 form-group">
                                <label htmlFor="card-number">Expiry date</label>
                                <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                    <li><input type="text" name="mm" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="MM" onChange={handleVisaOnChange}/></li>
                                    <li className="cardBl">/</li>
                                    <li><input type="text" name="yy" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="YY" onChange={handleVisaOnChange}/></li>
                                </ul>
                            </div>

                            <div className="col offset-sm-4 form-group">
                                <label htmlFor="card-number">CVV</label>
                                <input type="text" name="ccv" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="" onChange={handleVisaOnChange}/>
                            </div>
                            <div className="col-sm-2">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary" disabled={visa.inactive} onClick={handleVisaOnClick}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Accordion.Collapse>

            <div className="payment-header-card mt-3">
                <CheckToggle eventKey="2" title="Paypal"/>
            </div>
            <Accordion.Collapse eventKey="2">
                <div className="clearfix">
                    <hr style={{borderColor:"#e2e2e2"}}/>
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col-sm-10 form-group">
                                <label htmlFor="card-number">Card number</label>
                                <input type="text" name="card_number" className="form-control" id="card-number" aria-describedby="emailHelp" onChange={handleVisaOnChange}/>
                            </div>
                            <div className="col">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row align-items-center justify-content-between">
                            <div className="col-sm-3 form-group">
                                <label htmlFor="card-number">Expiry date</label>
                                <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                    <li><input type="text" name="mm" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="MM" onChange={handleVisaOnChange}/></li>
                                    <li className="cardBl">/</li>
                                    <li><input type="text" name="yy" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="YY" onChange={handleVisaOnChange}/></li>
                                </ul>
                            </div>

                            <div className="col offset-sm-4 form-group">
                                <label htmlFor="card-number">CVV</label>
                                <input type="text" name="ccv" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="" onChange={handleVisaOnChange}/>
                            </div>
                            <div className="col-sm-2">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary" disabled={visa.inactive} onClick={handleVisaOnClick}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Accordion.Collapse>

        </Accordion>

        <h3 className="mt-4 mb-2">Choose a Shipping Method</h3>

        <div className="payment-header-card mt-3 d-flex justify-content-between">
            <div>
            <Form.Check
                custom
                type="radio"
                className="ml-2"
                label="Stander"
                checked={stander}
                name="stander"
                id="stander009"
                onChange={standerCheckBox}
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
                checked={express}
                name="express"
                id="express22"
                onChange={standerCheckBox}
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

export default PaymentMethods;
