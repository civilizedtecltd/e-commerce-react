import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import './assets/css/user.css';
import {Liai,Liis} from '../../components/LiComponent/CommonLiComponent';
import {headerPopbars,asideData,headerFeatureList} from '../../inc/users/users';
const UserProfile = () => {
  return (<>
    <div className="allWrapper">
      <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container fluid={true}>
          <Row className="justify-content-between">
            <Col>
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                {headerFeatureList.map(feature=><Liis
                    ListClass={feature.LIST_CLASS}
                    IconName={feature.ICON_NAME}
                    Title={feature.TITLE}
                />)}
                </ul>{/* end of headFeatureList */}
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of headerTopBar */}

      <header className="header userHeader clearfix" id="header">
        <Container fluid="{true}">
          <Row>
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}

            </Col>{/* end of Col */}

            <Col>
              <nav className="mainMenu mainNav" id="mainNav">
                <ul className="navTabs">
                  <li>
                    <Link to="#" className="active">Home</Link>
                  </li>{/* end of li */}
                </ul>{/* end of navTabs */}
              </nav>{/* end of Nav */}
              <Link to="#" className="generalLink" id="responsiveMainNavToggler"><i className="fa fa-bars"></i></Link>
              <div className="clearfix"></div>
              <div className="responsiveMainNav"></div>{/* end of Nav */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between align-items-center">
                {headerPopbars.map((datum)=><Liai
                    key={Math.floor(Math.random() * 10)}
                    IconName={datum.ICON_NAME}
                    Title={datum.TITLE}
                    Url={datum.URL}
                    AnchorClass={datum.ANCHOR_CLASS}
                  />)}

                  <li>
                    <div className="userLogged d-flex align-items-center">
                      <div className="userAvater"><img src="./assets/images/reviews_avater.jpg" alt="" /></div>
                      <span className="userName">Sam Smith</span>
                    </div>{/* end of userLogged */}
                  </li>{/* end of li */}
                </ul>{/* end of headPopBarList */}
              </div>{/* end of headPopBar */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </header>{/* end of header */}

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
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                      <Form.Label>Category</Form.Label>
                                      <Form.Control as="select">
                                        <option>Secondary school</option>
                                        <option>Secondary school 2</option>
                                        <option>Secondary school 3</option>
                                        <option>Secondary school 4</option>
                                        <option>Secondary school 5</option>
                                      </Form.Control>
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <Form.Group controlId="firstName">
                                      <Form.Label>First Name</Form.Label>
                                      <Form.Control type="text" />
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <Form.Group controlId="lastName">
                                      <Form.Label>Last Name</Form.Label>
                                      <Form.Control type="text" />
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <Form.Group controlId="userEmail">
                                      <Form.Label>Email Address</Form.Label>
                                      <Form.Control type="email" />
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <Form.Group controlId="userPhone">
                                      <Form.Label>Phone Number</Form.Label>
                                      <Form.Control type="text" />
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="12">
                                    <hr class="hrBorder" />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <Form.Group controlId="currentPassword">
                                      <Form.Label>Current password</Form.Label>
                                      <Form.Control type="password" />
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <Form.Group controlId="newPassword">
                                      <Form.Label>Create new password</Form.Label>
                                      <Form.Control type="password" />
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <Form.Group controlId="repeatNewPassword">
                                      <Form.Label>Repeat new password</Form.Label>
                                      <Form.Control type="password" />
                                    </Form.Group>{/* end of Form.Group */}
                                  </Col>{/* end of Col */}

                                  <Col sm="12">
                                    <Button variant="primary" type="submit">Save</Button>
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