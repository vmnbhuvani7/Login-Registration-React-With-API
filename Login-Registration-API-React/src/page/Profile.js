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

    const [edit, setEdit] = useState({

    })
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        image: '',
        contry: '',
        state: '',
        city: '',
        countryOptions: [],
        stateOptions: [],
        cityOptions: [],
    })

    const [getData, setGetData] = useState({
        isEdit: false,
        address: '',
        gender: '',
        birthdate: '',
        hobby: '',
        zip: '',
        country: '',
        state: '',
        city: '',
    })
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
                setProfile({
                    ...profile,
                    name: response.data.name,
                    email: response.data.email,
                    image: response.data.image,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }, [profile.name, profile.email, profile.image]);

    const radioOptions = [
        { key: 'male', value: 'male' },
        { key: 'female', value: 'female' },
        { key: 'other', value: 'other' },
    ]
    const checkBoxOptions = [
        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },
    ]

    let initialValues = {
        address: '',
        gender: '',
        hobby: '',
        birthdate: '',
        zip: '',
        contry: '',
        state: '',
        city: '',
    }

    const validationSchema = Yup.object({
        address: Yup.string().required('Required !'),
        // contry: Yup.string().required('Required !'),
        // state: Yup.string().required('Required !'),
        // city: Yup.string().required('Required !'),
        gender: Yup.string().required('Required !'),
        hobby: Yup.array().required('Required !'),
        birthdate: Yup.date().required('Required !').nullable(),
        zip: Yup.string().required('Required !'),
    })

    const editProfile = () => {
        setGetData({
            isEdit: true
        })

        axios.get(`${process.env.REACT_APP_API_URL_COUNTRY}`)
            .then((response) => {
                setProfile({
                    ...profile,
                    countryOptions: response && response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getdata = (value) => {
        {
            !profile.contry && (
                axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/${value}`)
                    .then((response) => {
                        {
                            response && response.data && (
                                setProfile({
                                    ...profile,
                                    stateOptions: response && response.data,
                                    contry: value,
                                })
                            )
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            )
        }

        {
            profile.contry && (
                axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/${profile.contry}/${value}`)
                    .then((response) => {
                        {
                            response && response.data && (
                                setProfile({
                                    ...profile,
                                    cityOptions: response && response.data,
                                    state: value,
                                })
                            )
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            )
        }
    }

    const getCity = (value) => {
        setProfile({
            ...profile,
            city: value,
        })
    }

    const onSubmit = values => {
        let data = {
            "address": values.address,
            "gender": values.gender,
            "birthdate": values.birthdate,
            "hobby": values.hobby,
            "zip": values.zip,
            "country": profile.contry,
            "state": profile.state,
            "city": profile.city,
        }

        axios.post(`${process.env.REACT_APP_API_URL}/api/addUserInfo`, data,
            {
                headers: {
                    'authentication-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            },
        )
            .then((response) => {
                console.log(response);
                setGetData({
                    getData: false,
                    address: response.data.address,
                    gender: response.data.gender,
                    birthdate: response.data.birthdate,
                    hobby: response.data.hobby,
                    zip: response.data.zip,
                    country: response.data.country,
                    state: response.data.state,
                    city: response.data.city,
                })
            })
            .catch((error) => {
                console.log(error);
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
                        className="btn btn-success w-50 mt-5 ml-5 p-3"
                        onClick={editProfile}
                    >EDIT MY PROFILE</button>
                </div>

                <div className="col-7">
                    <div className="block p-5">
                        <h2>Welcome back, {profile.name}!</h2>
                    </div>

                    {getData.isEdit && (

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
                                                name='gender'
                                                options={radioOptions}
                                            />

                                            <FormikControl
                                                control='select'
                                                label='Country'
                                                name='contry'

                                                countryValue={getdata}
                                                options={profile.countryOptions}
                                            />

                                            <FormikControl
                                                control='select'
                                                label='State'
                                                name='state'
                                                countryValue={getdata}
                                                options={profile.stateOptions}
                                            />

                                            <FormikControl
                                                control='select'
                                                label='City'
                                                name='city'
                                                countryValue={getCity}
                                                options={profile.cityOptions}
                                            />

                                            <FormikControl
                                                control='date'
                                                label='Birth Date'
                                                name='birthdate'
                                            />

                                            <FormikControl
                                                control='checkbox'
                                                label='Hobby'
                                                name='hobby'
                                                options={checkBoxOptions}
                                            />

                                            <FormikControl
                                                control='input'
                                                label='Pincode'
                                                name='zip'
                                            />
                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="btn btn-success mr-5" onSubmit={() => onSubmit()}>Submit</button>
                                            </div>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    )}

                    {!getData.isEdit && (
                        <div className="block mt-5 p-3">
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2">Address:</lable>
                                <p className="font-weight-bold">{getData.address}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2 ">Gender:</lable>
                                <p className="font-weight-bold">{getData.gender}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2">Birthdate:</lable>
                                <p className="font-weight-bold">{getData.birthdate}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2">Hobby:</lable>
                                <p className="font-weight-bold">{getData.hobby}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2">Zip:</lable>
                                <p className="font-weight-bold">{getData.zip}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2">Country:</lable>
                                <p className="font-weight-bold">{getData.country}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2">State:</lable>
                                <p className="font-weight-bold">{getData.state}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <lable className="formStyle font-weight-bold my-2">City:</lable>
                                <p className="font-weight-bold">{getData.city}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
