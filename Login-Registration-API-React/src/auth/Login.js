import React, { useState } from 'react'

import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import '../css/Form.css'
import Home from '../page/Home';

const Login = () => {
    const [signIn, setSignIn] = useState({
        login: {
            email: '',
            password: ''
        },
        isLogin: false
    })

    const history = useHistory();

    const changeHandler = (event) => {
        setSignIn({
            ...signIn,
            login: {
                ...signIn.login,
                [event.target.name]: event.target.value,
            },
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // let abc = {
        //     'email': signIn.login.email,
        //     'password': signIn.login.password,
        // };
        // const { email, password } = signIn.login
        // const user = {
        //     email,
        //     password,
        // };

        // signin(user).then(data => {
        //     console.log("data of login", data);
        //     debugger
        // })
        axios.post(`${process.env.REACT_APP_API_URL}/api/login`, signIn.login, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                localStorage.setItem('token', response.data)
                if (response.data) {
                    setSignIn({
                        ...signIn,
                        isLogin: true
                    })
                }
                history.push({
                    pathname: "/home",
                })
            })
            .catch((error) => {
                toast.error("Enter valid Email and Password", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    const registerHandler = () => {
        history.push({
            pathname: "/registration",
        })
    }
    const obj = localStorage.getItem('token')

    return (
        <div>
            {!obj && (
                <div>
                    <ToastContainer />
                    {!signIn.isLogin && (
                        <div className="container">
                            <div className="row">
                                <div className='col-md-3'></div>
                                <div className='col-md-6'>
                                    <div>
                                        <form className="container form-signin" onSubmit={(event) => submitHandler(event)}>
                                            <center> <h1> Login </h1> </center>
                                            <div className="form-group  input-box">
                                                <label >Email : </label>
                                                <div>
                                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                                    <input

                                                        type="email"
                                                        onChange={changeHandler}
                                                        value={signIn.login.email}
                                                        name="email"
                                                        placeholder="Enter Email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group  input-box">
                                                <label>Password : </label>
                                                <div>
                                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                                    <input
                                                        type="password"
                                                        onChange={changeHandler}
                                                        value={signIn.login.password}
                                                        placeholder="Enter Password"
                                                        name="password"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="form-group text-center">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <input type="checkbox" onChange={this.changeHandler} /> Remember me
                                     </div> */}
                                            <div className="form-group text-center">
                                                <button type="submit" className="btn btn-primary rounded-pill mr-4">Submit</button>
                                                <button className="btn rounded-pill btn-primary" onClick={registerHandler}> Registration</button>
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
            )}
            {obj && (<Home />)}
        </div>
    )
}

export default Login


