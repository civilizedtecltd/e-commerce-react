import React from 'react';
import { connect } from 'react-redux';
//import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { OauthLogin, emptyStatus, OauthSignUp } from '../../redux/actions/authActions';
import { showFavItems } from '../../redux/actions/favoriteActions';

import { googleProvider, facebookProvider } from '../../constants/authMethods';
import socialAuth from '../../services/socialAuth';

const OAuth = (props) => {
    const handleOnClick = async (provider) => {
        const userInfo =  await socialAuth(provider);
                
        if(userInfo){
            console.log(userInfo);
            props.login(userInfo);
        }
    }

    return (
        <div>            
            <FacebookLoginButton onClick={()=> handleOnClick(facebookProvider)} />
            <GoogleLoginButton onClick={() => handleOnClick(googleProvider)} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})
const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(OauthLogin(data)),
        signup: (Oauth) => dispatch(OauthSignUp(Oauth)),
        emptyStatus: () => dispatch(emptyStatus()),
        showAllFavItem: () => dispatch(showFavItems()),
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(OAuth);
