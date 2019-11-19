import React, {useState}  from 'react';
import axios from 'axios';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

import SocialListComponent from '../../components/authComponents/SocialListComponent';
import { InputFrom } from '../../components/FromComponents/InputComponent';
import { URL } from '../../constants/config'

import './assets/css/auth.css';
import '../../assets/css/animate.css';

const mySwal = withReactContent(Swal);

const Login = (props) => {

  const [formData] = useState({});
  const [state, setState] = useState({});

  const loginData = (data) => {
    Object.keys(data).map( key => {
      formData[key] = data[key];
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(
        URL._LOGIN,
        formData
    ).then( res => {
      if(res.status === 200){
          const authData = res.data.data;
          localStorage.setItem('authData', JSON.stringify(authData));
      }
    }).catch( error => {
      console.log(error);
      mySwal.fire({
          icon: 'error',
          title: 'Oops..',
          text: 'Provide valid username and password.',
          footer: 'Copyright@2019',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Try Again',
          showClass: {
            popup: 'animated fadeInDown fast'
          },
          hideClass: {
            popup: 'animated fadeOutUp fast'
          }
      }).then(() => {
            console.log('ok clicked')
      }, (dismiss) => {
         if(dismiss == 'cancel'){
             console.log('cancel button clicked')
         }
      })
    });
  }

  return (<>
    <div className="AllWrapper fullHeight">
      <main className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4" id="loginBody">
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
                  <InputFrom
                   LabelId="email"
                   TypeName="email"
                   LabelTitle="Email"
                   Name="email"
                   Value=""
                   Placeholder="Enter Your Email"
                   callback = {loginData}
                  />

                  <InputFrom
                   LabelId="password"
                   TypeName="password"
                   LabelTitle="Password"
                   Name="password"
                   Value=""
                   Placeholder="Enter Your Password"
                   callback = {loginData}
                  />{/* end of Form.Group */}

                  <Link className="linkText mb-3" to="/forgot-password">Forgot password?</Link>

                  <Button type="submit" className="btn submitBtn mb-3 " onClick = { handleSubmit } >LOGIN</Button>

                  <p>Don’t have an account yet? <Link className="linkText" to="/signup">Sign up</Link></p>


                </Form>{/* end of form */}
              </div>{/* end of col */}
            </Col>{/* end of col */}
          </Row>{/* end of Row */}

        </Container>{/* end of container */}
      </main>{/* end of loginMainArea */}
    </div>{/* end of loginMainArea */}
  </>
  );
}

export default Login;
