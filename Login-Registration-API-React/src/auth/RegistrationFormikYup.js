import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import TextError from './TextError';
import Home from '../page/Home';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // fileUpload: '',
}

const RegistrationFormikYup = () => {
    const history = useHistory();

    const [image, setImage] = useState()

    const handleFileUpload = (event) => {
        setImage(event.target.files.item(0))
    }
    const onSubmit = (values) => {
        const signUpForm = new FormData()
        signUpForm.append('file', image)
        signUpForm.append('name', values.name)
        signUpForm.append('email', values.email)
        signUpForm.append('password', values.password)
        axios.post(`${process.env.REACT_APP_API_URL}/api`, signUpForm, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (response && response.data === 'Email is Exist') {
                    toast.error(response.data, {
                        position: toast.POSITION.TOP_CENTER
                    });
                } else {
                    history.push({
                        pathname: "/login",
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
        password: Yup.string().required('Required !')
            .min(8, 'at least 8 chars')
            .matches(/[a-z]/, 'at least one lowercase char')
            .matches(/[A-Z]/, 'at least one uppercase char')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "One Number and one special case Character"
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required !'),
        // fileUpload: Yup.mixed().required('A file is required')
    })

    const cancelHandler = () => {

        history.push({
            pathname: "/login",
        })
    }

    const obj = localStorage.getItem('token')

    return (

        <div>
            {!obj && (
                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
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
                                            <ErrorMessage name="name" component={TextError} />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Email: </label>
                                            <Field
                                                name="email"
                                                className="rounded-pill form-control"
                                                placeholder="Enter Email"
                                            />
                                            <ErrorMessage name="email" component={TextError} />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Password: </label>
                                            <Field
                                                name="password"
                                                type="password"
                                                className="rounded-pill form-control"
                                                placeholder="Enter Password"
                                            />
                                            <ErrorMessage name="password" component={TextError} />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Confirm Password: </label>
                                            <Field
                                                name="confirmPassword"
                                                type="password"
                                                className="rounded-pill form-control"
                                                placeholder="Enter confirm Password"
                                            />
                                            <ErrorMessage name="confirmPassword" component={TextError} />
                                        </div>

                                        <div className="form-group ">
                                            <label className="form-label" >Upload Image: </label>
                                            <Field
                                                name="file"
                                                type="file"
                                                onChange={handleFileUpload}
                                            />
                                            {image && <img src={(URL.createObjectURL(image))} className="mt-3 height-img" />}
                                        </div>

                                        <div className="form-group text-center">
                                            <label className="form-label"></label>
                                            <button type="submit" className="btn btn-primary rounded-pill mr-4 btn-style">Save</button>
                                            <button className="btn btn-primary rounded-pill btn-style" onClick={cancelHandler}>Cancel</button>
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