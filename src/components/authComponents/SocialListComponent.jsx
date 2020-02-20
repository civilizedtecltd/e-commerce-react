import React from "react";
// import { facebookLogin, googleLogin } from '../../hooks/useOauth'
// import Google from 'react-google-login'
import OAuth from '../oAuth/OAuth'

export default function SocialListComponent(props) {
    const OAuthLogin = (state) =>{
        console.log("Social component state: ", state);
        props.callback(state);
    }
  return (
    <div className="loginBodyContent clearfix" id="loginBody">
      <h2 className="headTitle">Login to Your Account</h2>
      <div className="socialLogin mb-4">
        <ul className="socialList mt-4 mb-4">
          <OAuth callback={OAuthLogin}/>
        </ul>
        <h4>OR</h4>
      </div>
    </div>
  );
}
