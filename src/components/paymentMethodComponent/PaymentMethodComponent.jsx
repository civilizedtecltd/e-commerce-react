import React, {useState} from 'react';
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import NumberFormat from 'react-number-format';
function PaymentMethodComponent(props) {

    const [card, setCard] = useState({})

    const handleOnChange = (e) => {
        setCard({
            ...card,
            [e.target.name]:e.target.value
        })
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        props.callback(card);
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

  return(
      <Card.Body className="addPaymentCard m-0 p-0">
        <Row>
          <Col>
            <Form className="selectPaymentOption">
              <div className="formRadioGroup bgGray mb-2">
                <div className="payInfoDetails clearfix">
                  <hr className="hrBorder" />
                  <div className="cardInfoForm p-3">
                    <Row className="align-items-center">
                      <Col sm="10">

                        <Form.Group>
                          <Form.Label>
                            Card number
                          </Form.Label>
                          <NumberFormat
                              format="#### #### #### ####"
                              placeholder="____ ____ ____ ____"
                              mask={['_', '_','_','_','_', '_','_','_','_', '_','_','_','_', '_','_','_']}
                              id="card-number"
                              name="card_number"
                              className="form-control"
                              defaultValue={''}
                              onChange={handleOnChange}
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <img
                            src=""
                            alt=""
                        />
                      </Col>
                    </Row>

                    <Row className="align-items-center justify-content-between">
                      <Col sm="4">
                        <Form.Group>
                          <Form.Label>
                            Expiry date
                          </Form.Label>
                          <ul className="cardPayFiled d-flex align-items-center justify-content-start">
                            <li>

                              <NumberFormat
                                  type="text"
                                  id="card-mm"
                                  format={cardExpiryMonth}
                                  placeholder="MM"
                                  mask={['M', 'M']}
                                  name="mm"
                                  defaultValue={''}
                                  onChange={handleOnChange}
                              />
                            </li>
                            <li className="cardBl">/</li>
                            <li>
                              <NumberFormat
                                  type="text"
                                  id="card-yy"
                                  format={cardExpiryYear}
                                  placeholder="YY"
                                  mask={['Y', 'Y']}
                                  name="yy"
                                  defaultValue={''}
                                  onChange={handleOnChange}
                              />
                            </li>
                          </ul>
                          {/* end of cardPayFiled */}
                        </Form.Group>
                      </Col>

                      <Col sm={{ offset: 4 }}>
                        <Form.Group>
                          <Form.Label> CVV </Form.Label>
                          <NumberFormat
                              type="text"
                              id="card-cvv"
                              name="ccv"
                              format="###"
                              placeholder="CVV"
                              defaultValue={''}
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

  )
}

export default PaymentMethodComponent;
