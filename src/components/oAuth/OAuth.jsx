import React from 'react';
import {connect} from 'react-redux'
import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";
import { OauthLogin, emptyStatus, OauthSignUp } from '../../redux/actions/authActions'


const OAuth = (props) => {
    const success = (res) => {
        return new Promise((resolve, reject) => {
            const path = window.location.pathname;
            if (path ==='/login') {
                if (res.provider === "google") {
                    props.login(res.data.Qt || res.data.Rt)
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

    return (
        <div>

            <FacebookSignIn appId={"1011773875863022"} onReject={error} onResolve={success} fieldsProfile={'first_name, last_name, email'} fetch_basic_profile={true}>
                    Facebook
            </FacebookSignIn>
            
            <GoogleSignIn client_id={"959352266819-f73q6j7ph8vik97t2l25lb0ndqj1odrc.apps.googleusercontent.com"} onReject={error} onResolve={success}>
                    Google
            </GoogleSignIn>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email) => dispatch(OauthLogin(email)),
        signup: (Oauth) => dispatch(OauthSignUp(Oauth)),
        emptyStatus:()=>dispatch(emptyStatus())
   }
}
export default connect(null,mapDispatchToProps)(OAuth);