import React from 'react';
import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";
import {connect} from 'react-redux'
import { OauthLogin, emptyStatus } from '../../redux/actions/authActions'


const OAuth = (props) => {

    const success =(res) =>{
        return new Promise((resolve, reject) => {
            if (res.provider === "google") {
                console.log(res.data.Qt.ZU)
                props.login(res.data.Qt.ZU)
            }
            if (res.provider==='facebook') {
                console.log(res.data.email)
                props.login(res.data.email)
                setTimeout(() => {
                    props.emptyStatus()
                }, 3000);
            }
            resolve();
        });
    }

    const error =(err) =>{
        console.log(err);
    }

    return (
        <div>
            <FacebookSignIn
                appId={"1011773875863022"}
                onReject={error}
                onResolve={success}
                fetch_basic_profile={true}
            >
                Facebook
        </FacebookSignIn>
            <GoogleSignIn
                client_id={
                    "959352266819-f73q6j7ph8vik97t2l25lb0ndqj1odrc.apps.googleusercontent.com"
                }
                onReject={error}
                onResolve={success}
            >
                Google
        </GoogleSignIn>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email) => dispatch(OauthLogin(email)),
        emptyStatus:()=>dispatch(emptyStatus())
   }
}
export default connect(null,mapDispatchToProps)(OAuth);