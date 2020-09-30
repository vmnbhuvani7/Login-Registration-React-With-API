import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import RegistrationFormik from './auth/RegistrationFormik';
import Header from './common/Header';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import Profile from './page/Profile';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"
                        render={() => {
                            let obj = localStorage.getItem('token')
                            if (obj === null) {
                                return <Login />
                            }
                            else return <Home />
                        }}
                    />
                    <Route exact path="/registration" component={RegistrationFormik} />
                    <Route path="/login" component={Login} />
                    <Route path="/header" component={Header} />
                    <Route path="/home" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/dashboard" component={Dashboard} />

                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
