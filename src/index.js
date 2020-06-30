import React from 'react';
import './styles/index.css';
import App from './App';
import {render} from 'mirrorx';
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// see: https://github.com/mirrorjs/mirror/tree/master/examples/simple-router
render(
    <HashRouter basename='/'>
        <App/>
    </HashRouter>,
    document.getElementById('root'));

window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();