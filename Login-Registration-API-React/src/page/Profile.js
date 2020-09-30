import React from 'react'
import Login from '../auth/Login'
import Header from '../common/Header'

const Profile = () => {
    const obj = localStorage.getItem('token')

    return (
        <div className="container">
            {obj && (
                <div><Header />
                    <p>Profile Component</p>
                </div>
            )}
            {!obj && <Login />}
        </div>
    )
}

export default Profile
