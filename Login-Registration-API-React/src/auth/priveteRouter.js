import React from 'react'
import { isAuthenticated } from './index'
import { Route, Redirect } from 'react-router-dom'

const PrivetRouter = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isAuthenticated() ? (<Component {...props} />) : (<Redirect to={{
        pathname: "/registration",
    }}
    />
    )
    } />
)

export default PrivetRouter