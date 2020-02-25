import React,{useState, useEffect} from 'react';
import { Container, Row, Col, Card, Form, Button, Alert} from 'react-bootstrap';
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";
import { connect } from 'react-redux';
import UserNav from "../../components/UserNav/UserNav";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import axios from 'axios'
import { URL } from '../../constants/config'
import { getSubscriber} from '../../redux/actions/siteActions'

const Subscription = (props) => {
  const { auth, subscriber} = props
  const [subscription, setSubscription] = useState({ ...props.subscribeOption })
  const [message, setMessage] = useState({show:false, type:'unknown', message:''})
  useEffect(() => {
    subscriber(auth.email)
  }, [auth.email, subscriber])

  

  useEffect(() => {
    if (subscription.unsubscribe) {
       setSubscription({
        announcement: false,
        sale_invitation:false,
        weekly_newsletter: false,
        unsubscribe: true
       })
    }
  }, [subscription.unsubscribe])
  
  

  const handleChange = (e) => setSubscription({...subscription, [e.target.name]: e.target.checked })

  const handleSubmit = async(e) => {
    e.preventDefault();
     axios.post(URL._UPDATE_SUBSCRIBER, {
      email: auth.email,
      announcement: subscription.announcement,
      sale_invitation: subscription.sale_invitation,
      weekly_newsletter: subscription.weekly_newsletter,
      unsubscribe: subscription.unsubscribe
     }).then(res => {
       setMessage({ show: true, type: 'success', message: res.data.message[0].message }) 
       setTimeout(() => {
         setMessage({ show: false, type: 'unknown', message: '' }) 
       }, 3000);
    }).catch(error => {
      setMessage({ show: true, type: 'danger', message: error.response.data.message })
      setTimeout(() => {
        setMessage({ show: false, type: 'unknown', message: '' })
      }, 3000);
    })
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
                                        name="sale_invitation"
                                        checked={subscription.sale_invitation}
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
                                        name="weekly_newsletter"
                                        checked={subscription.weekly_newsletter}
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
                      <Alert show={message.show} variant={message.type} onClose={() => setMessage({ ...message, show: false })} dismissible>
                        <p>{message.message}</p>
                      </Alert>
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
  auth: state.auth.user,
  subscribeOption: state.site.subscriber
})

const mapDispatchToProps = (dispatch) => {
  return {
    subscriber: (email) => dispatch(getSubscriber(email)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
