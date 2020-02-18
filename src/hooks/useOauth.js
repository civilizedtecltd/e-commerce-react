import React from 'react'
import Google from '../components/oAuth/Google'





export const onSuccess = (response) => console.log('Login Success response', response)

export const onFailure = (response) => console.log('Login Failure message', response)



export const googleLogin = () => {
    const TriggerClick =()=>alert('hi')
    const config = {
        clientId:'959352266819-2868211v8ibq3hs82848u0o54renop6s.apps.googleusercontent.com',
        buttonText:"Login",
        onSuccess,
        onFailure,
        cookiePolicy:'single_host_origin'
    }

    return (
        <Google {...config} />
   )
}

export const facebookLogin = () => alert("FacebookLogin Login")
