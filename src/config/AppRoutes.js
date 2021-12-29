import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../screens/Login/Login';
// import { Route, Switch } from 'react-router';
import Signup from '../screens/Singup/Signup';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes
