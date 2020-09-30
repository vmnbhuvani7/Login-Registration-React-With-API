import React from 'react'
import Login from '../auth/Login'
import Header from '../common/Header'

function Dashboard() {
    const obj = localStorage.getItem('token')

    return (
        <div className="container">
            {obj && (
                <div><Header />
                    <p>Dashboard Component</p>
                </div>
            )}
            {!obj && <Login />}
        </div>
    )
}

export default Dashboard
