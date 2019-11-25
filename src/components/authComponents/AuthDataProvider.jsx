import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
//import { Route, Redirect } from "react-router-dom";

import checkAuth from '../../helpers/checkAuth';

export const AuthDataContext = createContext(null);

const initAuthData = {};

/* const AuthRoute = ({ component: Component, ...rest}) => {
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

export default AuthRoute; */

const AuthDataProvider = props => {
    const [authData, setAuthData] = useState(initAuthData);

    useEffect(()=>{
        const currentAuthData = checkAuth();
        if(currentAuthData)
            setAuthData(currentAuthData);
    }, []);

    const onLogOut = () => setAuthData(initAuthData);

    const onLogin = newAuthData => setAuthData(newAuthData);

    const authDataValue = useMemo({ ...authData, onLogin, onLogOut }, [authData]);

    return <AuthDataProvider.Provider value = { authDataValue } { ...props } />
}

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
