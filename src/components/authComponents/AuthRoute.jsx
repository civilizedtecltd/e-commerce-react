import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import checkAuth from '../../helpers/checkAuth';

const AuthRoute = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest} render = { props => (
            checkAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
        )} />
    );
}
 
export default AuthRoute;