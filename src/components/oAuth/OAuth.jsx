import React from 'react';
import { connect } from 'react-redux';
//import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { OauthLogin, emptyStatus, OauthSignUp } from '../../redux/actions/authActions';
import { showFavItems } from '../../redux/actions/favoriteActions';

import { googleProvider } from '../../constants/authMethods';
import socialAuth from '../../services/socialAuth';



const OAuth = (props) => {

    const success = (res) => {
        return new Promise((resolve, reject) => {
            const path = window.location.pathname;
            if (path ==='/login') {
                if (res.provider === "google") {
                    const loginData = res.data.Qt || res.data.Rt 
                    props.login(loginData)
                }
                if (res.provider === 'facebook') {
                    props.login(res.data)
                }
                resolve();
            }

            if (path === '/signup') {
                if (res.provider === "google") {
                    const OauthData = res.data.Qt ? res.data.Qt : res.data.Rt;
                    props.signup(OauthData)
                }
                if (res.provider === 'facebook') {
                    props.signup(res.data)
                }
                resolve();
            }
        });
    }

    const error =(err) =>{
        console.log(err);
    }

    const handleOnClick = async (provider) => {
        const userInfo =  await socialAuth(provider);
                
        if(userInfo){
            props.login(userInfo);
        }
    }

    return (
        <div>            
            <FacebookLoginButton onClick={()=> alert('Facebook Button')} />
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
