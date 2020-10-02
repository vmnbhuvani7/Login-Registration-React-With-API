import React from 'react'
import Login from '../auth/Login'
import Footer from '../common/Footer'
import Header from '../common/Header'
import '../auth/Form.css'
const Profile = () => {
    const obj = localStorage.getItem('token')

    return (
        <div className="container-fluid">
            {obj && (
                <div className="footer">
                    <Header />
                    <p>Profile Component</p>
                    <Footer />                          
                </div>
            )}
            {!obj && <Login />}
        </div>
    )
}

export default Profile
