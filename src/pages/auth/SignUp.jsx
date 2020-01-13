import React, {useState}from 'react';
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

  const [formData] = useState({});
  const [alert, setAlert] = useState({
      show: false,
      message: ''
  });

  const categories = (props.categories) ? props.categories : [];

    const goToLoginPage = () => {
        const { history } = props;
        history.push('/login');
    }

    const categoryData = (data) => {
        if(data.category_id !== undefined || data.category_id !== 'Select Category')
            formData.category_id = Number(data.category_id);
    }

    const fromFileData = (data) => {
    /*eslint-disable-next-line*/
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

            setAlert({
                ...alert,
                show: true,
                message: 'Field Data missing'
            });

            const clearAlert = setTimeout(() => {
                setAlert({...alert, show: false});
            }, 5000);

            return () =>  clearTimeout(clearAlert);
        }else{
            if(String(formData.password) !== String(formData.repeatPassword)){
                setAlert({
                    ...alert,
                    show: true,
                    message: 'Password did not match.'
                });

                const clearAlert = setTimeout(() => {
                    setAlert({...alert, show: false});
                }, 5000);

                return () =>  clearTimeout(clearAlert);
            }else {
                axios.post(
                    URL._REGISTER,
                    formData
                ).then( response => {
                    if(response.status === 201)
                        goToLoginPage();

                }).catch( error => {
                    console.log(error);
                });
            }
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
                </div>{/* end of logoWrapper */}
              </Col>{/* end of col */}
            </Row>{/* end of row */}

            <Row>
              <Col sm={6}>
                <SocialListComponent/>
                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <SelectFrom LabelTitle="Category"
                      categories = {categories}
                      callback = {categoryData}
                    />

                    <InputFrom
                      LabelId="firstName"
                      TypeName="text"
                      LabelTitle="First Name"
                      Name="first_name"
                      Placeholder="Enter Your First Name"
                      callback = {fromFileData}
                    />

                    <InputFrom
                      LabelId="lastName"
                      TypeName="text"
                      LabelTitle="Last Name"
                      Name="last_name"
                      Placeholder="Enter Your Last Name"
                      callback = {fromFileData}
                    />
                    <InputFrom
                      LabelId="email"
                      TypeName="email"
                      LabelTitle="Email"
                      Name="email"
                      Placeholder="Enter Your Email"
                      callback = {fromFileData}
                    />

                    <InputFrom
                      LabelId="password"
                      TypeName="password"
                      LabelTitle="Password"
                      Name="password"
                      Placeholder="Enter Your Password"
                      callback = {fromFileData}
                    />
                    <InputFrom
                      LabelId="repeatPassword"
                      TypeName="password"
                      LabelTitle="Repeat Password"
                      Name="repeatPassword"
                      Placeholder="Enter Your Repeat Password"
                      callback = {fromFileData}
                    />

                    <Link className="linkText mb-3" to="/forgot-password">Forgot password?</Link>

                      <Alert show={alert.show} variant="danger" onClose={() => setAlert({...alert, show:false})} dismissible>
                          <p>{alert.message}</p>
                      </Alert>
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

const mapStateToProps = (state) => ({
    categories: state.site.categories
})

export default withRouter(connect(mapStateToProps, null)(SignUp));
