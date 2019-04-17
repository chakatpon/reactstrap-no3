import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './layouts/App';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fontawesome-free-5.8.1-web/css/all.min.css';

const store = createStore(reducers);
const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist} >
            <Switch>
                <Route path="/app" render={() => <App/>}/>
                <Redirect to="/app/dashboard" from="/"/>
            </Switch>
        </Router>
    </Provider>
    ,
    document.querySelector('#root')
)