import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import '../css/Form.css'

function Header() {
    const history = useHistory();

    const clickLogout = () => {
        localStorage.clear();
        history.push({
            pathname: "/",
        })
    }
    const homeHandler = () => {
        history.push({
            pathname: "/home",
        })
    }
    const profileHandler = () => {
        history.push({
            pathname: "/profile",
        })
    }
    const dashboardHandler = () => {
        history.push({
            pathname: "/dashboard",
        })
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav >
                    <Nav.Link className="text-white" onClick={homeHandler}>Home</Nav.Link>
                    <Nav.Link className="text-white" onClick={profileHandler}>Profile</Nav.Link>
                    <Nav.Link className="text-white" onClick={dashboardHandler}>Dashboard</Nav.Link>
                    <Button className="text-white bg-dark btnright"
                        onClick={clickLogout}
                        variant="outline-info"
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
