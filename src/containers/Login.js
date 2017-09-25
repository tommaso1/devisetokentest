import React from 'react';
import {connect} from 'react-redux';
import {performLogin} from './../actions/index';

import { LocalForm, Control } from 'react-redux-form';
import { Redirect } from 'react-router-dom';
import Nav from './nav';

const Login = ({onClick, success}) => {

    if (success) return <Redirect to={'/'}/>;

    return (
        <div>
            <Nav/>
            <h1>Login</h1>
            <LocalForm
                onSubmit={(values) => onClick(values)}
            >
                <Control.text type={'email'} model=".email" />
                <Control.text type={'password'} model=".password" />
                <button>Login!</button>
            </LocalForm>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        onClick : creds => {
            dispatch(performLogin(creds));
        }
    };
};

const mapStateToProps = state => {
    return {
        success: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

