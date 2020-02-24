import React, {useState,useEffect}from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom, SelectFrom } from '../../components/FromComponents/InputComponent';
import { URL } from '../../constants/config'
import './assets/css/auth.css';
import PageLoader from "../../components/pageLoader/PageLoaderComponent";





const SignUp = (props) => {
  const [data, setData] = useState({ category_id: null, first_name: null, last_name: null, email: null, password: null, repeatPassword: null })
  const [alert, setAlert] = useState({ show: false, type: 'danger', message: '' });
  const categories = (props.categories) ? props.categories : [];
  const { auth , error } = props
  const status = auth.status
  if (status.success === true) {
     props.history.goBack()
  }


  useEffect(() => {
    if (error) {
      setAlert({ show: true, type:'danger', message: error.message })
    }
    if(!error) {
      setAlert({ show: false, type: 'unknown', message:''})
    }  
  },[error])

  const handleOnchange = (e) => {
    e.preventDefault()
    return setData({ ...data, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.category_id) {
      return setAlert({ show: true, type: 'danger', message: "Select A category" })
    }
    else if (!data.first_name || data.first_name === '') {
      return setAlert({ show: true, type: 'danger',  message: "First Name Required" })
    }
    else if (!data.last_name === null || undefined || '') {
      return setAlert({ show: true, type: 'danger', message: "Last name Required" })
    }
    else if (!data.email || data.email === '') {
      return setAlert({ show: true, type: 'danger', message: "Email Required" })
    }
    else if (!data.password || data.password === '') {
      return setAlert({ show: true, type: 'danger', message: "Password Required" })
    }
    else if (data.repeatPassword === '') {
      return setAlert({ show: true, type: 'danger', message: "Repeat Password Required"})
    }
    else if (data.password !== data.repeatPassword) {
      return setAlert({ show: true, type: 'danger', message: "Password not match" })
    }
    else if (!data.category_id || !data.first_name || !data.last_name || !data.email || !data.password || !data.repeatPassword) {
      return setAlert({ show: true, type: 'danger', message: "Fields can not be empty"})
    }
    else {
      delete data.repeatPassword;
      axios.post(URL._REGISTER, data)
        .then(res => {
          setAlert({ show: res.data.status, type: 'success', message: res.data.message })
          if (res.data.message) {
            setTimeout(() => {
              props.history.push("/login")
              setAlert({ show: false })
            }, 3000);
          }
        })
        .catch(error => {
          setAlert({ show: error.response.data.status, type: 'danger', message: error.response.data.message })
        })
    }
  }

    return (<>
        <PageLoader loading={false}/>
      <div className="allWrapper fullHeight">
        <main className="loginMainArea clearfix fullHeight bgImage signUpBodyBg pb-3" id="signUpBody">
          <Container fluid={true}>
            <Row>
              <Col sm={6}>
                <div className="logoWrapper mt-4 mb-4">
                  <h1 className="logoText"><Link to="/">LOGO</Link></h1>
                </div>
              </Col>
            </Row>
          <Row>
              <Col sm={6}>
                <SocialListComponent />
                <div className="formWrapper clearfix" id="formWrapper">
                  <Form action='post' onSubmit={handleSubmit}>
                    <SelectFrom LabelTitle="Category"
                      Name="category_id"
                      categories={categories}
                      Value={data.category_id}
                      handleOnchange={handleOnchange}
                    />

                    <InputFrom
                      LabelId="firstName"
                      TypeName="text"
                      LabelTitle="First Name"
                      Name="first_name"
                      Placeholder="Enter Your First Name"
                      Value={data.first_name}
                      handleOnchange={handleOnchange}
                    />

                    <InputFrom
                      LabelId="lastName"
                      TypeName="text"
                      LabelTitle="Last Name"
                      Name="last_name"
                      Placeholder="Enter Your Last Name"
                      Value={data.last_name}
                      handleOnchange={handleOnchange}
                    />
                    <InputFrom
                      LabelId="email"
                      TypeName="email"
                      LabelTitle="Email"
                      Name="email"
                      Placeholder="Enter Your Email"
                      Value={data.email}
                      handleOnchange={handleOnchange}
                    />

                    <InputFrom
                      LabelId="password"
                      TypeName="password"
                      LabelTitle="Password"
                      Name="password"
                      Placeholder="Enter Your Password"
                      Value={data.password}
                      handleOnchange={handleOnchange}
                    />
                    <InputFrom
                      LabelId="repeatPassword"
                      TypeName="password"
                      LabelTitle="Repeat Password"
                      Name="repeatPassword"
                      Placeholder="Enter Your Repeat Password"
                      Value={data.repeatPassword}
                      handleOnchange={handleOnchange}
                    />
                    <Link className="linkText mb-3" to="/forgot-password">Forgot password?</Link>
                      <Alert show={alert.show} variant={alert.type} onClose={() => setAlert({...alert, show:false})} dismissible>
                          <p>{alert.message}</p>
                      </Alert>
                    <Button type="submit" className="btn submitBtn mb-3 " > Sign Up</Button>
                    <p>I already have an account! &nbsp; <Link className="linkText mb-3" to="/login">Sign In</Link></p>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>);
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    categories: state.site.categories,
    error: state.auth.sign_up_error
})



export default withRouter(connect(mapStateToProps, null)(SignUp));
