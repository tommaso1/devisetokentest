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
            <Nav className="menu-navbar"/>
            <h1 className={'title'}>Login</h1>
            <LocalForm
                onSubmit={(values) => onClick(values)}
            >
                <div className={'form-group'}>
                    <label htmlFor="email">Email</label>
                    <Control.text className={'form-control'} type={'email'} model=".email" />
                </div>
                <div className={'form-group'}>
                    <label htmlFor="password">Password</label>
                    <Control.text className={'form-control'} type={'password'} model=".password" />
                </div>
                <button className="btn btn-primary">Login!</button>
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

