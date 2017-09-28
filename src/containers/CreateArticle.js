import React from 'react';
import {connect} from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import {createArticle} from './../actions/index';
import Nav from './nav';


const CreateArticle = ({onClick, errorMessage, successMessage}) => {
    console.log(errorMessage, errorMessage.attributes.title !== null, errorMessage.attributes.body !== null);
    let titleError = typeof errorMessage.attributes.title !== "undefined" ? ' has-error' : '';
    let bodyError = typeof errorMessage.attributes.body !== "undefined" ? ' has-error' : '';
    return (
        <div className="grid-container">
            <Nav className="menu-navbar"/>
            <h1 className="title">Nuovo Articolo</h1>

            <LocalForm className="page-content"
                onSubmit={(values) => onClick(values)}
            >
                <div className={
                    'form-group'+ titleError}>
                    <label>Titolo</label>
                    <Control.text className="form-control " model=".title" />
                </div>
                <div className={'form-group' + bodyError}>
                    <label>Testo</label>
                    <Control.text className="form-control" model=".body" />
                </div>

                <br/>
                <button className="btn btn-primary">Submit</button>
            </LocalForm>


            {errorMessage.message !== null &&
            <div className="grid-alert alert alert-danger">
                <strong>Errore!</strong> {JSON.stringify(errorMessage.message)}
            </div>}

            {successMessage !== null && <div className="grid-alert alert alert-success">
                {successMessage}
            </div>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        current_user : state.auth.user,
        errorMessage: state.articles.errorMessage,
        successMessage: state.articles.successMessage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick : article => {
            dispatch(createArticle(article));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)