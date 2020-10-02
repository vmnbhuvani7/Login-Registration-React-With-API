import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Home = () => {
    const clickLogout = () => {
        localStorage.clear();
    }
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

