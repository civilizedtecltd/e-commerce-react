import React, { useState, useEffect } from 'react';
import { connect  } from 'react-redux';
import {getUser, update} from '../../redux/actions/authActions';
import isEmpty from 'lodash/isEmpty';
import {Container, Row, Col, Card, Form, Button, Alert} from 'react-bootstrap';
import { InputFrom, SelectFrom } from '../../components/FromComponents/inputComponent2';
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";
import UserNav from "../../components/UserNav/UserNav";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import './assets/css/user.css';
import { getSubscriptions } from '../../redux/actions/siteActions'

const UserProfile = (props) => {

  const { auth: { user }, favorite: { items }, cart, status: { message, success }, getUser, subscriptions } = props

    const [alert, setAlert] = useState({status: false, type: 'danger', message: ''});
    const [formData, setFormData] = useState({...user});
    const totalFavorite = items.length;
    const totalItem = cart.length;

    useEffect(() => {

        const clearAlert = setTimeout(() => {
            setAlert({status: false, message:''});
        }, 5000);

        if(!success){
            setAlert({
                status: true,
                type: 'danger',
                message: message
            });
            return () =>  clearTimeout(clearAlert);
        }

        getUser();
        subscriptions(user.email);
    }, [getUser, message, success]);


    const categoryData = (data) => {
        if(data.category_id !== undefined || data.category_id !== 'Select Category')
            formData.category_id = Number(data.category_id);
    }

    //console.log('form data: ', formData);

    const handleOnChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
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

        console.log('formData: ', formData);
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
                                        Value={formData.first_name}
                                        Placeholder="First Name"
                                        handleOnChange = {handleOnChange}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Last Name"
                                        TypeName="text"
                                        Name="last_name"
                                        Value={formData.last_name}
                                        Placeholder="Last Name"
                                       handleOnChange = {handleOnChange}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Email Address"
                                        TypeName="email"
                                        Name="email"
                                        Value={formData.email}
                                        Placeholder="Email Address"
                                        handleOnChange = {handleOnChange}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Phone Number"
                                        TypeName="text"
                                        Name="phone"
                                        Value={formData.phone}
                                        Placeholder="Phone Number"
                                       handleOnChange = {handleOnChange}
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
                                       handleOnChange = {handleOnChange}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Create New Password"
                                        TypeName="password"
                                        Name="new_password"
                                        Placeholder="Create New Password"
                                        handleOnChange = {handleOnChange}
                                      />
                                    </Col>

                                    <Col sm="6">
                                      <InputFrom
                                        LabelTitle="Repeat new password"
                                        TypeName="password"
                                        Name="repeat_new_password"
                                        Placeholder="Repeat new password"
                                       handleOnChange = {handleOnChange}
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
                                </Form>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </main>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({

    categories: state.site.categories,
    auth: state.auth,
    status: state.auth.status,
    cart: state.shop.cart,
    favorite: state.favorite,

})

const mapDispatchToProps = dispatch => ({
    getUser         : () => dispatch(getUser()),
    updateUser      : (info) => dispatch(update(info)),
    subscriptions   : (email) => dispatch(getSubscriptions(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
