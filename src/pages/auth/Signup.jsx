import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './assets/css/auth.css';
import SocialListComponent from '../../components/authComponents/SocialListCompoent';

const Signup = () => {
    return (<>
      <div className="allWrapper fullHeight">
        <main className="loginMainArea clearfix fullHeight bgImage signUpBodyBg pb-3" id="signUpBody">
          <Container fluid={true}>
            <Row>
              <Col sm={6}>
                <div className="logoWrapper mt-4 mb-4">
                  <h1 className="logoText"><Link to="/">LOGO</Link></h1>
                </div>{/* end of logoWrapper */}
              </Col>{/* end of col */}
            </Row>{/* end of row */}

            <Row>
              <Col sm={6}>
                <SocialListComponent/>

                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <Form.Group>
                      <Form.Label>Select the category</Form.Label>
                      <Form.Control as="select">
                        <option>Secondary school</option>
                        <option>Secondary school 2</option>
                        <option>Secondary school 3</option>
                        <option>Secondary school 4</option>
                        <option>Secondary school 5</option>
                      </Form.Control> {/* end of Form.Control */}
                    </Form.Group> {/* end of Form.Group */}

                    <Form.Group>
                      <Form.Label htmlFor="firstName">First Name</Form.Label>
                      <Form.Control type="text" id="firstName" />
                    </Form.Group>{/* end of Form.Group */}

                    <Form.Group>
                      <Form.Label htmlFor="lastName">Last Name</Form.Label>
                      <Form.Control type="text" id="lastName" />
                    </Form.Group>{/* end of Form.Group */}
    
                    <Form.Group>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control type="email" id="email" />
                    </Form.Group>{/* end of Form.Group */}
    
                    <Form.Group>
                      <Form.Label htmlFor="password">Password</Form.Label>
                      <Form.Control type="password" id="password" />
                    </Form.Group>{/* end of Form.Group */}
    
                    <Form.Group>
                      <Form.Label htmlFor="repeatPassword">Repeat password</Form.Label>
                      <Form.Control type="password" id="repeatPassword" />
                    </Form.Group>{/* end of Form.Group */}

                    <Link className="linkText mb-3" to="/">Forgot password?</Link>
                    <Button type="submit" className="btn submitBtn mb-3">SIGN UP</Button>
                    <p>I already have an account! <Link className="linkText mb-3" to="/">Sign In</Link></p>
                  </Form>{/* end of form */}
                </div>{/* end of formWrapper */}
              </Col>{/* end of Col */}
            </Row>{/* end of row */}
          </Container>{/* end of Container */}
        </main>{/* end of loginMainArea */}
      </div>{/* end of allWrapper */}

    </>);
}

export default Signup;