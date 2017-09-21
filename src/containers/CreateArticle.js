import React from 'react';
import {connect} from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import {createArticle} from './../actions/index';

const CreateArticle = ({onClick}) => {
    return (
        <div>
            <h1>Nuovo Articolo</h1>
            <LocalForm
                onSubmit={(values) => onClick(values)}
            >
                <label>titolo</label>
                <Control.text model=".title" />
                <br/>
                <label>testo</label>
                <Control.text model=".body" />
                <br/>
                <button>Submit</button>
            </LocalForm>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        current_user : state.auth.user
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