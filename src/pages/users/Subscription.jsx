import React,{useState} from 'react';

import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";
import { connect } from 'react-redux';
import UserNav from "../../components/UserNav/UserNav";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import axios from 'axios'
import {URL} from '../../constants/config'
const Subscription = (props) => {
  const [announcement, setAnnouncement] = useState(false)
  const [saleInvitations, setSaleInvitations] = useState(false)
  const [weeklyNewsletter, setWeeklyNewsletter] = useState(false)
  const [unsubscribe,setUnsubscribe] = useState(true)

  const [message , setMessage] = useState('')//this message you can use for show message in frontend
  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.items.length;
  const handleUnsubscribe = (e)=> {
     setUnsubscribe(!unsubscribe)
     if(unsubscribe===true)
        setAnnouncement(false)
        setSaleInvitations(false)
        setWeeklyNewsletter(false)
    }


  const hangleSubmit = async(e) => {
    e.preventDefault();
     await axios.post(URL._UPDATE_SUBSCRIBER,{
      email:props.auth.email,
      announcement: announcement,
      sale_invitation: saleInvitations,
      weekly_newsletter:weeklyNewsletter ,
      unsubscribe : unsubscribe
    }).then(res=>setMessage(res.data.message))
    .catch(error=>console.error(error))
  }
 /*  console.log(message) */

  return (<>
    <PageLoader loading={props.favorite.pending}/>
  <div className="allWrapper">
  <HeaderComponent
          favorite_item={totalFavorite}
          cartItem={totalItem}
          menuActive={true}
        />
    <MobileHeader
     favorite_item={totalFavorite}
     cartItem={totalItem}
      />
      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <UserNav />
            <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">
                <section className="myOrderArea secGap clearfix" id="myOrderArea">
                  <Container fluid={true}>
                    <Row>
                      <Col sm="12">
                        <Card>
                          <Card.Body className="pt-5">
                            <h2 className="cardSecTitle mb-3">Manage email subscription</h2>
                            <h5 className="cardSubtitle mb-2">Please choose which types of emails you would like to receive from us</h5>
                            <Form className="profileSettingsForm" onSubmit={hangleSubmit}>
                              <Row>
                                <Col sm="12">
                                <Form.Group
                                      controlId={"formCheckbox1"}
                                      className={"formCheckbox mt-2"}>
                                      <Form.Check
                                      type={"checkbox"}
                                      label={"Announcements"}
                                      name={"announcements"}
                                      checked={announcement}
                                      onChange = {(e)=>setAnnouncement(!announcement)}
                                      />
                                    </Form.Group>

                                </Col>

                                <Col sm="12">
                                <Form.Group controlId="formCheckbox2" className="formCheckbox mt-2">
                                    <Form.Check
                                     type="checkbox"
                                     label="Sale invitations"
                                     name="sale_invitations"
                                     checked={saleInvitations}
                                     onChange = {(e)=>setSaleInvitations(!saleInvitations)}
                                      />
                                </Form.Group>
                                </Col>



                                <Col sm="12">
                                <Form.Group controlId="formCheckbox3" className="formCheckbox mt-2">
                                    <Form.Check
                                     type="checkbox"
                                     label="Weekly Newsletter"
                                     name="weekly_newsletter"
                                     checked={weeklyNewsletter}
                                     onChange = {(e)=>setWeeklyNewsletter(!weeklyNewsletter)}
                                      />
                                </Form.Group>
                                </Col>

                                <Col sm="12">
                                   <Form.Group controlId="formCheckbox4" className="formCheckbox mt-2">
                                    <Form.Check
                                     type="checkbox"
                                     label="Unsubscribe"
                                     name="unsubscribe"
                                     checked={unsubscribe}
                                     onChange = {handleUnsubscribe}
                                      />
                                </Form.Group>
                                </Col>
                                <Col sm="12">
                                  <Button className={"mt-3"} type="submit" name="save">Save</Button>
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
    </>);
}


const mapStateToProps = state => ({
  cart: state.shop.cart,
  favorite: state.favorite,
  auth: state.auth.user
})

export default connect(mapStateToProps, null)(Subscription);
