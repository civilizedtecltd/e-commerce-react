import React,{useState, useEffect} from 'react';
import { Container, Row, Col, Card, Form, Button, Alert} from 'react-bootstrap';
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";
import { connect } from 'react-redux';
import UserNav from "../../components/UserNav/UserNav";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import axios from 'axios'
import { URL } from '../../constants/config'
import { getSubscriptions, setSubscriptions } from '../../redux/actions/siteActions'

const Subscription = (props) => {

  const { auth, AllSubscriptions, pending, subscribeOption} = props
  const [updated, setUpdated] = useState(false)
  const [message, setMessage] = useState({ show: false, type: 'unknown', message: '' })

  const subscription = { ...subscribeOption}

  useEffect(() => {
    (async function(){
      AllSubscriptions(auth.email);
    })();
  }, [auth.email, updated])

  const handleChange = (e) => {

    if((e.target.name === 'unsubscribe') && (e.target.checked)){
        return props.setSubscriptions({
            announcement       : false,
            sale_invitation    : false,
            weekly_newsletter  : false,
            unsubscribe        : true
        })
    }

    //setSubscription({ ...subscription, [e.target.name]: e.target.checked })
    props.setSubscriptions({ ...subscription, [e.target.name]: e.target.checked })
  }

  const handleSubmit = async(e) => {

    e.preventDefault();

    axios.post(URL.__SET_SUBSCRIPTIONS, {

      email: auth.email,
      subscriber_id: auth.id,
      announcement: subscription.announcement,
      sale_invitation: subscription.sale_invitation,
      weekly_newsletter: subscription.weekly_newsletter,
      unsubscribe: subscription.unsubscribe

     }).then(res => {

       setMessage({ show: true, type: 'success', message: res.data.message });
       setUpdated(true);
       setTimeout(() => {
         setMessage({ show: false, type: 'unknown', message: '' })
       }, 5000);

    }).catch(error => {

      if(error.response){
          setMessage({ show: true, type: 'danger', message: error.response.data.message });
          setUpdated(false);
          setTimeout(() => {
            setMessage({ show: false, type: 'unknown', message: '' })
          }, 5000);
      }
    })

  }

  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.items.length;

  return (
    <>
      <PageLoader loading={pending} />
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
                                        disabled={subscription.unsubscribe && true}
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
                                        disabled={subscription.unsubscribe && true}
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
                                        disabled={subscription.unsubscribe && true}
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
  cart              : state.shop.cart,
  favorite          : state.favorite,
  auth              : state.auth.user,
  subscribeOption   : state.site.subscriptions,
  pending           : state.site.pending
})

const mapDispatchToProps = (dispatch) => {
  return {
    AllSubscriptions       : (email) => dispatch(getSubscriptions(email)),
    setSubscriptions    : (options)  => dispatch(setSubscriptions(options))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
