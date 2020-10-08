import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Footer from '../common/Footer';
import Header from '../common/Header';
import '../css/Form.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../common/FormikControl'

const Profile = () => {
    const token = localStorage.getItem('token')

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        image: '',
        isEdit: false,
        countryOptions: []
    })

    // const countryOptions = [
    //     { key: 'Select a option', value: '' },
    //     { key: 'Option 1', value: 'Option 1' },
    //     { key: 'Option 2', value: 'Option 2' },
    //     { key: 'Option 3', value: 'Option 3' },
    // ]
    const cityOptions = [
        { key: 'Select a city option', value: '' },
        { key: 'Option city 1', value: 'Option 1' },
        // { key: 'Option 2', value: 'Option 2' },
        // { key: 'Option 3', value: 'Option 3' },
    ]
    const stateOptions = [
        { key: 'Select a state option', value: '' },
        { key: 'Option state 1', value: 'Option 1' },
        // { key: 'Option 2', value: 'Option 2' },
        // { key: 'Option 3', value: 'Option 3' },
    ]
    const radioOptions = [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' },
        { key: 'Other', value: 'Other' },
    ]
    const checkBoxOptions = [
        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },
    ]
    const initialValues = {
        address: '',
        radioOption: '',
        countryOption: '',
        stateOption: '',
        cityOption: '',
        checkBoxOption: [],
        birthDate: null,
        pincode: '',
    }

    const validationSchema = Yup.object({
        address: Yup.string().required('Required !'),
        countryOption: Yup.string().required('Required !'),
        stateOption: Yup.string().required('Required !'),
        cityOption: Yup.string().required('Required !'),
        radioOption: Yup.string().required('Required !'),
        checkBoxOption: Yup.array().required('Required !'),
        birthDate: Yup.date().required('Required !').nullable(),
        pincode: Yup.string().required('Required !'),
    })

    const onSubmit = values => {
        console.log("submit data", values);
    }

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/test`,
            {
                headers: {
                    'authentication-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            }
        )
            .then((response) => {
                // debugger
                setProfile({
                    name: response.data.name,
                    email: response.data.email,
                    image: response.data.image,
                })
            })
            .catch((error) => {
                console.log(error);
            })
        // debugger
        axios.get(`http://localhost:8000`)
            .then((response) => {
                // debugger
                setProfile({
                    ...profile,
                    countryOptions: response.data
                })
                axios.get(`http://localhost:8000/${response.code}`)
                .then((response) => {
                    debugger
                    setProfile({
                        ...profile,
                        countryOptions: response.data
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }, [1]);

    const editProfile = () => {
        setProfile({
            ...profile,
            isEdit: !profile.isEdit
        })

    }
    return (
        <div>
            <Header />
            <div className="row bgcolore">
                <div className="col-1"></div>
                <div className="col-2 mt-5">
                    <div>
                        <img src={`${profile.image}`} className="rounded-circle" alt="not fount" />
                    </div>
                    <button
                        className="btn btn-success w-75 mt-5 ml-5 p-3"
                        onClick={editProfile}
                    >EDIT MY PROFILE</button>
                </div>

                <div className="col-7">
                    <div className="block p-5">
                        <h2>Welcome back, {profile.name}!</h2>
                    </div>

                    {profile.isEdit && (

                        <div className="block mt-5 p-3">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {
                                    formik => (
                                        <Form>
                                            <FormikControl
                                                control='textarea'
                                                label='Address'
                                                name='address'
                                            />

                                            <FormikControl
                                                control='radio'
                                                label='Gender'
                                                name='radioOption'
                                                options={radioOptions}
                                            />

                                            <FormikControl
                                                control='select'
                                                label='Country'
                                                name='countryOption'
                                                // options={countryOptions}
                                                options={profile.countryOptions}
                                            />

                                            <FormikControl
                                                control='select'
                                                label='State'
                                                name='stateOption'
                                                options={stateOptions}
                                            />

                                            <FormikControl
                                                control='select'
                                                label='City'
                                                name='cityOption'
                                                options={cityOptions}
                                            />

                                            <FormikControl
                                                control='date'
                                                label='Birth Date'
                                                name='birthDate'
                                            />

                                            <FormikControl
                                                control='checkbox'
                                                label='Hobby'
                                                name='checkBoxOption'
                                                options={checkBoxOptions}
                                            />

                                            <FormikControl
                                                control='input'
                                                label='Pincode'
                                                name='pincode'
                                                options={checkBoxOptions}
                                            />
                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="btn btn-success mr-5">Submit</button>
                                            </div>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    )}
                </div>
            </div>
            <Footer />


        </div>
    )
}

export default Profile
