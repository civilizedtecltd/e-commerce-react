import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/authActions';


const Logout = (props) => {

    const { auth } = props;

    if(!isEmpty(auth.jwt)){
        if(auth.status.success){
            props.userLogout();
        }
    }

    return (
        <>
            <Redirect to={{ pathname: "/", state: {from: props.location} }}/>
        </>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
const mapDispatchToProps = dispatch => ({
    userLogout: ()=> dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
