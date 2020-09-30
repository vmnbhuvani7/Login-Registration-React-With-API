import React from 'react'

import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import './Form.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from '../page/Home';
import { useFormik } from 'formik';



const RegistrationFormik = () => {

    const history = useHistory();
    

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const onSubmit = (values) => {
        console.log('submit', values);
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

    const validate = values => {
        let errors = {}
        if (!values.name) {
            errors.name = 'Name is Required'
        }
        if (!values.email) {
            errors.email = 'Email is Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Password is Required'
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

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
                                    onSubmit={formik.handleSubmit}
                                >
                                    <div className="form-group ">
                                        <label className="form-label" >Name: </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="rounded-pill form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            onBlur={formik.handleBlur}
                                            placeholder="Enter Username"
                                        />
                                        {formik.touched.name && formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
                                    </div>
                                    <div className="form-group ">
                                        <label className="form-label" >Email: </label>
                                        <input
                                            name="email"
                                            className="rounded-pill form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            onBlur={formik.handleBlur}
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

                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            onBlur={formik.handleBlur}
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

export default RegistrationFormik

