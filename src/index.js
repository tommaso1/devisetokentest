import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import articlesApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { Route, HashRouter } from 'react-router-dom';

import App from './components/App';
import Index from './components/Index';
import CreateArticle from './containers/CreateArticle';

import 'bootstrap/dist/css/bootstrap.css';

const loggerMiddleware = createLogger();
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

let store = createStoreWithMiddleware(articlesApp);

let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <HashRouter basename={'/'}>
            <div>
                <Route path="/login" component={App}/>
                <Route path="/new-article" component={CreateArticle}/>
                <Route exact path="/" component={Index}/>
            </div>
        </HashRouter>
    </Provider>,
    rootElement
);