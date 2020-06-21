import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView';
import RegisterView from 'views/RegisterView/RegisterView';
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/register" component={RegisterView} />
            </Switch>
        </Router>
    );
};
export default AppRouter;