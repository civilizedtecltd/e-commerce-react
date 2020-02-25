import React,{useState, useEffect} from 'react';

import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";
import { connect } from 'react-redux';
import UserNav from "../../components/UserNav/UserNav";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import axios from 'axios'
import {URL} from '../../constants/config'
const Subscription = (props) => {

  const [subscription, setSubscription] = useState({ announcement: false, saleInvitations: false, weeklyNewsletter: false, unsubscribe: false })
  const [message, setMessage] = useState({ show: false, type: 'unknown', message: '' })
  const { email } = props.auth
  
  useEffect(() => {
    if(subscription.unsubscribe) {
      setSubscription({ announcement: false, saleInvitations: false, weeklyNewsletter: false, unsubscribe:true})
    }
    if (subscription.announcement || subscription.saleInvitations || subscription.weeklyNewsletter) {
      axios.get(URL.__SUBSCRIBER(email)).then(res=>console.log(res)).catch(error=>console.log(error))
      setSubscription({ announcement: true, saleInvitations: true, weeklyNewsletter: true, unsubscribe: false })
    }
  }, [subscription.unsubscribe, subscription.announcement, subscription.saleInvitations, subscription.weeklyNewsletter, email])

  const handleChange = (e) => setSubscription({ ...subscription, [e.target.name]: e.target.checked })

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post(URL._UPDATE_SUBSCRIBER, {
      email: email,
      announcement: subscription.announcement,
      sale_invitation: subscription.saleInvitations,
      weekly_newsletter: subscription.weeklyNewsletter,
      unsubscribe: subscription.unsubscribe
    }).then(res => {
       console.log(res)
     })
    .catch(error=>console.error(error))
  }

  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.items.length;


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
          <Container fluid="{true}" className="pl-0 pr-0">
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
                        <Col sm="12">
                          <Card>
                            <Card.Body className="pt-5">
                              <h2 className="cardSecTitle mb-3">
                                Manage email subscription
                              </h2>
                              <h5 className="cardSubtitle mb-2">
                                Please choose which types of emails you would
                                like to receive from us
                              </h5>
                              <Form
                                className="profileSettingsForm"
                                onSubmit={handleSubmit}
                              >
                                <Row>
                                  <Col sm="12">
                                    <Form.Group
                                      controlId={"formCheckbox1"}
                                      className={"formCheckbox mt-2"}
                                    >
                                      <Form.Check
                                        type={"checkbox"}
                                        label={"Announcements"}
                                        name='announcement'
                                        checked={subscription.announcement}
                                        onChange={handleChange}
                                      />
                                    </Form.Group>
                                  </Col>

                                  <Col sm="12">
                                    <Form.Group
                                      controlId="formCheckbox2"
                                      className="formCheckbox mt-2"
                                    >
                                      <Form.Check
                                        type="checkbox"
                                        label="Sale invitations"
                                        name="saleInvitations"
                                        checked={subscription.saleInvitations}
                                        onChange={handleChange}
                                      />
                                    </Form.Group>
                                  </Col>

                                  <Col sm="12">
                                    <Form.Group
                                      controlId="formCheckbox3"
                                      className="formCheckbox mt-2"
                                    >
                                      <Form.Check
                                        type="checkbox"
                                        label="Weekly Newsletter"
                                        name="weeklyNewsletter"
                                        checked={subscription.weeklyNewsletter}
                                        onChange={handleChange}
                                      />
                                    </Form.Group>
                                  </Col>

                                  <Col sm="12">
                                    <Form.Group
                                      controlId="formCheckbox4"
                                      className="formCheckbox mt-2"
                                    >
                                      <Form.Check
                                        type="checkbox"
                                        label="Unsubscribe"
                                        name="unsubscribe"
                                        checked={subscription.unsubscribe}
                                        onChange={handleChange}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="12">
                                    <Button
                                      className={"mt-3"}
                                      type="submit"
                                      name="save"
                                    >
                                      Save
                                    </Button>
                                  </Col>
                                </Row>
                              </Form>
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
}


const mapStateToProps = state => ({
  cart: state.shop.cart,
  favorite: state.favorite,
  auth: state.auth.user
})

export default connect(mapStateToProps, null)(Subscription);
