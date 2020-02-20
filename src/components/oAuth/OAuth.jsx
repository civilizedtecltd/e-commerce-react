import React from 'react';
import {connect} from 'react-redux'
import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";
import { OauthLogin, emptyStatus, OauthSignUp } from '../../redux/actions/authActions'


const OAuth = (props) => {

    const success = (res) => {
        const path = window.location.pathname;
        return new Promise((resolve, reject) => {
            if (path ==='/login') {
                if (res.provider === "google") {
                    props.login(res.data.Qt)
                    return setTimeout(() => {
                        props.emptyStatus()
                    }, 3000);
                }
                if (res.provider === 'facebook') {
                    props.login(res.data)
                }
                resolve();
            }

            if (path ==='/signup') {
                if (res.provider === "google") {
                    console.log(res.data)
                    props.signup(res.data.Qt)
                }
                if (res.provider === 'facebook') {
                    console.log(res)
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
