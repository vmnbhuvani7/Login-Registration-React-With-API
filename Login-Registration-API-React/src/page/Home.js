import React from 'react'
import Login from '../auth/Login';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Home = () => {
    
    const obj = localStorage.getItem('token')
    return (
        <div className="container-fluid">
        
            {obj && (
                <div>
                    <Header />
                    <p>Home Page</p>
                    <Footer />
                </div>
            )}
            {!obj && <Login />}
        </div>
    )
}

export default Home

