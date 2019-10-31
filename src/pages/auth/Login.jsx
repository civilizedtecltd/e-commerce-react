import React from 'react';
import { Container, Row, Col, Form,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './assets/css/auth.css';
import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom } from '../../components/FromComponents/InputComponent';
import { ButtonComponents } from '../../components/ButtonComponents/ButtonComponents';

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
              <SocialListComponent/>
              <div className="formWrapper clearfix" id="formWrapper">
                <Form>
                  <InputFrom 
                   LabelId="email"
                   TypeName="email"
                   LabelTitle="Email"
                   Name="name"
                   Value=""
                   Placeholder="Enter Your Email"
                  />
  
                  <InputFrom 
                   LabelId="password"
                   TypeName="password"
                   LabelTitle="Password"
                   Name="password"
                   Value=""
                   Placeholder="Enter Your Password"
                  />{/* end of Form.Group */}

                  <Link className="linkText mb-3" to="/forgotPassword">Forgot password?</Link>
                  <ButtonComponents
                    Type="submit"
                    ClassName="btn submitBtn mb-3"
                    Name="LOGIN"
                  />
                  <p>Don’t have an account yet? <Link className="linkText" to="/signup">Sign up</Link></p>
                  
  
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