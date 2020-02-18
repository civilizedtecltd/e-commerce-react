import React, {useState}  from 'react';
import { useLastLocation } from 'react-router-last-location';
import { connect  } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { showFavItems } from '../../redux/actions/favoriteActions';
import isEmpty from 'lodash/isEmpty';
import {Container, Row, Col, Form, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom } from '../../components/FromComponents/InputComponent';
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import './assets/css/auth.css';
import '../../assets/css/animate.css';


const Login = (props) => {

  const [state, setState] = useState(true);
  const [formData] = useState({ email: '', password: '' });
  const [alert, setAlert] = useState({ status: false, message: '' });
  
  const lastLocation = useLastLocation();
  const { auth } = props;
  

  
  const loginData = (data) => {
    Object.keys(data).map(key => formData[key] = data[key])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email === '') { 
      setAlert({status: true, message: "Email should not be empty!"});
      return setTimeout(() => setAlert({status: false}), 3000);
    }
    if (formData.password === '') {
      setAlert({ status: true, message: "Password should not be empty" });
      return setTimeout(() => setAlert({status:false }), 3000);
    }
    else {
      props.login(formData);
      setState(true);
      if (props.error) {
        setAlert({ status: true, message: props.error ? props.error : '' });
        return setTimeout(() => setAlert({ status: false }), 3000);
      }
      else {
        setAlert({ status: false});
      }
      
    }
  }
    if(!isEmpty(auth.status)){
      if(auth.status.success && state){
        setState(false);
        props.showAllFavItem();
    
        const lastPath = (lastLocation) ? lastLocation.pathname : "/"; 
        const lastPathMatched = lastPath.match("/change-password/");        

        if (lastPath === "/signup" || (lastPathMatched && lastPathMatched[0] === "/change-password/")) {          
          window.location = "/";
        }else{
            props.history.goBack();
        }
      }
      if(!auth.status.success && state){
         setState(false);
      }
    }


  return (
    <>
      <PageLoader loading={false} />
      <div className="AllWrapper fullHeight">
        <main
          className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4"
          id="loginBody"
        >
          <Container fluid={true}>
            <Row>
              <Col sm={6}>
                <div className="logoWrapper mt-4 mb-4">
                  <h1 className="logoText">
                    <Link to="/">LOGO</Link>
                  </h1>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <SocialListComponent />

                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <InputFrom
                      LabelId="email"
                      TypeName="email"
                      LabelTitle="Email"
                      Name="email"
                      Placeholder="Enter Your Email"
                      callback={loginData}
                    />

                    <InputFrom
                      LabelId="password"
                      TypeName="password"
                      LabelTitle="Password"
                      Name="password"
                      Placeholder="Enter Your Password"
                      callback={loginData}
                    />

                    <Link className="linkText mb-3" to="/forgot-password">
                      Forgot password?
                    </Link>
                    {alert.status ? (
                      <Alert
                        show={alert.status}
                        variant={'danger'}
                        onClose={() => setAlert({ status:false })}
                        dismissible
                      >
                        <p>{alert.message}</p>
                      </Alert>
                    ) : (
                      ""
                    )}

                    <input
                      type="submit"
                      className="btn submitBtn mb-3 "
                      onClick={handleSubmit}
                      value="LOGIN"
                    />
                    <p>
                      Don’t have an account yet?
                      <Link className="linkText" to="/signup">
                        Sign up
                      </Link>
                    </p>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: (state.auth.status.error !== undefined) ? (state.auth.status.error.data.message) : ""
});

const mapDispatchToProps = dispatch =>  ({
    login: (formData) => dispatch(login(formData)),
    showAllFavItem: () => dispatch(showFavItems()),
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
