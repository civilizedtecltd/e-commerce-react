import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button
} from "react-bootstrap";
import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import UserNav from "../../components/UserNav/UserNav";
import AddPaymentMethod from "../../components/paymentMethodComponent/AddPaymentMethod";
import "./assets/css/user.css";


  const PaymentPage = (props) => {

  const [visible, setVisible] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({ ...props.payment});

  const handleVisibility = (e) => {
      e.preventDefault();
      setVisible(!visible);
    }

  const updatePaymentInfo = (value) => {
      const cardName = (value.card_type).toUpperCase();
      const last4num = (value.card_number).slice(-4);
    setPaymentInfo({
        ...value,
        card_name: cardName,
        last_num: last4num
    });
  }

  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.length;

  return (
    <>
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={totalFavorite}
          cartItem={totalItem}
          menuActive={true}
        />
        <MobileHeader />
        <div className="userBodyArea clearfix" id="userBodyArea">
          <Container fluid={true} className="pl-0 pr-0">
            <Row noGutters>
              <UserNav />
              <Col>
                <main
                  className="userMainContent clearfix bgImage bgImg03"
                  id="userMainContent"
                >
                  <section
                    className="myOrderArea secGap clearfix"
                    id="myOrderArea"
                  >
                    <Container fluid={true}>
                      <Row>
                        <Col>
                          <Card className="fade-in">
                            <Card.Body>
                              <Table responsive className="cardTable">
                                <thead>
                                  <tr>
                                    <th> Payment methods </th>
                                    <th> Actions</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr>
                                    <td className="cardInfotd">
                                      <div className="cardPaymentDetails">
                                        <h3 className="payTitle">
                                          {paymentInfo.card_name}
                                          <span className="cardNumber">
                                            **** **** **** {paymentInfo.last_num}
                                          </span>
                                        </h3>
                                        <p className="payExp">
                                          Expires in {paymentInfo.mm}/{paymentInfo.yy}
                                        </p>
                                      </div>
                                    </td>

                                    <td className="actionBtntd">
                                      <Link
                                        to="#"
                                        className="btn btnActionUpdate"
                                      >
                                        Update
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btnActionDelete"
                                      >
                                        Delete
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                              { !visible ?
                              <Button className="btn btn-primary btnSm" onClick={handleVisibility} >
                                Add payment method
                              </Button>
                                  : ''}

                              { visible ?
                              <div className="add-payment d-flex align-items-center mt-4">
                                <h3>Add payment method</h3>
                                <Button className="btn btn-danger ml-3 btn-cancel" onClick={handleVisibility} >Cancel</Button>
                              </div>: ''}

                            { visible ? <AddPaymentMethod callback={updatePaymentInfo}/> : ''}
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </main>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};


const mapStateToProps = state => ({
  cart: state.shop.cart,
  favorite: state.favorite
})

export default connect(mapStateToProps, null)(PaymentPage);
