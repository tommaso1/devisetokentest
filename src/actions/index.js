import {authFetch, BASE_URL} from './../middleware/api'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN = 'LOGIN';

export const ARTICLES_FETCH_REQUEST = 'ARTICLES_FETCH_REQUEST';
export const ARTICLES_FETCH_SUCCESS = 'ARTICLES_FETCH_SUCCESS';
export const ARTICLES_FETCH_FAILURE = 'ARTICLES_FETCH_FAILURE';

export const ARTICLE_DESTROY_REQUEST = 'ARTICLE_DESTROY_REQUEST';
export const ARTICLE_DESTROY_SUCCESS = 'ARTICLE_DESTROY_SUCCESS';
export const ARTICLE_DESTROY_FAILURE = 'ARTICLE_DESTROY_FAILURE';

export function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,

        creds
    }
}

export function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user
    }
}



export function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export const performLogin = (creds) => {

    return function (dispatch) {
        //aggiorno lo stato indicando che sto chiedendo il login

        dispatch(requestLogin(creds));

        //chiamata asincrona

        return fetch('http://localhost:3000/auth/sign_in', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: creds.email, password: creds.password})
        }).then((response) => {
            if(response.ok){
                //estraggo gli header di autenticazione
                sessionStorage.setItem('access-token',response.headers.get('access-token'));
                sessionStorage.setItem('client',response.headers.get('client'));
                sessionStorage.setItem('expiry',response.headers.get('expiry'));
                sessionStorage.setItem('uid',response.headers.get('uid'));

                //recupero le informazioni degli utenti e le salvo nello stato
                response.json().then((json)=>{ dispatch(receiveLogin(json.data));})
            } else {
                dispatch(loginError(response.statusText));
            }

        })
    }
};

export const requestArticles = () => {
    return {
        type: ARTICLES_FETCH_REQUEST,
        isFetching: true,
    }
};
export const reciveArticles = (articles) => {
    return {
        type: ARTICLES_FETCH_SUCCESS,
        isFetching: false,
        articles
    }
};
export const articlesError = (message) => {
    return {
        type: ARTICLES_FETCH_FAILURE,
        isFetching: false,
        message
    }
};

export const fetchArticles = () => {
    return function (dispatch) {

        dispatch(requestArticles());

        return fetch('http://localhost:3000/articles', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            if(response.ok){
                return response.json()
            } else {
                dispatch(loginError(response.statusText));
            }

        }).then((json)=>{
            dispatch(reciveArticles(json))
        })
    }
};


export const requestArticleDestroy = (id) => {
    return {
        type: ARTICLE_DESTROY_REQUEST,
        isFetching: true,
    }
};
export const articleDestroySuccess = () => {
    return {
        type: ARTICLE_DESTROY_SUCCESS,
        isFetching: false,
    }
};
export const articlesDestroyError = (message) => {
    return {
        type: ARTICLE_DESTROY_FAILURE,
        isFetching: false,
        message
    }
};

export const destroyArticle = (id) => {
    return function (dispatch) {
        dispatch(requestArticleDestroy(id));
        return authFetch(BASE_URL+'articles/'+id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {

            if(response.ok){
                dispatch(articleDestroySuccess());
                dispatch(fetchArticles());
            }


            else
                dispatch(articlesDestroyError(response.statusText));
        })


    }
};


