import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import LoginForm from './component/LoginForm'
// import LoginFormNew from './component/LoginFormNew'
// import Navbar from './comyponent/Navbar'
// import RegistrationForm from './component/RegistrationForm'
import Login from './Login'
import Registration from './Registration'

const MainRouter = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/" component={LoginForm} /> */}
                    <Route exact path="/" component={Login} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
