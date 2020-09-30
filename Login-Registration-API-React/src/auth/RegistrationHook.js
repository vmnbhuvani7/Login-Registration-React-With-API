
import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Home from '../page/Home';
import axios from "axios";
import './Form.css';
import 'react-toastify/dist/ReactToastify.css';


const RegistrationHook = () => {
    const [signUp, setRegistration] = useState({
        registration: {
            name: '',
            email: '',
            password: '',
        }
    });

    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/api/", values)
            .then((response) => {
                if (response.data === 'Email is Already Exist') {
                    toast.error(response.data, {
                        position: toast.POSITION.TOP_CENTER
                    });
                } else {
                    history.push({
                        pathname: "/",
                    })
                }
            })
            .catch((error) => {
                toast.error(error);
            })
    }

    const changeHandler = (event) => {
        event.preventDefault();
        setRegistration({
            ...signUp,
            registration: {
                ...signUp.registration,
                [event.target.name]: event.target.value,
            },
        })
    }

    const obj = localStorage.getItem('token')

    return (
        <div className="container" >
            {!obj && (
                <div>
                    <ToastContainer />
                    <div className="row">
                        <div className='col-md-3'></div>
                        <div className='col-md-6'>
                            <div>
                                <center> <h1> Student Registration Form </h1> </center>
                                <form className="container form-signin"
                                    onSubmit={(event) => submitHandler(event)}
                                >
                                    <div className="form-group ">
                                        <label className="form-label" >Name: </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="rounded-pill form-control"
                                            onChange={changeHandler}
                                            value={signUp.registration.name}
                                            placeholder="Enter Username"
                                        />
                                        {formik.touched.name && formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
                                    </div>
                                    <div className="form-group ">
                                        <label className="form-label" >Email: </label>
                                        <input
                                            name="email"
                                            className="rounded-pill form-control"
                                            onChange={changeHandler}
                                            value={signUp.registration.email}
                                            placeholder="Enter Email"
                                        />
                                        {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
                                    </div>
                                    <div className="form-group ">
                                        <label className="form-label" >Password: </label>
                                        <input
                                            name="password"
                                            type="password"
                                            className="rounded-pill form-control"
                                            onChange={changeHandler}
                                            value={signUp.registration.password}
                                            placeholder="Enter Password"

                                        />
                                        {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
                                    </div>
                                    <div className="form-group text-center">
                                        <label className="form-label"></label>
                                        <button type="submit" className="btn  rounded-pill">Save</button>
                                        <button className="btn  rounded-pill"><Link to="/">Cancle</Link></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>
            )}
            {obj && (<Home />)}
        </div>
    )
}

export default RegistrationHook


