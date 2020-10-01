import React from 'react'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import './Form.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from '../page/Home';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const RegistrationFormikYup = () => {

    const history = useHistory();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const onSubmit = (values) => {
        let data = {
            name: values.name,
            email: values.email,
            password: values.password
        }

        axios.post("http://localhost:3000/api/", data)
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

    const validationSchema = Yup.object({
        name: Yup.string().required('Required !'),
        email: Yup.string().email('Invalid email format')
            .required('Required !'),
        password: Yup.string().required('Required !'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required !'),
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
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}>

                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'>
                                <div>
                                    <center> <h1> Student Registration Form </h1> </center>
                                    <Form className="container form-signin">
                                        <div className="form-group ">
                                            <label className="form-label" >Name: </label>
                                            <Field
                                                type="text"
                                                name="name"
                                                className="rounded-pill form-control"
                                                placeholder="Enter Username"
                                            />
                                            <ErrorMessage name="name" />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Email: </label>
                                            <Field
                                                name="email"
                                                className="rounded-pill form-control"
                                                placeholder="Enter Email"
                                            />
                                            <ErrorMessage name="email" />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Password: </label>
                                            <Field
                                                name="password"
                                                type="password"
                                                className="rounded-pill form-control"
                                                placeholder="Enter Password"
                                            />
                                            <ErrorMessage name="password" />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Confirm Password: </label>
                                            <Field
                                                name="confirmPassword"
                                                type="password"
                                                className="rounded-pill form-control"
                                                placeholder="Enter confirm Password"
                                            />
                                            <ErrorMessage name="confirmPassword" />
                                        </div>

                                        <div className="form-group text-center">
                                            <label className="form-label"></label>
                                            <button type="submit" className="btn btn-primary rounded-pill mr-4">Save</button>
                                            <button className="btn btn-primary rounded-pill" onClick={cancleHandler}>Cancle</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                    </Formik>
                </div>
            )}
            {obj && (<Home />)}
        </div>
    )
}

export default RegistrationFormikYup