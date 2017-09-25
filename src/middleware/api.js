export const BASE_URL = 'http://localhost:3000/';

export const authFetch = (url,config) => {
    config.headers['access-token'] = sessionStorage.getItem('access-token');
    config.headers['client'] = sessionStorage.getItem('client');
    config.headers['expiry'] = sessionStorage.getItem('expiry');
    config.headers['uid'] = sessionStorage.getItem('uid');
    let result = fetch(url, config);

    return (new Promise((resolve, reject)=>{
        result.then((response) => {
            let newAccessToken = response.headers.get('access-token');
            if(typeof newAccessToken !== "undefined" && newAccessToken !== null) {
                sessionStorage.setItem('access-token', newAccessToken);
                console.log('headers aggiornati', JSON.stringify(newAccessToken))
            }
            resolve(response)
        });
    }));
};

