import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import '../css/Form.css'

export class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div>
                            <form className="container form-signin">
                                <center> <h1> Login </h1> </center>
                                <div className="form-group input-box">
                                    <label>Username : </label>
                                    <div>
                                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                                        <input type="text" className=" " onChange={this.changeHandler}
                                            value={this.state.username} placeholder="Enter Username" name="username" required />
                                    </div>
                                </div>
                                <div className="form-group  input-box">
                                    <label>Password : </label>
                                    <div>
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                        <input type="password" onChange={this.changeHandler}
                                            value={this.state.password} placeholder="Enter Password" name="password" required />
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <input type="checkbox" onChange={this.changeHandler}
                                    /> Remember me
                            </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary rounded-pill btn-style">Submit</button>
                                    <button className="btn rounded-pill btn-style"><Link to="/registration"> Registration</Link></button>
                                </div>
                                <div className="form-group text-center">

                                    <a href="#">Forgot password? </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        )
    }
}


export default LoginForm
