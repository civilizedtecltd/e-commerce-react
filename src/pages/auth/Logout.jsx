import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect  } from 'react-redux';
import {logout} from '../../redux/actions/authActions';

const Logout = (props) => {

    const { auth } = props;

    if(auth.status.success){
        console.log('user logged in...')
        props.userLogout();
    }

    return (
        <Redirect to={{ pathname: "/", state: {from: props.location} }}/>
    );
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    userLogout: ()=> dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
