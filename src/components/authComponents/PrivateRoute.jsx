import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuthDataContext } from './AuthDataProvider';

import SignUp from '../../pages/auth/SignUp';

const PrivateRoute = ({component, ...options}) => {
    const { user } = useAuthDataContext();
    const finalComponent = user ? component : SignUp;

    return <Route { ...options } component={finalComponent} />
}

export default PrivateRoute;
