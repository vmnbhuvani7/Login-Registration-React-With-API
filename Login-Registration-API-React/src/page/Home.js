import React from 'react'
import Login from '../auth/Login';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Home = () => {
    
    const obj = localStorage.getItem('token')
    return (
        <div>
        
            {obj && (
                <div>
                    <Header />
                    <p className="text-center">Home Page</p>
                    <Footer />
                </div>
            )}
            {!obj && <Login />}
        </div>
    )
}

export default Home

