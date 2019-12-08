import React, {useState}  from 'react';

import { connect  } from 'react-redux';
import { login } from '../../redux/actions/authActions';

import isEmpty from 'lodash/isEmpty';

import {Container, Row, Col, Form, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom } from '../../components/FromComponents/InputComponent';


import './assets/css/auth.css';
import '../../assets/css/animate.css';



const Login = (props) => {

  const [state, setState] = useState(true);
  const [formData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const { auth } = props;

  const loginData = (data) => {
    Object.keys(data).map( key => {
      formData[key] = data[key];
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(formData)
    setState(true);
  }


    if(!isEmpty(auth.status)){
      if(auth.status.success && state){
        setState(false);
        props.history.goBack();
      }

      if(!auth.status.success && state){
        setState(false);
        setShowAlert(true);
        const clearAlert = setTimeout(() => {
          setShowAlert(false);
        }, 5000);

        return () =>  clearTimeout(clearAlert);
      }
    }


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

                    <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
                        <p>Provided Email & Password combination miss matched.</p>
                    </Alert>

                  <input type="submit" className="btn submitBtn mb-3 " onClick = { handleSubmit } value="LOGIN"/>

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

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch =>  ({
    login: (formData) => dispatch(login(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
