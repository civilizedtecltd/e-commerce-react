import React from "react";
// import { facebookLogin, googleLogin } from '../../hooks/useOauth'
// import Google from 'react-google-login'
import OAuth from '../oAuth/OAuth'
export default function SocialListComponent() {
  return (
    <div className="loginBodyContent clearfix" id="loginBody">
      <h2 className="headTitle">Login to Your Account</h2>
      <div className="socialLogin mb-4">
        <ul className="socialList mt-4 mb-4">
          {/* <li className="facebook">
            <a href="#!" onClick={facebookLogin}><i className="fab fa-facebook-f"></i></a>
          </li> */}
          {/* <li className="googlePlus">
            <a href="#!" onClick={googleLogin}><i className="fab fa-google"></i></a>
          </li> */}
          <OAuth />
        </ul>
        <h4>OR</h4>
      </div>
    </div>
  );
}
