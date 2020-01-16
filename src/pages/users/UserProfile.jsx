import React, { useState, useEffect } from 'react';
import { connect  } from 'react-redux';
import axios from 'axios';
import {getUser, update} from '../../redux/actions/authActions';
import isEmpty from 'lodash/isEmpty';
import {Container, Row, Col, Card, Form, Button, Alert} from 'react-bootstrap';
import { URL } from '../../constants/config';
import { InputFrom, SelectFrom } from '../../components/FromComponents/InputComponent';
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";

import './assets/css/user.css';
import UserNav from "../../components/UserNav/UserNav";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";


const UserProfile = (props) => {

    const [alert, setAlert] = useState({
        status: false,
        type: 'danger',
        message: ''
    });
    const [formData, setFormData] = useState({});

    const user = { ...props.auth.user}
    const totalFavorite = props.favorite.items.length;
    const totalItem = props.cart.length;

    useEffect(()=>{
        const clearAlert = setTimeout(() => {
            setAlert({status: false, message:''});
        }, 5000);

        if(!props.status.success){
            setAlert({
                status: true,
                type: 'danger',
                message: props.status.message
            });
            return () =>  clearTimeout(clearAlert);
        }

    }, [props.status.success]);


    const categoryData = (data) => {

        if(data.category_id !== undefined || data.category_id !== 'Select Category')
            formData.category_id = Number(data.category_id);
    }

    const fromFileData = (data) => {
        setFormData({
            ...formData,
            ...data
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const clearAlert = setTimeout(() => {
            setAlert({status: false, message:''});
        }, 5000);

        if(isEmpty(formData)){
            setAlert({
                status: true,
                type: 'info',
                message: 'Nothing changed and updated.'
            });

            return () =>  clearTimeout(clearAlert);
        }

        if( formData.new_password !== undefined ){

            if(formData.password !== undefined ){

                if(String(formData.new_password) !== String(formData.repeat_new_password)){
                   setAlert({
                       status: true,
                       type: 'danger',
                       message: 'New and Repeat Passwords did not match.'
                   });
                   return () =>  clearTimeout(clearAlert);
                }
            }else {
                setAlert({
                    status: true,
                    type: 'danger',
                    message: 'Enter Current Password to set new Password.'
                });
                return () =>  clearTimeout(clearAlert);
            }
        }

        props.updateUser(formData);
    }

  return (
    <>
      <PageLoader loading={props.favorite.pending} />
      <div className="allWrapper">
        <HeaderComponent
          favorite_item={totalFavorite}
          cartItem={totalItem}
          menuActive={true}
        />
        <MobileHeader favorite_item={totalFavorite} cartItem={totalItem} />
        <div className="userBodyArea clearfix" id="userBodyArea">
          <Container fluid={true} className="pl-0 pr-0">
            <Row noGutters>
              <UserNav />
              <Col>
                <main
                  className="userMainContent clearfix bgImage bgImg03"
                  id="userMainContent"
                >
                  <section
                    className="myOrderArea secGap clearfix"
                    id="myOrderArea"
                  >
                    <Container fluid={true}>
                      <Row>
                        <Col>
                          <Card>
                            <Card.Body>
                              <div
                                className="userProfileBody clearfix"
                                id="userProfileBody"
                              >
                                <h2 className="cardSecTitle mb-4">
                                  Profile settings
                                </h2>
                                <Form className="profileSettingsForm">
                                  <Row>
                                    <Col sm="6">
                                      <SelectFrom
                                        LabelTitle="Category"
                                        categories={
                                          props.categories !== undefined
                                            ? props.categories
                                            : []
                                        }
                                        callback={categoryData}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="First Name"
                                        TypeName="text"
                                        Name="first_name"
                                        Value={user.first_name}
                                        Placeholder="First Name"
                                        callback={fromFileData}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Last Name"
                                        TypeName="text"
                                        Name="last_name"
                                        Value={user.last_name}
                                        Placeholder="Last Name"
                                        callback={fromFileData}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Email Address"
                                        TypeName="email"
                                        Name="email"
                                        Value={user.email}
                                        Placeholder="Email Address"
                                        callback={fromFileData}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Phone Number"
                                        TypeName="text"
                                        Name="phone"
                                        Value={user.phone}
                                        Placeholder="Phone Number"
                                        callback={fromFileData}
                                      />
                                    </Col>

                                    <Col sm="12">
                                      <hr className="hrBorder" />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Current Password"
                                        TypeName="password"
                                        Name="password"
                                        Placeholder="Current Password"
                                        callback={fromFileData}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Create New Password"
                                        TypeName="password"
                                        Name="new_password"
                                        Placeholder="Create New Password"
                                        callback={fromFileData}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Repeat new password"
                                        TypeName="password"
                                        Name="repeat_new_password"
                                        Placeholder="Repeat new password"
                                        callback={fromFileData}
                                      />
                                    </Col>

                                    <Col sm="12">
                                      <Alert
                                        show={alert.status}
                                        variant={alert.type}
                                        onClose={() =>
                                          setAlert({ ...alert, status: false })
                                        }
                                        dismissible
                                      >
                                        <p>{alert.message}</p>
                                      </Alert>
                                      <Button
                                        type="submit"
                                        className="primary"
                                        onClick={handleSubmit}
                                      >
                                        Save
                                      </Button>
                                    </Col>
                                  </Row>
                                  {/* end of Row */}
                                </Form>
                                {/* end of userProfile */}
                              </div>
                              {/* end of userProfile */}
                            </Card.Body>
                            {/* end of Card.Body */}
                          </Card>
                          {/* end of Card */}
                        </Col>
                      </Row>
                      {/* end of Row */}
                    </Container>
                    {/* end of Container */}
                  </section>
                  {/* end of myOrderArea */}
                </main>
                {/* end of mainContent */}
              </Col>
            </Row>
            {/* end of Row */}
          </Container>
          {/* end of Container */}
        </div>
        {/* end of userBodyArea */}
      </div>
      {/* end of allWrapper */}
    </>
  );
}

const mapStateToProps = state => ({

    categories: state.site.categories,
    auth: state.auth,
    status: state.auth.status,
    cart: state.shop.cart,
    favorite: state.favorite
})

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUser()),
    updateUser: (info) => dispatch(update(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
