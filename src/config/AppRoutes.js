import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Route, Switch } from 'react-router';
import Signup from '../screens/Singup/Signup';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes
