import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./assets/css/auth.css";
import { InputFrom } from "../../components/FromComponents/InputComponent";
import { ButtonComponents } from "../../components/ButtonComponents/ButtonComponents";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const ChangePassword = () => {
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
                {/* end of logoWrapper */}
              </Col>
              {/* end of Col */}
            </Row>
            {/* end of Container */}
          </Container>
          {/* end of Container */}
        </header>
        {/* end of allWrapper  */}

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
                    do elusion temporal incipient{" "}
                  </h5>
                </div>
                {/* end of loginBodyContent */}

                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <InputFrom
                      LabelId="createPass"
                      TypeName="password"
                      LabelTitle="Create Password"
                      Name="password"
                      Value=""
                      Placeholder="Create Password"
                    />

                    <InputFrom
                      LabelId="confirmPass"
                      TypeName="password"
                      LabelTitle="Confirm password"
                      Name="password"
                      Value=""
                      Placeholder="Confirm password"
                    />

                    <ButtonComponents
                      Type="submit"
                      ClassName="btn mt-2 mb-3 submitBtn"
                      Name="Save"
                    />
                  </Form>
                  {/* end of Form */}
                </div>
                {/* end of formWrapper */}
              </Col>
              {/* end of Col */}
            </Row>
            {/* end of Row  */}
          </Container>
          {/* end of Container  */}
        </main>
        {/* end of loginMainArea  */}
      </div>
      {/* end of allWrapper  */}
    </>
  );
};

export default ChangePassword;
