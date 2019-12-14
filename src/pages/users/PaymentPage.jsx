import React, { useState } from "react";
import { connect } from "react-redux";
import isEmpty from 'lodash/isEmpty';
import {
    Container,
    Row,
    Col,
    Card,
    Table,
    Button
} from "react-bootstrap";

import { deletePayment } from "../../redux/actions/authActions";

import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import UserNav from "../../components/UserNav/UserNav";
import AddPaymentMethod from "../../components/paymentMethodComponent/AddPaymentMethod";
import "./assets/css/user.css";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";


const PaymentPage = (props) => {

  const [visible, setVisible] = useState(false);

  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.length;

  const cards = (!isEmpty(props.payment)) ? [ ...props.payment] : [];

  const handleVisibility = (e) => {
      e.preventDefault();
      setVisible(!visible);
    }

  const onDeletePayment = (e) =>{
    e.preventDefault();
    props.deleteCard(e.target.id);
  }

  return (
    <>
      <PageLoader loading={false}/>
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
                                { (cards.length === 0)? <></> : cards.map(card => {
                                   const last_num =  (card.payment_info.card_number).slice(-4);
                                    return(
                                  <tr key={card.id}>
                                    <td className="cardInfotd">
                                        <div className="cardPaymentDetails">
                                            <h3 className="payTitle">
                                            {card.payment_type}
                                            <span className="cardNumber">
                                                **** **** **** {last_num}
                                            </span>
                                            </h3>
                                            <p className="payExp">
                                            Expires in {card.payment_info.mm}/{card.payment_info.yy}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="actionBtntd">
                                    <Button
                                        className="btn btnActionUpdate"
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        id={card.id}
                                        className="btn btnActionDelete"
                                        onClick={onDeletePayment}
                                    >
                                        Delete
                                    </Button>
                                    </td>
                                  </tr>
                                  )
                                })}
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

                            { visible ? <AddPaymentMethod /> : ''}
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
  favorite: state.favorite,
  payment: state.auth.user.payment
})

const mapDispatchToProps = dispatch => ({
    deleteCard: (id) => dispatch(deletePayment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
