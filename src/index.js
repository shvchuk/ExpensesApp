import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

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
            404! - <Link to="/">Go Home</Link>
        </div>
    )
}

const Header = () => (
    <header>
        <h1>Expenses App - HEADER</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Go to Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));