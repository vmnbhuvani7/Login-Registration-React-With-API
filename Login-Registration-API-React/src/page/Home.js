import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import Header from '../common/Header';

const Home = () => {
    const clickLogout = () => {
        localStorage.clear();
    }
    const obj = localStorage.getItem('token')
    return (
        <div className="container">
        
            {obj && (
                <div>
                    <Header />
                    <p>Home Page</p>
                    <button className="btn " onClick={clickLogout}><Link to="/">Logout</Link></button>
                </div>
            )}
            {!obj && <Login />}
        </div>
    )
}

export default Home

