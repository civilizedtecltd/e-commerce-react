import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';


import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import { URL } from '../../constants/config';

import { InputFrom, SelectFrom } from '../../components/FromComponents/InputComponent';
import {LiAi} from '../../components/LiComponent/CommonLiComponent';
import {asideData} from '../../inc/users/users';
import {HeaderComponent, MobileHeader} from '../../components/header/Header';

import './assets/css/user.css';

const mySwal = withReactContent(Swal);

const UserProfile = () => {

    const [category, setCategory] = useState([]);
    const [user, setUser] = useState({});
    const [formData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(URL._CATEGORY);
          setCategory(result.data);
        };

        const getUserData = async () => {
            const result = await axios(URL._GET_USER(1));
            setUser(result.data.data);
        }

        fetchData();
        getUserData();

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

        if(_.isEmpty(formData))
            return;


        if( formData.new_password !== undefined ){

            if(formData.password !== undefined ){

                if(String(formData.new_password) !== String(formData.repeat_new_password)){
                   
                    mySwal.fire({
                      icon: 'error',
                      title: 'Oops..',
                      text: 'Password did not match.',
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
                     if(dismiss === 'cancel'){
                         console.log('cancel button clicked')
                     }
                  });

                }
            }else {
             
                mySwal.fire({
                  icon: 'error',
                  title: 'Oops..',
                  text: 'Enter current password to set new password',
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
                 if(dismiss === 'cancel'){
                     console.log('cancel button clicked')
                 }
              });
              
            }
        }
        console.log(formData);
    }

  return (<>
    <div className="allWrapper">        
      <HeaderComponent/>
      <MobileHeader />
      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <Col sm="2">
            <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
                <nav className="userNav">
                  <ul className="userNavBar">
                    {
                        asideData.map((aside, index) =>
                        <LiAi
                            key         =   { index }
                            ListClass   =   { aside.LIST_CLASS }
                            Title       =   { aside.TITLE }
                            Url         =   { aside.URL }
                            IconName    =   { aside.ICON_NAME }
                            AnchorClass =   { aside.ANCHOR_CLASS }
                        />)
                    }

                  </ul>{/* end of userNavBar */}
                </nav>{/* end of userNav */}
              </aside>{/* end of aside */}
            </Col>{/* end of Col */}

            <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">

                <section className="myOrderArea secGap clearfix" id="myOrderArea">

                  <Container fluid={true}>
                    <Row>
                      <Col>
                        <Card>
                          <Card.Body>
                            <div className="userProfileBody clearfix" id="userProfileBody">
                              <h2 className="cardSecTitle mb-4">Profile settings</h2>
                              <Form className="profileSettingsForm">
                                <Row>
                                  <Col sm="6">
                                    <SelectFrom
                                      LabelTitle="Category"
                                      category = { (category.data !== undefined) ? category.data : [] }
                                      callback = { categoryData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      LabelTitle    =   "First Name"
                                      TypeName      =   "text"
                                      Name          =   "first_name"
                                      Value         =   { user.first_name }
                                      Placeholder   =   "First Name"
                                      callback      = { fromFileData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      LabelTitle    =   "Last Name"
                                      TypeName      =   "text"
                                      Name          =   "last_name"
                                      Value         =   { user.last_name }
                                      Placeholder   =   "Last Name"
                                      callback      = { fromFileData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      LabelTitle    =   "Email Address"
                                      TypeName      =   "email"
                                      Name          =   "email"
                                      Value         =   { user.email }
                                      Placeholder   =   "Email Address"
                                      callback      = { fromFileData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      LabelTitle    =   "Phone Number"
                                      TypeName      =   "text"
                                      Name          =   "phone"
                                      Value         =   { user.phone }
                                      Placeholder   =   "Phone Number"
                                      callback      =  { fromFileData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="12">
                                    <hr className="hrBorder" />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">

                                    <InputFrom
                                      LabelTitle="Current Password"
                                      TypeName="password"
                                      Name="password"
                                      Value=""
                                      Placeholder="Current Password"
                                      callback      = { fromFileData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      LabelTitle="Create New Password"
                                      TypeName="password"
                                      Name="new_password"
                                      Value=""
                                      Placeholder="Create New Password"
                                      callback      = { fromFileData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="6">
                                    <InputFrom
                                      LabelTitle="Repeat new password"
                                      TypeName="password"
                                      Name="repeat_new_password"
                                      Value=""
                                      Placeholder="Repeat new password"
                                      callback      = { fromFileData }
                                    />
                                  </Col>{/* end of Col */}

                                  <Col sm="12">
                                    <Button
                                        type="submit"
                                        className="primary"
                                        onClick = { handleSubmit } >
                                            Save
                                    </Button>
                                  </Col>{/* end of Col */}
                                </Row>{/* end of Row */}
                              </Form>{/* end of userProfile */}
                            </div>{/* end of userProfile */}
                          </Card.Body>{/* end of Card.Body */}
                        </Card>{/* end of Card */}
                      </Col>{/* end of Col */}
                    </Row>{/* end of Row */}
                  </Container>{/* end of Container */}
                </section>{/* end of myOrderArea */}
              </main>{/* end of mainContent */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of userBodyArea */}


    </div>{/* end of allWrapper */}

  </>);
}

export default UserProfile;
