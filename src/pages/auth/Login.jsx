import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useLastLocation } from 'react-router-last-location';
import { connect  } from 'react-redux';
import { login, emptyStatus } from '../../redux/actions/authActions';
import { showFavItems } from '../../redux/actions/favoriteActions';
import {Container, Row, Col, Form, Alert,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom } from '../../components/FromComponents/InputComponent';
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import './assets/css/auth.css';
import '../../assets/css/animate.css';


const Login = (props) => {
  
  const [alert, setAlert] = useState({ show: false, type:'', message: ''});
  const [data, setData] = useState({ email: null, password: null })
  const previewsLocation = useLastLocation();
  const lastPath = previewsLocation ? previewsLocation.pathname : false;
  const { auth, error, removeError, login_success, history, login_status } = props
  const lastPathMatched = lastPath.match("/change-password/");
  useEffect(() => {
    if (login_success) {
      if (lastPath === '/signup' || lastPathMatched === '/change-password') {
        setAlert({ show: true, type: 'success', message: 'You are logged in' })
        setTimeout(() => {
          history.push('/profile-settings')
        }, 1000);
      }
      else {
        history.goBack()
      }
    }
    else if (login_status) {
      
      if (lastPath === '/signup' || lastPathMatched === '/change-password') {
        setTimeout(() => {
          history.push('/profile-settings')
        }, 1000);
      }
      else {
        history.goBack()
      }
    }
    
    if (error) {
      setAlert({ show: true, type: 'danger', message: error.message })
      setTimeout(() => {
        setAlert({ show: false, type: 'unknown', message: '' })
        removeError()
      }, 2000);
    }
  }, [auth.status.error, error, removeError, login_success, lastPath, history, login_status])


  const handleOnchange = (e) => {
    e.preventDefault()
    return setData({ ...data, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data.email && !data.password) {
      return setAlert({ show: true, type: 'danger', message: "Password and Email required"})
    }
    if (!data.email || data.email === '')
      return setAlert({ show: true, type: 'danger', message: "Mail should not be empty" })
    else if (!data.password || data.password === '')
       return setAlert({show: true, type: 'danger', message:"Password should not be empty"})
    else {
       props.login(data)
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
                <SocialListComponent/>

                <div className="formWrapper clearfix" id="formWrapper">
                  <Form onSubmit={handleSubmit}>
                    <InputFrom
                      LabelId="email"
                      TypeName="email"
                      LabelTitle="Email"
                      Name="email"
                      Placeholder="Enter Your Email"
                      handleOnchange={handleOnchange}
                    />

                    <InputFrom
                      LabelId="password"
                      TypeName="password"
                      LabelTitle="Password"
                      Name="password"
                      Placeholder="Enter Your Password"
                      handleOnchange={handleOnchange}
                    />

                    <Link className="linkText mb-3" to="/forgot-password">
                      Forgot password?
                    </Link>
                    <Alert show={alert.show} variant={alert.type} onClose={() => setAlert({ ...alert, show: false })} dismissible>
                      <p>{alert.message}</p>
                    </Alert>

                    <Button type="submit" className="btn submitBtn mb-3 " >Sign In</Button>
                    <p>
                      Don’t have an account yet? &nbsp; <Link className="linkText" to="/signup">Sign up</Link>
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
  error: state.auth.status.error ? (state.auth.status.error.data) : false,
  login_success: state.auth.jwt ? state.auth.jwt.token : false,
  login_status: state.auth.status ? state.auth.status.success : false
});

const mapDispatchToProps = dispatch =>  ({
    login: (data) => dispatch(login(data)),
    showAllFavItem: () => dispatch(showFavItems()),
    removeError: () => dispatch(emptyStatus())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Login));
