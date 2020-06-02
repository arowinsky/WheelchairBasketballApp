import React from 'react';
import './Root.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from '../HomeView/HomeView';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeView} />
            </Switch>
        </Router>
    );
};
export default Root;
