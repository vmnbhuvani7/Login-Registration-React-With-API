import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegistrationFormikYup from './auth/RegistrationFormikYup';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import PrivteRouter from './auth/priveteRouter'
import LoginFormikYup from './auth/LoginFormikYup';
import ProfileNew from './page/ProfileNew';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginFormikYup} />
                    <Route exact path="/registration" component={RegistrationFormikYup} />
                    <Route path="/login" component={LoginFormikYup} />
                    <PrivteRouter exact path="/home" component={Home} ></PrivteRouter>
                    <PrivteRouter exact path="/profile" component={ProfileNew} ></PrivteRouter>
                    <PrivteRouter exact path="/dashboard" component={Dashboard} ></PrivteRouter>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
