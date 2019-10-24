import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import './assets/css/user.css';
import { InputFrom, SelectFrom } from '../../components/FromComponents/InputComponent';
import { ButtonComponents } from '../../components/ButtonComponents/ButtonComponents';
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
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
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
                  <li><Link to="/"><i className="fas fa-search"></i> Search</Link></li>
                  <li><Link to="/"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
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
                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-clipboard-list"></i> My orders</Link>
                    </li>{/* end of li */}
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-wallet"></i> Payment methods</Link>
                    </li>{/* end of li */}

                    <li className="nav-item active">
                      <Link className="nav-link" to="#"><i className="fas fa-cog"></i> Profile settings</Link>
                    </li>{/* end of li */}

                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="far fa-envelope"></i> Email subscription</Link>
                    </li>{/* end of li */}

                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-sign-out-alt"></i> Log out</Link>
                    </li>{/* end of li */}

                  </ul>{/* end of userNavBar */}
                </nav>{/* end of userNav */}
              </aside>{/* end of aside */}
            </Col>{/* end of Col */}

            <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">

                <section className="myOrderArea secGap clearfix" id="myOrderArea">

                  <Container fluid="{true}">
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
                                    <hr class="hrBorder" />
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