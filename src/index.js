import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

const routes = (
    <BrowserRouter></BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));