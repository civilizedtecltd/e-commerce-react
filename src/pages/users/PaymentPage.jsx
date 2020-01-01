import React, { useState , useEffect} from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Modal,
  Form
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import {
  deletePayment,
  updatePaymentMethod
} from "../../redux/actions/authActions";
import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import UserNav from "../../components/UserNav/UserNav";
import AddPaymentMethod from "../../components/paymentMethodComponent/AddPaymentMethod";
import "./assets/css/user.css";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const PaymentPage = props => {
  const [visible, setVisible] = useState(false);
  const [cardAlert, setCardAlert] = useState(false);
  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.items.length;
  const [card_id, setCardId] = useState(null);

  const [visibleUpdateModal, setVisibleUpdateModal] = useState(false);
  const cards = !isEmpty(props.payment) ? [...props.payment] : [];
  const [data, setData] = useState([...cards]);
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const handleVisibility = e => {
    e.preventDefault();
    setVisible(!visible);
  };

  const onDeletePayment = e => {
    e.preventDefault();
    props.deleteCard(e.target.id);
    return setCardAlert(false);
  };

  const handleClose = () => setCardAlert(false);

  const handleShow = e => {
    e.preventDefault();
    setCardId(e.target.id);
    setCardAlert(true);
  };

  useEffect(() => {
    setData({
      id: card_id,
      card_number:cardNumber,
      mm: month,
      yy:year,
      ccv: cvv,
    });
  }, [cardNumber,card_id, year, month, cvv]);

  const updatePaymentMethod = e => {
    e.preventDefault();

    props.update(data);
    return setVisibleUpdateModal(false);
  };

  //Card Input Format
  const limit = (val, max) => {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";

        //this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }

    return val;
  };

  const cardExpiryMonth = val => {
    return limit(val.substring(0, 2), "12");
  };

  const cardExpiryYear = val => {
    return val.substring(0, 2);
  };

  return (
    <>
      <PageLoader loading={props.favorite.pending} />
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={totalFavorite}
          cartItem={totalItem}
          menuActive={true}
        />
        <MobileHeader
          favorite_item={totalFavorite}
          cartItem={totalItem}
          menuActive={true}
        />
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
                                  {cards.length === 0 ? (
                                    <></>
                                  ) : (
                                    cards.map(card => {
                                      const last_num = card.card_number
                                        ? card.card_number.slice(-4)
                                        : "";
                                      return (
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
                                                Expires in {card.mm}/{card.yy}
                                              </p>
                                            </div>
                                          </td>
                                          <td className="actionBtntd">
                                            <Button
                                              className="btn btnActionUpdate"
                                              value={card.id}
                                              onClick={e => {
                                                e.preventDefault();
                                                const existData = cards.find(
                                                  payment =>
                                                    payment.id ===
                                                    Number(e.target.value)
                                                );
                                                setCardNumber(
                                                  existData.card_number
                                                );
                                                setMonth(existData.mm);
                                                setYear(existData.yy);
                                                setCvv(existData.ccv);
                                                setCardId(e.target.value);

                                                return setVisibleUpdateModal(
                                                  true
                                                );
                                              }}
                                            >
                                              Update
                                            </Button>
                                            <Button
                                              id={card.id}
                                              className="btn btnActionDelete"
                                              onClick={handleShow}
                                            >
                                              Delete
                                            </Button>
                                          </td>
                                        </tr>
                                      );
                                    })
                                  )}
                                </tbody>
                              </Table>
                              {!visible ? (
                                <Button
                                  className="btn btn-primary btnSm"
                                  onClick={handleVisibility}
                                >
                                  Add payment method
                                </Button>
                              ) : (
                                ""
                              )}

                              {visible ? (
                                <div className="add-payment d-flex align-items-center mt-4">
                                  <h3>Add payment method</h3>
                                  <Button
                                    className="btn btn-danger ml-3 btn-cancel"
                                    onClick={handleVisibility}
                                  >
                                    Cancel
                                  </Button>
                                </div>
                              ) : (
                                ""
                              )}

                              {visible ? <AddPaymentMethod /> : ""}
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

      {/*  Modal*/}
      <Modal show={cardAlert} onHide={handleClose}>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="cardModalCss">
          Are you sure ? You want to delete it..!
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            id={card_id}
            name="confirm"
            variant="primary"
            onClick={onDeletePayment}
          >
            Confirm
          </Button>

          <Button className="btn modalCancelBtn" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal.Header closeButton className="border-0"></Modal.Header> */}
      <Modal
        show={visibleUpdateModal} //visibleUpdateModal
        onHide={e => setVisibleUpdateModal(false)}
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <Form>
            <div className="cardInfoForm p-3">
              <Row className="align-items-center">
                <Col sm="12">
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
                      value={cardNumber}
                      onChange={e => {
                        e.preventDefault();
                        return setCardNumber(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="8">
                  <Form.Group>
                    <Form.Label>Expiry date</Form.Label>
                    <ul className="justify-content-start d-flex">
                      <li className="ModalFromInput">
                        <NumberFormat
                          id="card-mm"
                          format={cardExpiryMonth}
                          placeholder="MM"
                          mask={["M", "M"]}
                          name="mm"
                          value={month}
                          onChange={e => {
                            e.preventDefault();
                            return setMonth(e.target.value);
                          }}
                        />
                      </li>
                      <li className="cardBl">/</li>
                      <li className="ModalFromInput">
                        <NumberFormat
                          id="card-yy"
                          format={cardExpiryYear}
                          placeholder="YY"
                          mask={["Y", "Y"]}
                          name="yy"
                          value={year}
                          onChange={e => {
                            e.preventDefault();
                            return setYear(e.target.value);
                          }}
                        />
                      </li>
                    </ul>
                  </Form.Group>
                </Col>

                <Col sm="4">
                  <Form.Group>
                    <Form.Label> CVV </Form.Label>
                    <NumberFormat
                      type="text"
                      id="card-cvv"
                      name="ccv"
                      format="###"
                      placeholder="CVV"
                      value={cvv}
                      onChange={e => {
                        e.preventDefault();
                        return setCvv(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            name="confirm"
            variant="primary"
            id={card_id}
            onClick={updatePaymentMethod}
          >
            Confirm
          </Button>
          <Button
            className="btn modalCancelBtn"
            onClick={e => {
              e.preventDefault();
              return setVisibleUpdateModal(false);
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.shop.cart,
  favorite: state.favorite,
  payment: state.auth.user.payment
});

const mapDispatchToProps = dispatch => ({
  deleteCard: id => dispatch(deletePayment(id)),
  update: data => dispatch(updatePaymentMethod(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
