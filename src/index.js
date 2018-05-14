import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const NotFoundPage = () => {
    return(
        <div>
            404!
        </div>
    )
}

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/create" component={ AddExpensePage } />
            <Route path="/edit" component={ EditExpensePage } />
            <Route path="/help" component={ HelpPage } />
            <Route component={ NotFoundPage } />
        </Switch>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));