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
        isEdit: false,
    })
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        image: '',
        countryOptions: [],
        stateOptions: [],
        cityOptions: [],
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
    }, []);

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

    // const pobj1 = new Promise((resolve, reject) => {
    //      axios.get(`${process.env.REACT_APP_API_URL_COUNTRY}`).then((response) => {
    //         setProfile({
    //             ...profile,
    //             countryOptions: response && response.data
    //         })
    //         resolve(profile.countryOptions);
    //     })
    // })
    // pobj1.then((data) => {
    //     console.log(data);
    // })

    // const getBiodata = (index) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout((index) => {
    //             let biodata = {
    //                 name: 'vmn',
    //                 age: 26
    //             }
    //             resolve(`my roll no ${index} name ${biodata.name} age ${biodata.age}`)
    //         }, 2000, index)
    //     })
    // }

    // async function getData() {
    //     const rollnodata = await pobj1;
    //     console.log(rollnodata);

    //     const biodatas = await getBiodata(rollnodata[1]);
    //     console.log(biodatas);
    // }
    // getData();


    const editProfile = () => {
        setEdit({
            isEdit: !edit.isEdit
        })

        // axios.get(`${process.env.REACT_APP_API_URL_COUNTRY}`)
        //     .then((response) => {
        //         setProfile({
        //             ...profile,
        //             countryOptions: response && response.data
        //         })
        //         axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/in`, profile)
        //             .then((response) => {
        //                 setProfile({
        //                     ...profile,
        //                     stateOptions: response && response.data
        //                 })
        //                 axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/in/gj`, profile)
        //                     .then((response) => {
        //                         setProfile({
        //                             ...profile,
        //                             cityOptions: response && response.data
        //                         })
        //                     })
        //                     .catch((error) => {
        //                         console.log(error);
        //                     })
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //             })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })


        // -----------country api -------------

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

        // -----------State api -------------

        // axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/af`, profile)
        //     .then((response) => {
        //         setProfile({
        //             ...profile,
        //             stateOptions: response && response.data
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

        // -----------city api -------------

        // axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/in/gj`, profile)
        //     .then((response) => {
        //         setProfile({
        //             ...profile,
        //             cityOptions: response && response.data
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

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

                    {edit.isEdit && (

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
                                                // options={stateOptions}
                                                options={profile.stateOptions}
                                            />

                                            <FormikControl
                                                control='select'
                                                label='City'
                                                name='cityOption'
                                                // options={cityOptions}
                                                options={profile.cityOptions}
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
            {/* <Footer /> */}
        </div>
    )
}

export default Profile
