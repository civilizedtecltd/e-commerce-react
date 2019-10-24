import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './assets/css/auth.css';

const VerifyCode = () => {
  return (<>
    
    <div class="allWrapper fullHeight">
      <header className="header authHeader clearfix" id="header">
        <Container fluid={true}>
          <Row>
            <Col sm={6}>
              <div class="logoWrapper mt-4 mb-4">
                <h1 class="logoText"><Link to="/">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}
            </Col>{/* end of Col */}
          </Row>{/* end of Container */}
        </Container>{/* end of Container */}
      </header>{/* end of allWrapper  */}

      <main class="loginMainArea clearfix fullHeight bgImage loginBodyBg" id="changepassBody">
      <Container fluid={true}>
          <Row>
            <Col sm={4}>
              <div class="loginBodyContent clearfix mb-4" id="loginBody">
                <h2 class="headTitle mb-3">Verify code</h2>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h5>
              </div>{/* end of loginBodyContent */}

              <div class="formWrapper clearfix" id="formWrapper">
                <Form>
                  <Form.Group>
                    <Form.Label htmlFor="codeVerify">Code</Form.Label>
                    <Form.Control type="codeVerify" id="codeVerify" />
                  </Form.Group>{/* end of Form.Group */}
  
                  <Button type="submit" class="btn mt-2 mb-3 submitBtn">Verify</Button>
                
                </Form>{/* end of Form */}
              </div>{/* end of formWrapper */}

            </Col>{/* end of Col */}
          </Row>{/* end of Row  */}
        </Container>{/* end of Container  */}
      </main>{/* end of loginMainArea  */}
    </div>{/* end of allWrapper */}
  </>);
}

export default VerifyCode;
