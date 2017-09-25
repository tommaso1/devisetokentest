import { combineReducers } from 'redux'
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, ARTICLES_FETCH_REQUEST, ARTICLES_FETCH_FAILURE, ARTICLES_FETCH_SUCCESS,
    ARTICLE_DESTROY_REQUEST,ARTICLE_DESTROY_FAILURE,ARTICLE_DESTROY_SUCCESS, ARTICLE_CREATION_FAILURE,ARTICLE_CREATION_SUCCESS,ARTICLE_CREATION_REQUEST
} from './../actions';

//reducer che gestisce il login

function auth(state = {
    isFetching: false,
    isAuthenticated: false,
    user: {id:null},
    errorMessage: {message: null, attributes: {}},
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,

            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
                user: action.user

            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        default:
            return state
    }
}

function articles(state = {
    articles : [],
    isFetching : false,
    errorMessage: {message: null, attributes: {}},
    successMessage : null
}, action) {
    switch (action.type){

        case ARTICLES_FETCH_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case ARTICLES_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                articles: action.articles
            });
        case ARTICLES_FETCH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message
            });
        case ARTICLE_CREATION_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case ARTICLE_CREATION_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                articles: action.articles,
                errorMessage: {message:null, attributes:{}},
                successMessage: action.message
            });
        case ARTICLE_CREATION_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message
            });
            case ARTICLE_DESTROY_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case ARTICLE_DESTROY_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                articles: action.articles
            });
        case ARTICLE_DESTROY_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message
            });
        default:
            return state
    }
}


const articlesApp = combineReducers({
    auth, articles
});

export default articlesApp;