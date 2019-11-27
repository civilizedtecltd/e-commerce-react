import React, { useState } from 'react';
import {Container, Card ,Form, Col, Row, Button, Accordion , useAccordionToggle} from 'react-bootstrap';
//import CheckboxComponent from '../components/checkboxComponent/CheckboxComponent'
import {Link} from 'react-router-dom'
import './checkout.css';
import '../assets/css/theme.css'
import card_icon_img from '../assets/images/user/card_icon_img.png'




function CheckoutTab() {


    const [step, setStep] = useState({
        prev:0,
        next:1,
        show:false
    })

    //  const [isCheck , setCheck] = useState(false)


    // const handleCheck = () => {setCheck(!isCheck)}

    const handleNext = () => {

        const payment_section = document.getElementById('payment-section');
        const address_section = document.getElementById('address-section');
        const order_confirmation_section = document.getElementById('order-confirmation-section');
        const step_1_tab = document.getElementById('step-1')
        const step_2_tab = document.getElementById('step-2')
        const step_3_tab = document.getElementById('step-3')



        if(step.next === 1){
            address_section.classList.remove('tab-active-content')
            payment_section.classList.add('tab-active-content')
            step_1_tab.classList.remove('active-tab')
            step_2_tab.classList.add('active-tab')
            setStep({prev:1, next:2})

        }else if(step.next === 2){
            payment_section.classList.remove('tab-active-content')
            order_confirmation_section.classList.add('tab-active-content')
            step_2_tab.classList.remove('active-tab')
            step_3_tab.classList.add('active-tab')
            setStep({prev:2, next:3})
        }

    }


    const handlePrev = () => {

        var payment_section = document.getElementById('payment-section');
        var address_section = document.getElementById('address-section');
        var order_confirmation_section = document.getElementById('order-confirmation-section');
        const step_1_tab = document.getElementById('step-1')
        const step_2_tab = document.getElementById('step-2')
        const step_3_tab = document.getElementById('step-3')

        if(step.prev === 1){

            payment_section.classList.remove('tab-active-content')
            address_section.classList.add('tab-active-content')
            step_2_tab.classList.remove('active-tab')
            step_1_tab.classList.add('active-tab')
            setStep({prev:0, next:1})

        }else if(step.prev === 2){
            order_confirmation_section.classList.remove('tab-active-content')
            payment_section.classList.add('tab-active-content')
            step_3_tab.classList.remove('active-tab')
            step_2_tab.classList.add('active-tab')
            setStep({prev:1,next:2})

        }

    }



    return(
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
                        </div>


                        <div id="address-section" className="tab address-section tab-active-content mt-5">
                            <Row>
                                <Col sm="12">
                                    <button disabled className="btn btn-primary btn-block d-md-none d-lg-none d-xl-none">Address details</button>
                                    <Form className='mt-5' action="">
                                        <Row>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="first-name">First Name</label>
                                                <input type="text" name='first_name' id="first-name" className="form-control"/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="last-name">Last Name</label>
                                                <input type="text" name='last_name' id="last-name" className="form-control"/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="estate">Estate</label>
                                                <input type="text" name="estate" id="estate" className="form-control"/>
                                            </Col>

                                            <Col col={12} className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <input type="text" name="country"  id="country" className="form-control"/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" name="address" id="address" className="form-control"/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="zip-code">Zip Code</label>
                                                <input type="text" name="zipcode" id="zipcode" className="form-control"/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="house">House/apartment number</label>
                                                <input type="text" name="house" id="house" className="form-control"/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" name="email" id="email" className="form-control"/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="phone-number">Phone Number</label>
                                                <input type="text" name="phone_number" id="phone-number" className="form-control"/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="comment">Comments</label>
                                                <textarea name="comment" id="comment" cols="30" rows="4" className="form-control"></textarea>
                                            </Col>

                                            <Col className="form-group fromCheckbox mt-1">
                                                <Form.Check
                                                    custom
                                                    type={"checkbox"}
                                                    label={`I agree with `}
                                                    id={`checkboxTerms`}
                                                />
                                                <Link to="#" className="termsTxt">Terms and Conditions</Link>
                                            </Col>

                                            <Col className="col-md-12 form-group fromCheckbox mt-1">
                                                <Form.Check
                                                    custom
                                                    type={"checkbox"}
                                                    label={`I agree with `}
                                                    id={`checkboxPrivacy`}
                                                />
                                                <Link to="#" className="termsTxt">Privacy Policy</Link>
                                            </Col>

                                            {/*<Col className="text-right">*/}
                                            {/*    <Button className="btn btn-primary" onClick={handleNext} >Next</Button>*/}
                                            {/*</Col>*/}

                                        </Row>
                                        <Col className="text-right p-0">
                                            <Button className="btn btn-primary cart-btn-next" onClick={handleNext} >Next</Button>
                                        </Col>
                                    </Form>
                                </Col>
                            </Row>{/* tab-section -1 */}
                        </div>


                        <div id="payment-section" className="tab payment-section mt-3">
                            <div className="row">
                                <div className="col col-12">
                                    <button disabled className="btn btn-primary btn-block d-md-none d-lg-none d-xl-none mb-3">Payment and delivery</button>
                                    <h3 className="mt-2 mb-2">Choose a delivery method</h3>
                                    <PaymentsMethod/>

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
                        </div>{/* tab-section -2 */}


                        <div id='order-confirmation-section' className="tab order-confirmation-section">
                            <Form className="userInfoForm mt-3">
                                <button disabled className="btn btn-primary btn-block d-md-none d-lg-none d-xl-none mb-3">Payment and delivery</button>
                                <h3 className="mt-2 mb-2">Choose a delivery method</h3>

                                <Row className="row mt-4">
                                    <Col sm="6">
                                        <ul className="orderConfrimationList text-large">
                                            <li><strong>First name:</strong> Sam</li>
                                            <li><strong>Last name:</strong> Smith</li>
                                            <li><strong>Phone:</strong> +123 456 7890</li>
                                            <li><strong>Email:</strong> you@example.com</li>
                                        </ul>
                                    </Col>


                                    <Col sm="6">
                                        <ul className="orderConfrimationList">
                                            <li><strong>City:</strong> Lorem ipsum</li>
                                            <li><strong>Estate:</strong> Lorem ipsum</li>
                                            <li><strong>Address:</strong> set amet adipiscing</li>
                                            <li><strong>Zip code:</strong> 56437</li>
                                        </ul>
                                    </Col>

                                    <Col sm="6" className="mt-4">
                                        <ul className="orderConfrimationList text-large">
                                            <li><strong>Total Price:</strong> 50.00</li>
                                            <li><strong>Delivery method:</strong> Standard</li>
                                            <li><strong>Expected arrival:</strong>  Monday, 27.05.2019</li>
                                        </ul>
                                    </Col>
                                </Row>

                                <Row className="form-group mt-5">
                                    <div className="col-12 d-flex justify-content-between">
                                        <button type="button" className="btn btnSecondary" onClick={handlePrev} >Prev</button>
                                        <button type="submit" className="btn btn-primary" data-target="#confirmOrder" data-toggle="modal">Confirm order</button>
                                    </div>
                                </Row>

                            </Form>
                        </div>{/* tab section -3 */}


                    </div>{/* checkout tab */}
                </Card.Body>
                {/* end of Card.Body */}
            </Card>
            {/* end of Card */}
        </Container>

    )
}





function CheckToggle({ children, eventKey, title }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>{
        if(eventKey === 0){

            console.log( document.getElementById('ch-1').checked=false)
        }
        if(eventKey === 1){

            document.getElementById('ch-0').checked=false
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


function PaymentsMethod(props){
    return(<>
        <Accordion defaultActiveKey="0">

            <div className="payment-header-card">
                <CheckToggle eventKey="0" title="Mpesa" />
            </div>
            <Accordion.Collapse eventKey="0">

                <div className="clearfix">
                    <hr style={{borderColor:"#e2e2e2"}}/>
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col-sm-10 form-group">
                                <label htmlFor="card-number">Card number</label>
                                <input type="text" className="form-control" id="card-number" aria-describedby="emailHelp"/>
                            </div>
                            <div className="col">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row align-items-center justify-content-between">
                            <div className="col-sm-3 form-group">
                                <label htmlFor="card-number">Expiry date</label>
                                <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                    <li><input type="text" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="MM"/></li>
                                    <li className="cardBl">/</li>
                                    <li><input type="text" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="YY"/></li>
                                </ul>
                            </div>

                            <div className="col offset-sm-4 form-group">
                                <label htmlFor="card-number">CVV</label>
                                <input type="text" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder=""/>
                            </div>
                            <div className="col-sm-2">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary">Add</button>
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
                                <input type="text" className="form-control" id="card-number" aria-describedby="emailHelp"/>
                            </div>
                            <div className="col">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row align-items-center justify-content-between">
                            <div className="col-sm-3 form-group">
                                <label htmlFor="card-number">Expiry date</label>
                                <ul className="cardPayFiled d-flex align-items-center justify-content-end">
                                    <li><input type="text" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="MM"/></li>
                                    <li className="cardBl">/</li>
                                    <li><input type="text" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder="YY"/></li>
                                </ul>
                            </div>

                            <div className="col offset-sm-4 form-group">
                                <label htmlFor="card-number">CVV</label>
                                <input type="text" className="form-control" id="card-number" aria-describedby="emailHelp" placeholder=""/>
                            </div>
                            <div className="col-sm-2">
                                <img src={card_icon_img} alt=""/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Accordion.Collapse>

            <div className="payment-header-card mt-3 d-flex justify-content-between">
                <div>
                    <CheckToggle eventKey="3" title="Standard" />
                </div>
                <div>
                    <div className="col text-right shippingCostPrice">
                        <span className="shippingCost"><strong>Time:</strong> 170 hours</span> <span className="shippingPrice pl-3 pr-3"><strong>Price:</strong> $0</span>
                    </div>
                </div>
            </div>

            <div className="payment-header-card mt-3 d-flex justify-content-between">
                <div>
                    <CheckToggle eventKey="4" title="Express" />
                </div>
                <div>
                    <div className="col text-right shippingCostPrice">
                        <span className="shippingCost"><strong>Time:</strong> 170 hours</span> <span className="shippingPrice pl-3 pr-3"><strong>Price:</strong> $0</span>
                    </div>
                </div>
            </div>

        </Accordion>
    </>)
}


export default CheckoutTab;
