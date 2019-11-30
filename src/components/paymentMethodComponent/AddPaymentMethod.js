import React from "react";
import {Form, Accordion, Card, useAccordionToggle} from "react-bootstrap";
import PaymentMethodComponent from './PaymentMethodComponent';

function CheckToggle({ children, eventKey, title, name }) {

    const decoratedOnClick = useAccordionToggle(eventKey, () =>{
        if(eventKey === 1){

            console.log( document.getElementById('ch-2').checked=false)
        }
        if(eventKey === 2){

            document.getElementById('ch-1').checked=false
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

function AddPaymentMethod() {
  return (

    <Accordion defaultActiveKey="0">

            <div className="payment-header-card mt-3">
                <CheckToggle eventKey="1" title="Mpesa" />
            </div>
            <Accordion.Collapse eventKey="1">
                <PaymentMethodComponent/>
            </Accordion.Collapse>


            <div className="payment-header-card mt-3">
                <CheckToggle eventKey="2" title="Visa" />
            </div>
            <Accordion.Collapse eventKey="2">
                <PaymentMethodComponent/>
            </Accordion.Collapse>

    </Accordion>
  );
}

export default AddPaymentMethod;
