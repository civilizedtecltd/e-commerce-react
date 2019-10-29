import React from 'react';
import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import './assets/css/user.css';
import { InputFrom, SelectFrom } from '../../components/FromComponents/InputComponent';
import { ButtonComponents } from '../../components/ButtonComponents/ButtonComponents';
import {Liai} from '../../components/LiComponent/CommonLiComponent';
import {asideData} from '../../inc/users/users'
import HeaderComponent from '../../components/header/Header';


const UserProfile = () => {
  return (<>
    <div className="allWrapper">
      <HeaderComponent/>
      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <Col sm="2">
            <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
                <nav className="userNav">
                  <ul className="userNavBar">
                    {asideData.map((aside)=><Liai
                      key={Math.floor(Math.random() * 10)}
                      ListClass={aside.LIST_CLASS}
                      Title={aside.TITLE}
                      Url={aside.URL}
                      IconName={aside.ICON_NAME}
                      AnchorClass={aside.ANCHOR_CLASS}
                    />)}

                  </ul>{/* end of userNavBar */}
                </nav>{/* end of userNav */}
              </aside>{/* end of aside */}
            </Col>{/* end of Col */}

            <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">

                <section className="myOrderArea secGap clearfix" id="myOrderArea">

                  <Container fluid={true}>
                    <Row>
                      <Col>
                        <Card>
                          <Card.Body>
                            <div className="userProfileBody clearfix" id="userProfileBody">
                              <h2 className="cardSecTitle mb-4">Profile settings</h2>
                              <Form className="profileSettingsForm">
                                <Row>
                                  <Col sm="6">
                                    <SelectFrom
                                      LableTitle="Category"
                                      controlId="exampleForm.ControlSelect1"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      controlId="firstName"
                                      LableTitle="First Name"
                                      TypeName="text"
                                      Name="first_name"
                                      Value=""
                                      Placeholder="First Name"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      controlId="lastName"
                                      LableTitle="Last Name"
                                      TypeName="text"
                                      Name="lastName"
                                      Value=""
                                      Placeholder="Last Name"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      controlId="userEmail"
                                      LableTitle="Email Address"
                                      TypeName="email"
                                      Name="email"
                                      Value=""
                                      Placeholder="Email Address"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      controlId="userPhone"
                                      LableTitle="Phone Number"
                                      TypeName="text"
                                      Name="phone"
                                      Value=""
                                      Placeholder="Phone Number"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="12">
                                    <hr className="hrBorder" />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    
                                    <InputFrom
                                      controlId="currentPassword"
                                      LableTitle="Current Password"
                                      TypeName="password"
                                      Name="password"
                                      Value=""
                                      Placeholder="Current Password"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      controlId="newPassword"
                                      LableTitle="Create New Password"
                                      TypeName="password"
                                      Name="password"
                                      Value=""
                                      Placeholder="Create New Password"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      controlId="repeatNewPassword"
                                      LableTitle="Repeat new password"
                                      TypeName="password"
                                      Name="password"
                                      Value=""
                                      Placeholder="Repeat new password"
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="12">
                                    <ButtonComponents
                                      Type="submit"
                                      ClassName="primary"
                                      Name="Save"
                                    />
                                  </Col>{/* end of Col */}
                                </Row>{/* end of Row */}
                              </Form>{/* end of userProfile */}
                            </div>{/* end of userProfile */}
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

export default UserProfile;
