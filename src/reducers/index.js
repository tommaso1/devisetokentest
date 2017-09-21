import { combineReducers } from 'redux'
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, ARTICLES_FETCH_REQUEST, ARTICLES_FETCH_FAILURE, ARTICLES_FETCH_SUCCESS,
    ARTICLE_DESTROY_REQUEST,ARTICLE_DESTROY_FAILURE,ARTICLE_DESTROY_SUCCESS
} from './../actions';

//reducer che gestisce il login

function auth(state = {
    isFetching: false,
    isAuthenticated: false,
    user: {id:null}
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
}, action) {
    switch (action.type){

        case ARTICLES_FETCH_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                articles: state.articles
            });
        case ARTICLES_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                articles: action.articles
            });
        case ARTICLES_FETCH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                articles : state.articles,
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