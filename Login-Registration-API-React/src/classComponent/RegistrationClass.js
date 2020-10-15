import React, { Component } from 'react'

import axios from "axios";
import '../css/Form.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RegistrationClass extends Component {

    state = {
        registration: {
            name: '',
            email: '',
            password: '',
        }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            registration: {
                ...this.state.registration,
                [event.target.name]: event.target.value,
            },
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/api/`, this.state.registration, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                toast.error(response.data, {
                    position: toast.POSITION.TOP_LEFT
                });
                if (response.data === 'Email is Already Exist') {
                    toast.error(response.data, {
                        position: toast.POSITION.TOP_CENTER
                    });
                } else {
                    this.setState({
                        ...this.state,
                        registration: {
                            name: '',
                            email: '',
                            password: '',
                        },
                    })
                    this.props.history.push(`/ `);
                }
            })
            .catch((error) => {
                toast.error(error);
            })
    }

    render() {
        return (
            <div className="container" >
                <ToastContainer />
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div>
                            <center> <h1> Student Registration Form </h1> </center>
                            <form className="container form-signin" onSubmit={(event) => this.submitHandler(event)} >

                                <div className="form-group ">
                                    <label className="form-label" >Name: </label>
                                    <input
                                        className="rounded-pill form-control"
                                        onChange={this.changeHandler}
                                        value={this.state.registration.name}
                                        name="name"
                                        placeholder="Enter Username"
                                    />
                                </div>

                                <div className="form-group ">
                                    <label className="form-label" >Email: </label>
                                    <input
                                        className="rounded-pill form-control"
                                        onChange={this.changeHandler}
                                        value={this.state.registration.email}
                                        name="email"
                                        placeholder="Enter Email"
                                    />
                                </div>

                                <div className="form-group ">
                                    <label className="form-label" >Password: </label>
                                    <input
                                        className="rounded-pill form-control"
                                        type="password"
                                        onChange={this.changeHandler}
                                        value={this.state.registration.password}
                                        name="password"
                                        placeholder="Enter Password"
                                    />
                                </div>

                                <div className="form-group text-center">
                                    <label className="form-label"></label>
                                    <button type="submit" className="btn  rounded-pill btn-style">Save</button>
                                    <button className="btn  rounded-pill btn-style"><Link to="/">Cancle</Link></button>
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


export default RegistrationClass