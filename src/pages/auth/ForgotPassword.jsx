import React, { useState } from "react";
import "./assets/css/auth.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { URL } from '../../constants/config';
import {Button, Alert} from 'react-bootstrap'
import { InputFrom } from "../../components/FromComponents/InputComponent";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const ForgotPassword = () => {
  const [state, setState] = useState({ email: '', });
  const [alert, setAlert] = useState({show:false, message:''})

  const handleOnChange = (data) => setState({ ...state, ...data })
    const handleOnClick = (e) =>{
        e.preventDefault();
        axios.post(URL._RESET_PASSWORD, {email: state.email})
          .then(res => {
            setAlert({ show: true, message: res.data.message, success: res.data.success });
            setTimeout(() => setAlert({show:false,message:null,success:false}),2000);
            return res.data.success ? setTimeout(() => (window.location = "/verify-code"),2000) : false;
            })
          .catch(error => {
            console.log(error)
              setAlert({ show: true, message: "Sorry server error occurred" });
               return setTimeout(() =>
                 setAlert({show: false, message: "", success:false },3000)
               );
          })
    }

  return (
    <>
      <PageLoader loading={false} />
      <div className="AllWrapper fullHeight">
        <header className="header authHeader clearfix" id="header">
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
          </Container>
        </header>

        <main
          className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4"
          id="loginArea"
        >
          <Container fluid={true}>
            <Row>
              <Col sm={4}>
                <div className="loginBodyContent clearfix mb-4" id="loginBody">
                  <h2 className="headTitle mb-3">Forgot password?</h2>
                  <h5>
                    Lorem ipsum dolor sit ament, consecrator advising elite, sed
                    do elusion temporal incipient
                  </h5>
                </div>

                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <InputFrom
                      LabelId="email"
                      TypeName="email"
                      LabelTitle="Email"
                      Name="email"
                      Placeholder="Enter Your Email"
                      callback={handleOnChange}
                    />
                    { alert.show ? <Alert
                      show={alert.show}
                      variant={alert.success? 'success': 'danger'}
                      onClose={() => setState({ ...state, status: false })}
                      dismissible
                    >
                      <p>{alert.message}</p>
                    </Alert>:""}
                   
                    <Button
                      type="submit"
                      className="btn mt-2 mb-3 submitBtn"
                      onClick={handleOnClick}
                    >
                      SEND CODE
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  );
};

export default ForgotPassword;
