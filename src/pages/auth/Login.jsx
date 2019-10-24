import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './assets/css/auth.css';
import SocialListCompoent from '../../components/authComponents/SocialListCompoent';

const Login = () => {
  return (<>
    <div className="AllWrapper fullHeight">
      <main className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4" id="loginBody">
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
              <SocialListCompoent/>
              <div className="formWrapper clearfix" id="formWrapper">
                <Form>
                  <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" id="email" />
                  </Form.Group>{/* end of Form.Group */}
  
                  <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type="password" id="password" />
                  </Form.Group>{/* end of Form.Group */}

                  <Link className="linkText mb-3" to="/">Forgot password?</Link>
                  <Button type="submit" className="btn submitBtn mb-3">LOGIN</Button>
                  <p>Don’t have an account yet? <Link className="linkText" to="#">Sign up</Link></p>
                  
  
                </Form>{/* end of form */}
              </div>{/* end of col */}
            </Col>{/* end of col */}
          </Row>{/* end of Row */}

        </Container>{/* end of container */}
      </main>{/* end of loginMainArea */}
    </div>{/* end of loginMainArea */}
  </>
  );
}

export default Login;