import React, { useEffect, useState } from 'react'
import '../auth/Form.css'
import axios from 'axios'
require('dotenv').config()
const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        image: ''

    })
    const token = localStorage.getItem('token')
    useEffect(() => {
        // console.log(process.env);
        // console.log(process.env.REACT_APP_UNSPLASH_KEY);
        axios.get("http://localhost:3000/test", {
            headers: {
                'auth-token': `${token}`
            }
        })
            .then((response) => {
                setProfile({
                    name: response.data.name,
                    email: response.data.email,
                    image: response.data.image
                })
            })
            .catch((error) => {
                console.log(error);
            })
    });
    return (
        <div className="container-fluid">
            <p>hello</p>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.image}</p>
            <img src={`file:///D:/vmn/Login-Registration-API-React/Auth-With-Image-API--Node.js-Express.js-MongoDB/${profile.image}`} alt="not fount" />
        </div>
    )
}

export default Profile
