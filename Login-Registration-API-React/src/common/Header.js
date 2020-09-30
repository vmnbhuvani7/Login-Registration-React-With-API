import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const clickLogout = () => {
        localStorage.clear();
        history.push({
            pathname: "/",
        })
    }
    return (
        <div className="container">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-white " href="/home">Home</Nav.Link>
                    <Nav.Link className="text-white " href="/profile">Profile</Nav.Link>
                    <Nav.Link className="text-white " href="/dashboard">Dashboard</Nav.Link>
                    <Button className="text-white bg-dark"
                        onClick={clickLogout}
                        variant="outline-info">
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
