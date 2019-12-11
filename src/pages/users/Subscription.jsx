import React from 'react';

import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import {CheckboxComponent} from '../../components/FromComponents/CheckboxComponents';
import{ButtonComponents}from '../../components/ButtonComponents/ButtonComponents'
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";
import { connect } from 'react-redux';
import UserNav from "../../components/UserNav/UserNav";

const Subscription = (props) => {

  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.length;

  return (<>
  <div className="allWrapper">
  <HeaderComponent
          favorite_item={totalFavorite}
          cartItem={totalItem}
          menuActive={true}
        />
    <MobileHeader />
      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <UserNav />
            <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">
                <section className="myOrderArea secGap clearfix" id="myOrderArea">
                  <Container fluid="{true}">
                    <Row>
                      <Col sm="12">
                        <Card>
                          <Card.Body className="pt-5">
                            <h2 className="cardSecTitle mb-3">Manage email subscription</h2>
                            <h5 className="cardSubtitle mb-2">Please choose which types of emails you would like to receive from us</h5>
                            <Form className="profileSettingsForm">
                              <Row>


                                <Col sm="12">
                                  <CheckboxComponent
                                    ControlId="formCheckbox1"
                                    ClassName="formCheckbox mt-2"
                                    Type="checkbox"
                                    Label="Announcements"
                                  />
                                </Col>{/* end of col */}

                                <Col sm="12">

                                  <CheckboxComponent
                                    ControlId="formCheckbox2"
                                    ClassName="formCheckbox mt-2"
                                    Type="checkbox"
                                    Label="Sale invitations"
                                  />
                                </Col>{/* end of col */}

                                <Col sm="12">
                                  <CheckboxComponent
                                    ControlId="formCheckbox3"
                                    ClassName="formCheckbox mt-2"
                                    Type="checkbox"
                                    Label="Weekly Newsletter"
                                  />
                                </Col>

                                <Col sm="12">

                                  <CheckboxComponent
                                    ControlId="formCheckbox3"
                                    ClassName="formCheckbox mt-2"
                                    Type="checkbox"
                                    Label="Unsubscribe"
                                  />
                                </Col>

                                <Col sm="12">
                                  <ButtonComponents
                                    ClassName="mt-3"
                                    Type="submit"
                                    Name="Save"
                                  />
                                </Col>{/* end of col */}
                              </Row>{/* end of row */}
                            </Form>{/* end of profileSettingsForm */}
                          </Card.Body>{/* end of Card.Body */}
                        </Card>{/* end of Card */}
                      </Col>{/* end of Col */}
                    </Row>{/* end of Row */}
                  </Container>{/* end of Container */}
                </section>{/* end of myOrderArea */}
              </main>{/* end of mainContent */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of userBodyArea */}
      </div>{/* end of allWrapper */}

    </>);
}


const mapStateToProps = state => ({
  cart: state.shop.cart,
  favorite: state.favorite
})

export default connect(mapStateToProps, null)(Subscription);
