import React from 'react';
import './Root.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView';
import RegisterView from 'views/RegisterView/RegisterView';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/register" component={RegisterView} />
            </Switch>
        </Router>
    );
};
export default Root;
