import React, {useState} from "react";
import { connect } from 'react-redux';
import { setPayment } from '../../redux/actions/authActions';
import {Form, Accordion, useAccordionToggle} from "react-bootstrap";
import PaymentMethodComponent from './PaymentMethodComponent';

function CheckToggle({ children, eventKey, title, name }) {

    const decoratedOnClick = useAccordionToggle(eventKey, () =>{
        if(eventKey === 1){

            document.getElementById('ch-2').checked=false
            document.getElementById('ch-3').checked=false
        }
        if(eventKey === 2){

            document.getElementById('ch-1').checked=false
            document.getElementById('ch-3').checked=false
        }
        if(eventKey === 3){

            document.getElementById('ch-1').checked=false
            document.getElementById('ch-2').checked=false
        }
    })

    return (
        <Form.Check
            custom
            className="ml-3"
            type="radio"
            label={title}
            name="payment"
            id={`ch-${eventKey}`}
            onClick={decoratedOnClick}
        >
            {children}

        </Form.Check>
    );
}

function AddPaymentMethod(props) {

    const [cardInfo, setCardInfo] = useState({});

    const handleAccordionOnSelect = (selectedKey) => {
        switch(Number(selectedKey)){
            case 1:
                setCardInfo({
                   payment_type: 'MPESA'
                });
                break;
            case 2:
                setCardInfo({
                    payment_type: 'VISA'
                });
                break;
            case 3:
                setCardInfo({
                    payment_type: 'PAYPAL'
                });
                break;
            default:
                setCardInfo({
                    ...cardInfo
                });
        }
    }

    const paymentInfo = (value) => {
        const info = {
            ...cardInfo,
            ...value
        }
        props.callback({
            ...info
        });
        props.setPayment(info);
    }


  return (<>

    <Accordion defaultActiveKey="0" onSelect={handleAccordionOnSelect}>

            <div className="payment-header-card mt-3">
                <CheckToggle eventKey="1" title="Mpesa" />
            </div>
            <Accordion.Collapse eventKey="1">
                <PaymentMethodComponent callback={paymentInfo}/>
            </Accordion.Collapse>


            <div className="payment-header-card mt-3">
                <CheckToggle eventKey="2" title="Visa" />
            </div>
            <Accordion.Collapse eventKey="2">
                <PaymentMethodComponent callback={paymentInfo} />
            </Accordion.Collapse>

            <div className="payment-header-card mt-3">
                <CheckToggle eventKey="3" title="PayPal" />
            </div>
            <Accordion.Collapse eventKey="3">
                <PaymentMethodComponent callback={paymentInfo}/>
            </Accordion.Collapse>

    </Accordion>
  </>);
}

const mapDispatchToProps = (dispatch) =>({
    setPayment: (info) => dispatch(setPayment(info))
})

export default connect(null, mapDispatchToProps)(AddPaymentMethod);
