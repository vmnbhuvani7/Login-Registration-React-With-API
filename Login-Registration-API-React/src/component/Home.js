import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Home extends Component {
    clickLogout = () => {
        localStorage.clear();
    }
    render() {
        return (
            <div className="container">
                <p>Home Page</p>
                <button className="btn " onClick={this.clickLogout}><Link to="/">Logout</Link></button>
            </div>
        )
    }
}

export default Home
