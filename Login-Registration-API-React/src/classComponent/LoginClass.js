import React, { Component } from 'react'

import '../css/Form.css'
import axios from "axios";
import { Link } from 'react-router-dom';

class LoginClass extends Component {
    state = {
        login: {
            email: '',
            password: ''
        },
        isLogin: false
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            login: {
                ...this.state.login,
                [event.target.name]: event.target.value,
            },
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/api/login", this.state.login)
            .then((response) => {
                localStorage.setItem('token', response.data)
                if (response.data) {
                    this.setState({
                        ...this.state,
                        isLogin: true
                    })
                }
                this.props.history.push('/home');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {!this.state.isLogin && (
                    <div className="container">
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'>
                                <div>
                                    <form className="container form-signin" onSubmit={(event) => this.submitHandler(event)}>
                                        <center> <h1> Login </h1> </center>
                                        <div className="form-group  input-box">
                                            <label >Email : </label>
                                            <input
                                                type="email"
                                                onChange={this.changeHandler}
                                                value={this.state.login.email}
                                                name="email"
                                                placeholder="Enter Email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group  input-box">
                                            <label>Password : </label>
                                            <div>
                                                <input
                                                    type="password"
                                                    onChange={this.changeHandler}
                                                    value={this.state.login.password}
                                                    placeholder="Enter Password"
                                                    name="password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group text-center">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <input type="checkbox" onChange={this.changeHandler} /> Remember me
                                     </div>
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary rounded-pill">Submit</button>
                                            <button className="btn rounded-pill"><Link to="/registration"> Registration</Link></button>
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
                )}
            </div>
        )
    }
}

export default LoginClass
