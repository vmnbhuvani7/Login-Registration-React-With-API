import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Footer from '../common/Footer';
import Header from '../common/Header';
import '../css/Form.css'
import Button from 'react-bootstrap/Button';

const ProfileNew = () => {
    const token = localStorage.getItem('token')

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        image: '',
    })
    const [accommodation, setAccommodation] = useState({
        countryOptions: [],
        stateOptions: [],
        cityOptions: []
    })
    const [data, setData] = useState({
        address: '',
        gender: '',
        birthdate: '',
        country: '',
        state: '',
        city: '',
        hobby: [],
        zip: '',
    })
    const [info, setInfo] = useState({

        address: '',
        gender: '',
        birthdate: '',
        country: '',
        state: '',
        city: '',
        hobby: [],
        zip: '',
    })
    const [getData, setGetData] = useState({
        isEdit: false,
        isInfo: true,
    })
    const [getData1, setGetData1] = useState(false)



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
        axios.get(`${process.env.REACT_APP_API_URL}/api/addUserInfo/getdata`,
            {
                headers: {
                    'authentication-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            },
        )
            .then((response) => {

                setInfo({
                    address: response.data.address,
                    gender: response.data.gender,
                    birthdate: response.data.birthdate,
                    country: response.data.country,
                    state: response.data.state,
                    city: response.data.city,
                    hobby: response.data.hobby,
                    zip: response.data.zip,
                });

                console.log(getData1);
            })
            .catch((error) => {
                console.log(error);
            })

    }

        , [profile.name, profile.email, profile.image, info, getData1]);

    const changeHandler = (event) => {
        console.log(event.target.value);
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const hobbyHandler = (event) => {
        setData({
            ...data,
            hobby: [...data.hobby, event.target.value]
        })
    }

    const editProfile = () => {
        setGetData({
            isEdit: true,
            isInfo: false
        })
        {
            info && info.address && (
                setData({
                    address: info.address,
                    gender: info.gender,
                    birthdate: info.birthdate,
                    country: info.country,
                    state: info.state,
                    city: info.city,
                    hobby: info.hobby,
                    zip: info.zip,
                })
            )
        }
        axios.get(`${process.env.REACT_APP_API_URL_COUNTRY}`)
            .then((response) => {
                setAccommodation({
                    ...accommodation,
                    countryOptions: response && response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // const validate = () => {
    //     console.log("sa");
    //     let addressError = "";
    //     if (!data.address.includes("@")) {
    //         addressError = "Name is required !"
    //     }
    //     if (addressError) {
    //         setData({ addressError })
    //         return false
    //     }
    //     return true
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/api/addUserInfo`, data,
            {
                headers: {
                    'authentication-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            },
        )
            .then((response) => {
                setGetData({
                    isEdit: false,
                    // isInfo: false,
                }),
                    setData({
                        address: info.address,
                        gender: info.gender,
                        birthdate: info.birthdate,
                        country: info.country,
                        state: info.state,
                        city: info.city,
                        hobby: info.hobby,
                        zip: info.zip,
                    });
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        // }
    }

    useEffect(() => {
        {
            data && data.country && (
                axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/${data.country}`)
                    .then((response) => {
                        {
                            response && response.data && (
                                setAccommodation({
                                    ...accommodation,
                                    stateOptions: response && response.data,
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
            data && data.state && (
                axios.post(`${process.env.REACT_APP_API_URL_COUNTRY}/${data.country}/${data.state}`)
                    .then((response) => {
                        {
                            response && response.data && (
                                setAccommodation({
                                    ...accommodation,
                                    cityOptions: response && response.data,
                                })
                            )
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            )
        }
    }, [data.country, data.state])

    return (
        <div>
            <Header />
            <div className="row bgcolore">
                <div className="col-3"></div>
                <div className="col-2 mt-5">
                    <div>
                        <img src={`${profile.image}`} className="rounded-circle" alt="not fount" />
                    </div>
                    {/*
                    <Button variant="outline-success shadow-none  w-50 mt-5 ml-5 p-3 " onClick={editProfile}>EDIT MY PROFILE</Button>
                    */}
                    <button
                        className="btn btn-success w-50 mt-5 ml-5 p-3"
                        onClick={editProfile}
                    >EDIT MY PROFILE</button>
                </div>

                <div className="col-4">
                    <div className="block p-3 text-center">
                        <h2>Welcome back, {profile.name}!</h2>
                    </div>
                    {getData.isEdit && (
                        <div className="block mt-5 p-3">
                            <form onSubmit={(event) => submitHandler(event)}>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label ">Address:</label>
                                    </div>
                                    <div className="col-10">
                                        <textarea className="form-control rounded-pill  w-100" name="address" value={data.address || ""} onChange={changeHandler} rows="3"></textarea>
                                    </div>
                                    {/* {data.addressError && } */}
                                    {/* {data.address ? <div style={{ fontSize: 12, color: "red" }}>{data.addressError}</div> : ""} */}

                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label cf" >Gender:  </label>
                                    </div>
                                    <div className="col-10 " onChange={changeHandler} >
                                        <div className="form-check-inline ml-2">
                                            <label className="form-check-label ">
                                                <input type="radio" className="form-check-input" value="male" checked={data.gender === "male"} name="gender" />Male
                                    </label>
                                        </div>
                                        <div className="form-check-inline ml-2">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" value="female" checked={data.gender === "female"} name="gender" />Female
                                    </label>
                                        </div>
                                        <div className="form-check-inline ml-2 ">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" value="other" checked={data.gender === "other"} name="gender" />Other
                                    </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label" >Date of birth: </label>
                                    </div>
                                    <div className="col-10">
                                        <input className="rounded-pill form-control  w-100" type="date" onChange={changeHandler} name="birthdate" />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label">Country: </label>
                                    </div>
                                    <div className="col-10">
                                        <select className="form-dropdown field form-control rounded-pill  w-100" onChange={changeHandler} name="country">
                                            <option key="" value="" > Select a option </option>
                                            {
                                                accommodation.countryOptions.map(option => {
                                                    return (
                                                        <option key={option.code} value={option.code}   >
                                                            {option.name}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label">State: </label>
                                    </div>
                                    <div className="col-10">
                                        <select className="form-dropdown field form-control rounded-pill  w-100" onChange={changeHandler} name="state">
                                            <option key="" value="" > Select a option </option>
                                            {
                                                accommodation.stateOptions.map(option => {
                                                    return (
                                                        <option key={option} value={option} >
                                                            {option}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label">City: </label>
                                    </div>
                                    <div className="col-10">
                                        <select className="form-dropdown field form-control rounded-pill  w-100" onChange={changeHandler} name="city">
                                            <option key="" value="" > Select a option </option>
                                            {
                                                accommodation.cityOptions.map(option => {
                                                    return (
                                                        <option key={option} value={option} >
                                                            {option}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label cf" >Hobbies:  </label>
                                    </div>
                                    <div className="col-10">
                                        <div className="form-check-inline">
                                            <label className="form-check-label ml-2">
                                                <input type="checkbox" value="Reading" className=" mr-2" name="hobby" checked={data.hobby[0] === 'Reading' || data.hobby[1] === 'Reading' || data.hobby[2] === 'Reading'} onChange={hobbyHandler} /> Reading
                                    </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label ml-2">
                                                <input type="checkbox" value="Music" className=" mr-2" name="hobby" checked={data.hobby[0] === 'Music' || data.hobby[1] === 'Music' || data.hobby[2] === 'Music'} onChange={hobbyHandler} /> Music
                                    </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label ml-2">
                                                <input type="checkbox" value="Playing game" className=" mr-2" name="hobby" checked={data.hobby[0] === 'Playing game' || data.hobby[1] === 'Playing game' || data.hobby[2] === 'Playing game'} onChange={hobbyHandler} />Playing Game
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <label className="form-label" >Pincode: </label>
                                    </div>
                                    <div className="col-10">
                                        <input className="rounded-pill form-control  w-100" value={data.zip || 's'} type="number" name="zip" onChange={changeHandler} />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3 ">
                                    <div className="col-2"></div>
                                    <div className="col-10">
                                        <button type="submit" className="btn btn-primary rounded-pill btn-style">Save</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    )}

                    {info && info.address && (
                        <div className="block mt-5 p-3">
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label ">Address:</label>
                                </div>
                                <div className="col-10">{info.address}
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label cf" >Gender:  </label>
                                </div>
                                <div className="col-10 " onChange={changeHandler}>
                                    <div className="form-check-inline ml-2">
                                        <label className="form-check-label ">{info.gender}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label" >Date of birth: </label>
                                </div>
                                <div className="col-10">{info.birthdate}
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label">Country: </label>
                                </div>
                                <div className="col-10">{info.country}
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label">State: </label>
                                </div>
                                <div className="col-10">{info.state}
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label">City: </label>
                                </div>
                                <div className="col-10">{info.city}
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label cf" >Hobbies:  </label>
                                </div>
                                <div className="col-10">
                                    <div className="form-check-inline">
                                        <label className="form-check-label ml-2">{info.hobby}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                                <div className="col-2">
                                    <label className="form-label" value={data.zip || ''} >Pincode: </label>
                                </div>
                                <div className="col-10">{info.zip}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-3"></div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileNew
