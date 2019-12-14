import React from "react";
import "./assets/css/auth.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputFrom } from "../../components/FromComponents/InputComponent";
import { ButtonComponents } from "../../components/ButtonComponents/ButtonComponents";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const ForgotPassword = () => {
  return (
    <>
      <PageLoader loading={false}/>
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

        <main className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4" id="loginArea">
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
                      Name="name"
                      Value=""
                      Placeholder="Enter Your Email"
                    />
                    <ButtonComponents
                      Type="submit"
                      ClassName="btn mt-2 mb-3 submitBtn"
                      Name="Send Code"
                    />
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
