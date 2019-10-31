import React ,{useState, useEffect}from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './assets/css/auth.css';
import SocialListCompoent from '../../components/authComponents/SocialListCompoent';
import {InputFrom, SelectFrom} from '../../components/FromComponents/InputComponent';
import {ButtonComponents} from '../../components/ButtonComponents/ButtonComponents';
import {API_URL} from '../../constants/config'
import axios from 'axios'

const Signup = () => {

  const [data, setData] = useState([])
  const [formData, setFromData] = useState({});


  const apiUrl = `${API_URL}/category`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
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

    if( formData.category_id == undefined   ||
        formData.first_name == undefined    ||
        formData.last_name == undefined     ||
        formData.email == undefined         ||
        formData.password == undefined      ||
        formData.repeatPassword == undefined
        ){
            console.log(`sweetealert: field data missing`);
        }
    else{

        if(String(formData.password) !== String(formData.repeatPassword)){

            console.log(`password miss matched`);

        }else{
            console.log(`post axios`);
            // axios.post(`${API_URL}/auth/register`);
        }
    }

}


    return (<>
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
                <SocialListCompoent/>

                <div className="formWrapper clearfix" id="formWrapper">
                  <Form>
                    <SelectFrom
                      category = {(data.data !== undefined) ? data.data : []}
                      callback = {categoryData}
                    />

                    <InputFrom
                      LableId="firstName"
                      TypeName="text"
                      LableTitle="First Name"
                      Name="first_name"
                      Value=""
                      Placeholder="Enter Your First Name"
                      callback = {fromFileData}
                    />

                    <InputFrom
                      LableId="lastName"
                      TypeName="text"
                      LableTitle="Last Name"
                      Name="last_name"
                      Value=""
                      Placeholder="Enter Your Last Name"
                      callback = {fromFileData}
                    />
                    <InputFrom
                      LableId="email"
                      TypeName="email"
                      LableTitle="Email"
                      Name="email"
                      Value=""
                      Placeholder="Enter Your Email"
                      callback = {fromFileData}
                    />

                    <InputFrom
                      LableId="password"
                      TypeName="password"
                      LableTitle="Password"
                      Name="password"
                      Value=""
                      Placeholder="Enter Your Password"
                      callback = {fromFileData}
                    />
                    <InputFrom
                      LableId="repeatPassword"
                      TypeName="password"
                      LableTitle="Repeat Password"
                      Name="repeatPassword"
                      Value=""
                      Placeholder="Enter Your Repeat Password"
                      callback = {fromFileData}
                    />

                    <Link className="linkText mb-3" to="/forgotpass">Forgot password?</Link>


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

export default Signup;
