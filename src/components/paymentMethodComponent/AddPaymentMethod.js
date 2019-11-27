import React from "react";
import { Form ,Accordion , Card,Button } from "react-bootstrap";
import PaymentMethodComponent from './PaymentMethodComponent'
function AddPaymentMethod() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
           <Form.Check
                 as ={Accordion.Toggle}
                  eventKey="0"
                  className="formRadio"
                  type="radio"
                  label="Paypal"
                  name="visa"
                  id="mpesa"
                />
          
        </Card.Header>
        <Accordion.Collapse eventKey="0">
           <PaymentMethodComponent/>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
           <Form.Check
                  as={ Accordion.Toggle }
                  eventKey="1"
                  className="formRadio"
                  type="radio"
                  label="Paypal"
                  name="visa"
                  id="visa"
                />

        </Card.Header>
        <Accordion.Collapse eventKey="1">
            <PaymentMethodComponent/>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AddPaymentMethod;
