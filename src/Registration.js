import React, { Component } from 'react'

// import { Link } from 'react-router-dom'
import axios from "axios";
import './LoginReg.css'

class Registration extends Component {
    state = {
        registration: {
            name: '',
            email: '',
            password: ''
        }
    }

    changeHandler = (event) => {
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
        axios.post("http://localhost:3000/api/", this.state.registration)
            .then((response) => {
                console.log(response);
                debugger
                this.setState({
                    ...this.state,
                    registration: {
                        name: '',
                        email: '',
                        password: '',
                    },
                })
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {

        return (
            <div className="container" >
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
                                        type="text"
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
                                        type="email"
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
                                    <button type="submit" className="btn btn-primary rounded-pill">Save</button>
                                    <button className="btn  rounded-pill">Cancle</button>
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


export default Registration
