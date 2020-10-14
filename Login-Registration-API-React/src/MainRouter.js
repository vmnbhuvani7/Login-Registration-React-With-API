import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegistrationFormikYup from './auth/RegistrationFormikYup';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import Profile from './page/Profile';
import PrivteRouter from './auth/priveteRouter'
import LoginFormikYup from './auth/LoginFormikYup';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RegistrationFormikYup} />
                    <Route exact path="/registration" component={RegistrationFormikYup} />
                    <Route path="/login" component={LoginFormikYup} />
                    <PrivteRouter exact path="/home" component={Home} ></PrivteRouter>
                    <PrivteRouter exact path="/profile" component={Profile} ></PrivteRouter>
                    <PrivteRouter exact path="/dashboard" component={Dashboard} ></PrivteRouter>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
