import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

import App from '../App.jsx';

render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    ),
    document.getElementById('container')
);
