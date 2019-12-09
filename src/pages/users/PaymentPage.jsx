import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { connect } from "react-redux";

  const PaymentPage = (props) => {
  const totalItem = props.cart.length;
  const [favorite, setFavorite] = useState([...props.favorite])
  const [visible, setVisible] = useState(false)
  
  const handleVisibility = (e) => {
    e.preventDefault();
    setVisible(!visible)
  }


  return (
    <>
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={favorite.length}
          cartItem={totalItem}
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
                                          Visa
                                          <span className="cardNumber">
                                            **** **** **** 5365
                                          </span>
                                        </h3>
                                        <p className="payExp">
                                          Expires in 09/21
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

                              <Button className="btn btn-primary btnSm" onClick={handleVisibility} >
                                Add payment method
                              </Button>


                              {visible ? <AddPaymentMethod /> : ''}
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
