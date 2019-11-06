import React, {useState, useEffect} from 'react';
import SweetAlert from 'sweetalert2-react';
import axios from 'axios';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom, SelectFrom } from '../../components/FromComponents/InputComponent';
import { URL } from '../../constants/config'

import './assets/css/auth.css';

const SignUp = () => {

  const [data, setData] = useState([])
  const [formData] = useState({});
  const [state, setState] = useState({
        sweetAlert : {
            show: false,
            title: "",
            text: "",
            type: "",
            showCancelButton: false,
            confirmButtonText: "",
        }
  });

  const [auth, setAuth] = useState({
        status: false,
        redirect: ''
  });

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(URL._CATEGORY);
      setData(result.data);
    };
    fetchData();

  }, []);


const categoryData = (data) => {
    if(data.category_id !== undefined || data.category_id !== 'Select Category')
        formData.category_id = Number(data.category_id);
}

const fromFileData = (data) => {
    Object.keys(data).map( key => {
        formData[key] = data[key];
    });
}

const handleSubmit = (event) => {
   event.preventDefault();

    if( formData.category_id === undefined   ||
        formData.first_name === undefined    ||
        formData.last_name === undefined     ||
        formData.email === undefined         ||
        formData.password === undefined      ||
        formData.repeatPassword === undefined
        ){
            setState({
                sweetAlert: {
                    show: true,
                    title: "OPPS!",
                    text: "Field Data missing",
                    type: 'warning',
                    confirmButtonText: "Try Again!"
                }
            });
        }
    else{

        if(String(formData.password) !== String(formData.repeatPassword)){

            setState({
                sweetAlert: {
                    show: true,
                    title: "OPPS!",
                    text: "Password did not match.",
                    type: 'error',
                    confirmButtonText: "Try Again!"
                }
            });

        }else{
            axios.post(
                        URL._REGISTER,
                        formData
                    ).then( response => {
                        console.log(response);
                        setAuth({
                            status: true,
                            redirect: '/login'
                        });
                    }).catch( error => {
                        console.log(error);
                    });
        }
    }
}


    return (<>
      ({auth.status === true}) ? <Redirect to={auth.redirect} /> : <Redirect to="/signup" />
      <div className="allWrapper fullHeight">
        <main className="loginMainArea clearfix fullHeight bgImage signUpBodyBg pb-3" id="signUpBody">
          <Container fluid={true}>
            <Row>
              <Col sm={6}>
                <div className="logoWrapper mt-4 mb-4">
                  <h1 className="logoText"><Link to="/">LOGO</Link></h1>
                </div>{/* end of logoWrapper */}
              </Col>{/* end of col */}
            </Row>{/* end of row */}

            <Row>
              <Col sm={6}>
                <SocialListComponent/>
                <div className="formWrapper clearfix" id="formWrapper">
                    <SweetAlert
                            show = {state.sweetAlert.show}
                            title = {state.sweetAlert.title}
                            text = {state.sweetAlert.text}
                            type = {state.sweetAlert.type}
                            showCancelButton = {state.sweetAlert.showCancelButton}
                            confirmButtonText = {state.sweetAlert.confirmButtonText}
                            onConfirm = {() => { console.log(`confirmed`) }}
                    />
                  <Form>
                    <SelectFrom LabelTitle="Category"
                      category = {(data.data !== undefined) ? data.data : []}
                      callback = {categoryData}
                    />

                    <InputFrom
                      LabelId="firstName"
                      TypeName="text"
                      LabelTitle="First Name"
                      Name="first_name"
                      Value=""
                      Placeholder="Enter Your First Name"
                      callback = {fromFileData}
                    />

                    <InputFrom
                      LabelId="lastName"
                      TypeName="text"
                      LabelTitle="Last Name"
                      Name="last_name"
                      Value=""
                      Placeholder="Enter Your Last Name"
                      callback = {fromFileData}
                    />
                    <InputFrom
                      LabelId="email"
                      TypeName="email"
                      LabelTitle="Email"
                      Name="email"
                      Value=""
                      Placeholder="Enter Your Email"
                      callback = {fromFileData}
                    />

                    <InputFrom
                      LabelId="password"
                      TypeName="password"
                      LabelTitle="Password"
                      Name="password"
                      Value=""
                      Placeholder="Enter Your Password"
                      callback = {fromFileData}
                    />
                    <InputFrom
                      LabelId="repeatPassword"
                      TypeName="password"
                      LabelTitle="Repeat Password"
                      Name="repeatPassword"
                      Value=""
                      Placeholder="Enter Your Repeat Password"
                      callback = {fromFileData}
                    />

                    <Link className="linkText mb-3" to="/forgotPassword">Forgot password?</Link>


                    <Button type="submit" className="btn submitBtn mb-3 " onClick={handleSubmit} >Sign Up</Button>
                    <p>I already have an account! <Link className="linkText mb-3" to="/login">Sign In</Link></p>

                  </Form>{/* end of form */}
                </div>{/* end of formWrapper */}
              </Col>{/* end of Col */}
            </Row>{/* end of row */}
          </Container>{/* end of Container */}
        </main>{/* end of loginMainArea */}
      </div>{/* end of allWrapper */}

    </>);
}

export default SignUp;
