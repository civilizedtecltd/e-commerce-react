import React from 'react';
import { Card, Form, Row, Col, Button } from "react-bootstrap";

function PaymentMethodComponent() {
    return(
        <Card.Body className="addPaymentCard">
        <Row>
          <Col sm="6">
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
                          <Form.Control
                            type="text"
                            id="card-number"
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
                      <Col sm="3">
                        <Form.Group>
                          <Form.Label>
                            Expiry date
                          </Form.Label>
                          <ul class="cardPayFiled d-flex align-items-center justify-content-end">
                            <li>
                              <Form.Control
                                type="text"
                                id="card-mm"
                                placeholder="MM"
                              />
                            </li>
                            <li class="cardBl">/</li>
                            <li>
                              <Form.Control
                                type="text"
                                id="card-yy"
                                placeholder="YY"
                              />
                            </li>
                          </ul>
                          {/* end of cardPayFiled */}
                        </Form.Group>
                      </Col>

                      <Col sm={{ offset: 4 }}>
                        <Form.Group>
                          <Form.Label> CVV </Form.Label>
                          <Form.Control
                            type="text"
                            id="card-cvv"
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