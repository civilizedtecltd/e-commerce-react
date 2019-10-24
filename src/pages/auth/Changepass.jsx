import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './assets/css/auth.css';
import { InputFrom } from '../../components/FromComponents/InputComponent';
import { ButtonComponents } from '../../components/ButtonComponents/ButtonComponents';

const Changepass = () => {
  return (<>

    <div className="allWrapper fullHeight">
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
                <h2 class="headTitle mb-3">Enter a new password</h2>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h5>
              </div>{/* end of loginBodyContent */}

              <div class="formWrapper clearfix" id="formWrapper">
                <Form>

                  <InputFrom 
                   LableId="createPass"
                   TypeName="password"
                   LableTitle="Create Password"
                   Name="password"
                   Value=""
                   Placeholder="Create Password"
                  />

                  <InputFrom 
                   LableId="confirmPass"
                   TypeName="password"
                   LableTitle="Confirm password"
                   Name="password"
                   Value=""
                   Placeholder="Confirm password"
                  />
                  
                  <ButtonComponents
                    Type="submit"
                    ClassName="btn mt-2 mb-3 submitBtn"
                    Name="Save"
                  />
                
                </Form>{/* end of Form */}
              </div>{/* end of formWrapper */}

            </Col>{/* end of Col */}
            
          </Row>{/* end of Row  */}
        </Container>{/* end of Container  */}
      </main>{/* end of loginMainArea  */}

    </div>{/* end of allWrapper  */}
    
  </>);
}

export default Changepass;