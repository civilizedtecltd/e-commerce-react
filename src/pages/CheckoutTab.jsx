import React, { useState } from 'react';
import {Container, Card, Form, Col, Row, Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import isEmpty from 'lodash/isEmpty';
import {connect} from 'react-redux';
import {setDeliveryAddress, setPaymentDetails} from '../redux/actions/shopActions';
import { confirmOrder } from '../redux/actions/authActions';
import PaymentsMethods from './PaymentMethods';
import {futureDate} from '../helpers/utils';
import './checkout.css';
import '../assets/css/theme.css';
import PageLoader from "../components/pageLoader/PageLoaderComponent";


const CheckoutTab = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [step, setStep] = useState({
        prev:0,
        next:1,
        show:false
    })

    const [formData, setFormData] = useState({
        first_name: props.user.first_name,
        last_name: props.user.last_name,
        email: props.user.email,
        terms: false,
        policy: false
    });

    const [payment, setPayment] = useState({});

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

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

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

    const getPaymentDetails = (data) => {
        props.getPaymentMethod(data)
        setPayment({
            ...data
        })
    }

    const confirmOrder = (e) => {
        e.preventDefault();

        const books = [];

        props.cart.map(item => {
            books.push({
                id: item.id,
                quantity: item.quantity
            });
        });

        console.log({
            address: formData,
            ...payment,
            books
        });

        props.confirmOrder({
            address: formData,
            ...payment,
            books
        });
        setShow(true);
    }

    return(<>
            <PageLoader loading={false}/>
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
                                                <input type="text" name='first_name' id="first-name" className="form-control" value={formData.first_name} onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="last-name">Last Name</label>
                                                <input type="text" name='last_name' id="last-name" className="form-control" value={formData.last_name} onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="estate">Estate</label>
                                                <input type="text" name="estate" id="estate" className="form-control" onChange={handleOnChange}/>
                                            </Col>

                                            <Col col={12} className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <input type="text" name="country"  id="country" className="form-control" onChange={handleOnChange}/>
                                            </Col>

                                            <Col col={12} className="form-group">
                                                <label htmlFor="city">City</label>
                                                <input type="text" name="city"  id="city" className="form-control" onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" name="address" id="address" className="form-control" onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="zip-code">Zip Code</label>
                                                <input type="text" name="zip" id="zipcode" className="form-control" onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="house">House/apartment number</label>
                                                <input type="text" name="house_num" id="house" className="form-control" onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" name="email" id="email" className="form-control" value={formData.email} onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={6} className="form-group">
                                                <label htmlFor="phone-number">Phone Number</label>
                                                <input type="text" name="phone" id="phone-number" className="form-control" onChange={handleOnChange}/>
                                            </Col>

                                            <Col sm={12} className="form-group">
                                                <label htmlFor="comment">Comments</label>
                                                <textarea name="comments" id="comment" cols="30" rows="4" className="form-control" onChange={handleOnChange}></textarea>
                                            </Col>

                                            <Col className="form-group fromCheckbox mt-1">
                                                <Form.Check
                                                    custom
                                                    type={"checkbox"}
                                                    label={`I agree with `}
                                                    id={`checkboxTerms`}
                                                    onChange={handleTermsCheck}
                                                />
                                                <Link to="#" className="termsTxt">Terms and Conditions</Link>
                                            </Col>

                                            <Col className="col-md-12 form-group fromCheckbox mt-1">
                                                <Form.Check
                                                    custom
                                                    type={"checkbox"}
                                                    label={`I agree with `}
                                                    id={`checkboxPrivacy`}
                                                    onChange={handlePrivacyCheck}
                                                />
                                                <Link to="#" className="termsTxt">Privacy Policy</Link>
                                            </Col>
                                        </Row>
                                        <Col className="text-right p-0">
                                            <Button className="btn btn-primary cart-btn-next" disabled={(!formData.terms || !formData.policy) ? true : false} onClick={handleNext}> Next</Button>
                                        </Col>
                                    </Form>
                                </Col>
                            </Row>{/* tab-section -1 */}
                        </div>


                        <div id="payment-section" className="tab payment-section mt-3">
                            <div className="row">
                                <div className="col col-12">
                                    <button disabled className="btn btn-primary btn-block d-md-none d-lg-none d-xl-none mb-3">Payment and delivery</button>
                                    <h3 className="mt-2 mb-2">Choose a payment method</h3>
                                    <PaymentsMethods  callback={getPaymentDetails}/>

                                    <Form className="mt-5">
                                        <Row>
                                            <div className="col-12 d-flex justify-content-between p-0">
                                                <Col sm="6">
                                                    <button type="button" className="btn btnSecondary" onClick={handlePrev} >Prev</button>
                                                </Col>

                                                <Col sm="6" className="col-6 text-right">
                                                    <button type="button" className="btn btn-primary" disabled={(isEmpty(payment.payment) ? true : false)} onClick={handleNext}>Next</button>
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
                                            <li><strong>First name : </strong>{ formData.first_name }</li>
                                            <li><strong>Last name : </strong>{ formData.last_name }</li>
                                            <li><strong>Phone : </strong> { formData.phone}</li>
                                            <li><strong>Email : </strong>{ props.user.email }</li>
                                        </ul>
                                    </Col>


                                    <Col sm="6">
                                        <ul className="orderConfrimationList">
                                            <li><strong>City : </strong>{ formData.city}</li>
                                            <li><strong>Estate : </strong> { formData.estate}</li>
                                            <li><strong>Address : </strong> { formData.address}</li>
                                            <li><strong>Zip code : </strong> { formData.zip}</li>
                                        </ul>
                                    </Col>

                                    <Col sm="6" className="mt-4">
                                        <ul className="orderConfrimationList text-large">
                                            <li><strong>Total Price : </strong>{props.totalPrice}</li>
                                            <li><strong>Delivery method : </strong> {(!isEmpty(payment) && payment.delivery === 0) ? 'Standard' : 'Express'}</li>
                                            <li><strong>Expected arrival : </strong>  {futureDate(7)}</li>
                                        </ul>
                                    </Col>
                                </Row>

                                <Row className="form-group mt-5">
                                    <div className="col-12 d-flex justify-content-between">
                                        <button type="button" className="btn btnSecondary" onClick={handlePrev} >Prev</button>
                                        <button type="submit" className="btn btn-primary" data-target="#confirmOrder" data-toggle="modal" onClick={confirmOrder}>Confirm order</button>
                                    </div>
                                </Row>

                            </Form>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>

        <Modal show = {show} onHide = { handleClose }>
            <Modal.Header className={"border-0"} closeButton>
            </Modal.Header>
            <Modal.Body>
                <h2 className={"text-center"}>
                    Order Completed successfully!
                    <Link to="/" className="btn btn-primary mt-3" style={{color:'white'}}> Go to Shopping </Link>
                </h2>
            </Modal.Body>
            <Modal.Footer className={"border-0"}>

            </Modal.Footer>
        </Modal>
</>)
}


const mapStateToProps = state =>({
    ...state.auth,
    ...state.shop
})

const mapDispatchToProps = dispatch => ({
    setAddress: (address) => dispatch(setDeliveryAddress(address)),
    setPayment: (payment) => dispatch(setPaymentDetails(payment)),
    confirmOrder: (info) => dispatch(confirmOrder(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutTab);
