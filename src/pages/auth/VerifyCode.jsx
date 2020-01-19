import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from "../../constants/config";
import { InputFrom } from '../../components/FromComponents/InputComponent';
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import './assets/css/auth.css';
const VerifyCode = () => {
  const [state, setState] = useState({ code: null });
  const [alert, setAlert] = useState({ show: false, message: "" });

  const handleChange = data => {
    setState({ ...state, ...data })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const clearAlert = setTimeout(() =>
      setAlert({
        show: false,
        message: "",
        success: false
      }), 3000);

    axios.post(URL._VERIFICATION_CODE, { code: state.code})
      .then(res => {
        setAlert({
          show: true,
          message: res.data.message,
          success: res.data.success
        });
        if (res.data.success === true) return window.location = `/change-password/${state.code}`;
        return () => clearTimeout(clearAlert);
      })
      .catch(error => {
        console.log(error.message)
        setAlert({
          show: true,
          message: 'Server error occurred',
          success: false
        });
        return () => clearTimeout(clearAlert);
      });
    
    
    
  }
  return (
    <>
      <PageLoader loading={false} />
      <div className="allWrapper fullHeight">
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
          className="loginMainArea clearfix fullHeight bgImage loginBodyBg"
          id="changepassBody"
        >
          <Container fluid={true}>
            <Row>
              <Col sm={4}>
                <div className="loginBodyContent clearfix mb-4" id="loginBody">
                  <h2 className="headTitle mb-3">Verify code</h2>
                  <h5>
                    Lorem ipsum dolor sit ament, consecrator advising elite, sed
                    do elusion temporal incipient
                  </h5>
                </div>
                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <InputFrom
                      LabelId="codeVerify"
                      TypeName="text"
                      LabelTitle="Verify Code"
                      Name="code"
                      Placeholder="Verify Code"
                      callback={handleChange}
                    />

                    { alert.show ? (
                      <Alert
                        show={alert.show}
                        variant={alert.success ? "success" : "danger"}
                        onClose={() => setAlert({ show: false })}
                        dismissible
                      >
                        <p>{alert.message}</p>
                      </Alert>
                    ) : (
                      ""
                    )}

                    <Button
                      type="submit"
                      className="btn mt-2 mb-3 submitBtn"
                      onClick={handleSubmit}
                    >
                      Verify
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
}

export default VerifyCode;
