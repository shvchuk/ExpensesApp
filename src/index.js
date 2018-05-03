import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

const AddExpensePage = () => {
    return (
        <div>
        Add expense component
    </div>
    )
};

const EditExpensePage = () => {
    return(
        <div>
            edit expense component
        </div>
    )
}

const HelpPage = () => {
    return(
        <div>
            Help Page Component
        </div>
    )
}

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={App} exact={true}/>
            <Route path="/create" component={ AddExpensePage } />
            <Route path="/edit" component={ EditExpensePage } />
            <Route path="/help" component={ HelpPage } />
        </div>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));