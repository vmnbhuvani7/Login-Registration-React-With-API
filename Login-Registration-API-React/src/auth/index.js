import axios from "axios";

export const isAuthenticated = () => {
    if (localStorage.getItem('token')) {
        return localStorage.getItem("token")
    }
    else {
        return false
    }
}

export const signup =  (signUpForm) => {
     axios.post(`${process.env.REACT_APP_API_URL}/api`, signUpForm, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {

        })
        .catch((error) => {
        })
}

// export const signin = user => {
//     return axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)

//     }).then(response => {
//         return response.json()
//     }).catch(error =>
//         console.log(error))
// }