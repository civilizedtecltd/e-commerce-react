import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './assets/css/auth.css';
import SocialListCompoent from '../../components/authComponents/SocialListCompoent';
import {InputFrom, SelectFrom} from '../../components/FromComponents/InputComponent';
import {ButtonComponents} from '../../components/ButtonComponents/ButtonComponents';


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
                <SocialListCompoent/>

                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <SelectFrom/>

                    <InputFrom
                      LableId="firstName"
                      TypeName="text"
                      LableTitle="First Name"
                      Name="firstName"
                      Value=""
                      Placeholder="Enter Your First Name"
                    />

                    <InputFrom
                      LableId="lastName"
                      TypeName="text"
                      LableTitle="Last Name"
                      Name="lastName"
                      Value=""
                      Placeholder="Enter Your Last Name"
                    />
                    <InputFrom
                      LableId="email"
                      TypeName="email"
                      LableTitle="Email"
                      Name="email"
                      Value=""
                      Placeholder="Enter Your Email"
                    />

                    <InputFrom
                      LableId="password"
                      TypeName="password"
                      LableTitle="Password"
                      Name="password"
                      Value=""
                      Placeholder="Enter Your Password"
                    />
                    <InputFrom
                      LableId="repeatPassword"
                      TypeName="password"
                      LableTitle="Repeat Password"
                      Name="repeatPassword"
                      Value=""
                      Placeholder="Enter Your Repeat Password"
                    />

                    <Link className="linkText mb-3" to="/forgotpass">Forgot password?</Link>

                    
                    <ButtonComponents 
                      Type="submit"
                      ClassName="btn submitBtn mb-3"
                      Name="SIGN UP"
                    />
                    <p>I already have an account! <Link className="linkText mb-3" to="/login">Sign In</Link></p>

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