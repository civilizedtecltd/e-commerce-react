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
  const [state, setState] = useState({verifyCode: code, password: "", confirmPassword: ""});
  const [alert, setAlert] = useState({ show: false, type:'unknown', message: "" });
  
  const handleOnchange = (e) => {
    e.preventDefault()
    setState({...state, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    axios.post(URL._RECOVER_PASSWORD, state)
      .then(res => {
        setAlert({ show: true, message: res.data.message, type: 'success' });
        setTimeout(() => {
          setAlert({ show: true, message: res.data.message, type: 'unknown'})
          return res.data.success ? props.history.push("/login") : false;
        },3000)
           
      }).catch(error => {
        setAlert({ show: true, type: 'danger', message: error.response.data.message })
        return setTimeout(setAlert({ show: true, message: '', type: 'Unknown' }), 3000);
      })
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
                  <Form onSubmit={handleSubmit}>
                    <InputFrom
                      LabelId="createPass"
                      TypeName="password"
                      LabelTitle="Create Password"
                      Name="password"
                      Placeholder="Create Password"
                      handleOnchange={handleOnchange}
                    />

                    <InputFrom
                      LabelId="confirmPass"
                      TypeName="password"
                      LabelTitle="Confirm password"
                      Name="confirmPassword"
                      Placeholder="Confirm password"
                      handleOnchange={handleOnchange}
                    />

                    {alert.show ? (<Alert show={alert.show} variant={alert.type} onClose={() => setAlert({ show: false })} dismissible >
                        <p>{alert.message}</p>
                      </Alert>
                    ) : (
                      ""
                    )}
                    <Button type="submit" className="btn mt-2 mb-3 submitBtn"> Save </Button>
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
