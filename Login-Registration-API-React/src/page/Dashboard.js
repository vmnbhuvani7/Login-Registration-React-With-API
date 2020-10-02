import React from 'react'
import Login from '../auth/Login'
import Footer from '../common/Footer'
import Header from '../common/Header'

function Dashboard() {
    const obj = localStorage.getItem('token')

    return (
        <div className="container-fluid">
            {obj && (
                <div>
                    <Header />
                    <p>Dashboard Component</p>
                    <Footer />
                </div>
            )}
            {!obj && <Login />}
        </div>
    )
}

export default Dashboard
