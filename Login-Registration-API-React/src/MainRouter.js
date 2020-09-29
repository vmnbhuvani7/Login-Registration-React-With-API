import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'

const MainRouter = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/" component={LoginForm} /> */}
                    <Route exact path="/"
                        render={() => {
                            let obj = localStorage.getItem('token')
                            // console.log(obj);
                            if (obj === null) {
                                return <Login />
                            }
                            else return <Home />
                        }}
                    // component={Login}
                    />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/home"
                        render={() => {
                            let obj = localStorage.getItem('token')
                            // console.log(obj);
                            debugger
                            if (obj === null) {
                                return <Login />
                            }
                            else return <Home />
                        }}
                        component={Home} />
                    <Route path="/login" component={Login} />

                    {/* {
                        localStorage.getItem('token') &&
                        (
                            <div>
                                <Route path="/registration" component={Registration} />
                                <Route path="/home" component={Home} />
                                <Route path="/login" component={Login} />
                            </div>
                        )

                    }
                    {
                        !localStorage.getItem('token') &&
                        (
                            <div>
                                <Route path="/registration" component={Registration} />
                                <Route path="/home" component={Home} />
                                <Route path="/login" component={Login} />
                            </div>
                        )
                    } */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
