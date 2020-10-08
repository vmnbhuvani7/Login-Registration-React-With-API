import React from 'react'

import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import '../css/Form.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from '../page/Home';
import { useFormik } from 'formik';


const RegistrationFormik = () => {

    const history = useHistory();


    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        hobbies1: '',
        hobbies2: '',
        hobbies3: '',
        city: '',
    }

    const onSubmit = (values) => {
        console.log('submit', values);
        let data = {
            name: values.name,
            email: values.email,
            password: values.password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/api/`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
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
        if (!values.confirmPassword) {
            errors.confirmPassword = 'conform Password is Required'
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'does not match password'
        }
        if (!values.gender) {
            errors.gender = 'gender is Required'
        }
        if (!values.hobbies1 && !values.hobbies2 && !values.hobbies3) {
            errors.hobbies = 'hobbies is Required'
        }
        if (!values.city) {
            errors.city = 'city is Required'
        }
        return errors
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

    const cancleHandler = () => {
        history.push({
            pathname: "/",
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
                                    <div className="form-group ">
                                        <label className="form-label" >Confirm Password: </label>
                                        <input
                                            name="confirmPassword"
                                            type="password"
                                            className="rounded-pill form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.confirmPassword}
                                            onBlur={formik.handleBlur}
                                            placeholder="Enter confirm Password"
                                        />
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div> : null}
                                    </div>

                                    <div className="form-group text-center">
                                        <label className="form-label"></label>
                                        <button type="submit" className="btn btn-primary rounded-pill mr-4">Save</button>
                                        <button className="btn btn-primary rounded-pill" onClick={cancleHandler}>Cancle</button>
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