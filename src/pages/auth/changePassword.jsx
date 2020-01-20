import React, { useState } from "react";
import axios from 'axios';
import { Link, useParams, withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { URL } from "../../constants/config";
import { InputFrom } from "../../components/FromComponents/InputComponent";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import "./assets/css/auth.css";

const ChangePassword = (props) => {
  const { code } = useParams()
  const [state, setState] = useState({
    verifyCode: code,
    password: "",
    confirmPassword: ""
  });
  const [alert, setAlert] = useState({ show: false, message: "" });
  
  const handleChange = (data) => setState({ ...state, ...data })
  const handleSubmit = (e) => {
    e.preventDefault()
     const clearAlert=setTimeout(()=>setAlert({
      show: false,
      message: '',
      success: false
    }),3000);
    axios
      .post(URL._RECOVER_PASSWORD, {
        password: state.password,
        confirmPassword: state.confirmPassword,
        verifyCode: code
      })
      .then(res => {
        setTimeout(
          setAlert({
            show: true,
            message: res.data.message,
            success: res.data.success
          }),
          3000
        );
        return res.data.success ? props.history.push("/login") : false;
      })
      .catch(error =>
        setTimeout(setAlert({
          show: true,
          message: "Server error",
          success: false
        })
      ),3000);
    
      return () => clearTimeout(clearAlert);
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
                  <h2 className="headTitle mb-3">Enter a new password</h2>
                  <h5>
                    Lorem ipsum dolor sit ament, consecrator advising elite, sed
                    do elusion temporal incipient
                  </h5>
                </div>
                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <InputFrom
                      LabelId="createPass"
                      TypeName="password"
                      LabelTitle="Create Password"
                      Name="password"
                      Placeholder="Create Password"
                      callback={handleChange}
                    />

                    <InputFrom
                      LabelId="confirmPass"
                      TypeName="password"
                      LabelTitle="Confirm password"
                      Name="confirmPassword"
                      Placeholder="Confirm password"
                      callback={handleChange}
                    />

                    {alert.show ? (
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
                      Save
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

export default withRouter(ChangePassword);
