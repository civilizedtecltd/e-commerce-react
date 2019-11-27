import React from "react";
import { Route, Redirect } from "react-router-dom";

import checkAuth from '../../helpers/checkAuth';

const PrivateRoute = ({component: Component, ...rest}) => {

    const isAuthenticated = checkAuth();
    const requestedPath = rest.location.pathname;


    return (
        <Route {...rest} render = { props => {

            return ( (checkAuth()) ? <Component  {...props} /> : <Redirect to={{pathname: "/login", state: {from: props.location }}} />)

        }} />
    )
}

export default PrivateRoute;
