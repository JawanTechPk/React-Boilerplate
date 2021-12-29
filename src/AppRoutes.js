import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Route, Switch } from 'react-router';
import Signup from './components/Singup/Signup';
import Home from './components/Home/Home';
import Login from './components/Login/Login'

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes
