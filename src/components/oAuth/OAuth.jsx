import React from 'react';
import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";

const OAuth = () => {

    const success =(res) =>{
        return new Promise((resolve, reject) => {
            console.log(res);
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
export default OAuth;