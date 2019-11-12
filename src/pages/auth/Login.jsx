import React, {useState}  from 'react';
import SweetAlert from 'sweetalert2-react';
import axios from 'axios';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom } from '../../components/FromComponents/InputComponent';
import { URL } from '../../constants/config'

import './assets/css/auth.css';

const Login = () => {

  const [formData] = useState({});
  const [state, setState] = useState({
        sweetAlert : {
          show: false,
          title: "",
          text: "",
          type: "",
          showCancelButton: false,
          confirmButtonText: "",
      }
  });

  const loginData = (data) => {
    Object.keys(data).map( key => {
      formData[key] = data[key];
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(
        URL._LOGIN,
        formData
    ).then( res => {
      if(res.status === 200){
          const authData = res.data.data;
          localStorage.setItem('auth-data', JSON.stringify(authData));
      }
    }).catch( error => {
      console.log(error);
      setState({
        sweetAlert: {
          show: true,
          title: "OPPS!",
          text: "Could not login. Please check Credentials.",
          type: 'error',
          confirmButtonText: "Try Again!"
        }
      });
    });
  }

  return (<>
    <div className="AllWrapper fullHeight">
      <main className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4" id="loginBody">
          <SweetAlert
              show = {state.sweetAlert.show}
              title = {state.sweetAlert.title}
              text = {state.sweetAlert.text}
              type = {state.sweetAlert.type}
              showCancelButton = {state.sweetAlert.showCancelButton}
              confirmButtonText = {state.sweetAlert.confirmButtonText}
              onConfirm = {() => { console.log(`confirmed`) }}
          />
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
                   Name="email"
                   Value=""
                   Placeholder="Enter Your Email"
                   callback = {loginData}
                  />

                  <InputFrom
                   LabelId="password"
                   TypeName="password"
                   LabelTitle="Password"
                   Name="password"
                   Value=""
                   Placeholder="Enter Your Password"
                   callback = {loginData}
                  />{/* end of Form.Group */}

                  <Link className="linkText mb-3" to="/forgot-password">Forgot password?</Link>

                  <Button type="submit" className="btn submitBtn mb-3 " onClick={handleSubmit} >LOGIN</Button>

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
