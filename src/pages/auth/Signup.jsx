import React ,{useState,useEffect}from 'react';
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
  const [formData, setFromData] = useState([]);


  const apiUrl = `${API_URL}/api/category`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      console.log(`Data from backend: ${result.data}`)
      setData(result.data);
    };

    fetchData();

  }, []);

const fromFileData = (data) => {
   console.log(data)
}

const handleSubmit = () =>{
   fromFileData()
}



   console.log(data)
   
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
                      category={(data.data !== undefined) ? data.data : []}
                    />

                    <InputFrom
                      LableId="firstName"
                      TypeName="text"
                      LableTitle="First Name"
                      Name="firstName"
                      Value=""
                      Placeholder="Enter Your First Name"
                      callback = {fromFileData}
                    />

                    <InputFrom
                      LableId="lastName"
                      TypeName="text"
                      LableTitle="Last Name"
                      Name="lastName"
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

                    
                    <Button type="button" className="btn submitBtn mb-3 " onClick={handleSubmit} ></Button>
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