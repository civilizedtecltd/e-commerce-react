import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { URL } from "../../constants/config";
import { InputFrom } from '../../components/FromComponents/InputComponent';
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import './assets/css/auth.css';
const VerifyCode = (props) => {
  const [state, setState] = useState({ code: null });
  const [alert, setAlert] = useState({ show: false, message: "" });

  const handleOnchange = (e) => {
    e.preventDefault()
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(URL._VERIFICATION_CODE, state)
      .then(res => {
        setAlert({ show: true, type: "success", message: res.data.message });
        setTimeout(() => setAlert({ show: false, type: "unknown", message: '' }), 3000);
        return res.data.success ? setTimeout(() => props.history.push(`/change-password/${state.code}`), 2000) : false;
      })
      .catch(error => {
        setAlert({ show: true, type: 'danger', message: error.response.data.message })
        setTimeout(() => { setAlert({ show: false, type: 'unknown', message: '' }) }, 3000)
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
                      handleOnchange={handleOnchange}
                    />

                  
                      <Alert show={alert.show} variant={alert.type} onClose={() => setAlert({ show: false })} dismissible>
                        <p>{alert.message}</p>
                      </Alert>
                 

                    <Button type="submit" className="btn mt-2 mb-3 submitBtn" onClick={handleSubmit}>
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

export default withRouter(VerifyCode);
