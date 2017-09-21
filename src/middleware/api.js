export const BASE_URL = 'http://localhost:3000/';

export const authFetch = (url,config) => {
    config.headers['access-token'] = sessionStorage.getItem('access-token');
    config.headers['client'] = sessionStorage.getItem('client');
    config.headers['expiry'] = sessionStorage.getItem('expiry');
    config.headers['uid'] = sessionStorage.getItem('uid');
    return fetch(url, config)
};

