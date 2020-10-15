import React from 'react'
import Login from '../auth/Login'
import Footer from '../common/Footer'
import Header from '../common/Header'

function Dashboard() {
    return (
        <div>
            <Header />
            <p className="text-center">Dashboard Component</p>
            <Footer />
        </div>
    )
}

export default Dashboard
