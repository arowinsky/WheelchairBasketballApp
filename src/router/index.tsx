import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView';
import RegisterView from 'views/RegisterViews/RegisterView/RegisterView';
import RegisterSuccessView from 'views/RegisterViews/RegisterSuccessView/RegisterSuccessView';
import LoginView from 'views/LoginView/LoginView'
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/register" component={RegisterView} />
                <Route path="/register-success" component={RegisterSuccessView} />
                <Route path="/login" component={LoginView} />
            </Switch>
        </Router>
    );
};
export default AppRouter;
