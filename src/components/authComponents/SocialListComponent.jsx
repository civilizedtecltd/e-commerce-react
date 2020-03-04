import React from "react";
import OAuth from '../oAuth/OAuth'
export default function SocialListComponent() {
  return (
    <div className="loginBodyContent clearfix" id="loginBody">
      <h2 className="headTitle">Login to Your Account</h2>
      <div className="socialLogin mb-4">
        <ul className="socialList mt-4 mb-4" >
          <OAuth />
        </ul>
        <h4>OR</h4>
      </div>
    </div>
  );
}