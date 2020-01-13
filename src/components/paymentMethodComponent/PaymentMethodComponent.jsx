import React, {useState} from 'react';
import {Card, Form, Row, Col, Button, Alert} from "react-bootstrap";
import NumberFormat from 'react-number-format';
function PaymentMethodComponent(props) {
  const [showCardAlert, setShowCardAlert] = useState(false);
  const [message, setMessage] = useState("This information is not valid!");
  const [card, setCard] = useState({})
  const [reset,setReset] = useState(false)

  const handleOnChange = (e) => {
      setReset(false);
        setCard({
            ...card,
            [e.target.name]:e.target.value
        })
    }

  const handleOnClick = (e) => {

      e.preventDefault();
       if (!card.card_number && !card.mm && !card.yy && !card.ccv) {
         setMessage("Field should not be empty");
         setShowCardAlert(true);
         return setTimeout(() => setShowCardAlert(false), 2000);
       }
      if (card.card_number && isNaN(Number(card.card_number[18]))) {
         setMessage("Card Number should be 16 digit");
         setShowCardAlert(true)
        return setTimeout(() => setShowCardAlert(false), 2000);
      }
      if (!card.card_number) {
        setMessage("Card Number should not empty");
        setShowCardAlert(true);
        return setTimeout(() => setShowCardAlert(false), 2000);
      }
      if (!card.mm) {
        setMessage("MM should not be empty");
        setShowCardAlert(true)
        return setTimeout(() => setShowCardAlert(false), 2000);
      }
      if (!card.yy) {
        setMessage("YY should not be empty");
        setShowCardAlert(true)
        return setTimeout(() => setShowCardAlert(false), 2000);
      }
      if (!card.ccv) {
        setMessage("CVV should not be empty");
        setShowCardAlert(true);
        return setTimeout(() => setShowCardAlert(false), 2000);
      }


      else if (card.card_number && card.mm && card.yy && card.ccv) {
        props.callback(card);
        setReset(true);
           }
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

  return (
    <Card.Body className="addPaymentCard m-0 p-0">
      <Row>
        <Col className="p-0">
          <Form className="selectPaymentOption">
            <div className="formRadioGroup bgGray mb-2">
              <div className="payInfoDetails clearfix">
                <div className="m-2">
                  <Alert
                    show={showCardAlert}
                    variant="danger"
                    onClose={() => setShowCardAlert(false)}
                    dismissible
                  >
                    <p>{message}</p>
                  </Alert>
                </div>
                <div className="cardInfoForm p-3">
                  <Row className="align-items-center">
                    <Col sm="10">
                      <Form.Group>
                        <Form.Label>Card number</Form.Label>
                        <NumberFormat
                          format="#### #### #### ####"
                          placeholder="____ ____ ____ ____"
                          mask={[
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_",
                            "_"
                          ]}
                          name="card_number"
                          className="form-control"
                          value={reset ? " " : card.card_number}
                          onChange={handleOnChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <img src="" alt="" />
                    </Col>
                  </Row>

                  <Row className="align-items-center justify-content-between">
                    <Col sm="4">
                      <Form.Group>
                        <Form.Label>Expiry date</Form.Label>
                        <ul className="cardPayFiled d-flex align-items-center justify-content-start">
                          <li className="width-45">
                            <NumberFormat
                              id="card-mm"
                              format={cardExpiryMonth}
                              placeholder="MM"
                              mask={["M", "M"]}
                              name="mm"
                              value={reset ? " " : card.mm}
                              onChange={handleOnChange}
                            />
                          </li>
                          <li className="cardBl">/</li>
                          <li className="width-45">
                            <NumberFormat
                              id="card-yy"
                              format={cardExpiryYear}
                              placeholder="YY"
                              mask={["Y", "Y"]}
                              name="yy"
                              value={reset ? " " : card.yy}
                              onChange={handleOnChange}
                            />
                          </li>
                        </ul>
                        {/* end of cardPayFiled */}
                      </Form.Group>
                    </Col>

                    <Col sm={{ offset: 4 }}>
                      <Form.Group controlId="card-cvv" className="ccv-group">
                        <Form.Label className="ccv-input"> CVV </Form.Label>
                        <NumberFormat
                          type="text"
                          id="card-cvv"
                          name="ccv"
                          format="###"
                          placeholder="CVV"
                          value={reset ? " " : card.ccv}
                          onChange={handleOnChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col sm="2">
                      <img src="" alt="" />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleOnClick}
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Card.Body>
  );
}

export default PaymentMethodComponent;
