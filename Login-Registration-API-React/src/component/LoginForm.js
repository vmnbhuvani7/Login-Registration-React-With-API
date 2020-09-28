import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './Form.css'

export class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // componentDidMount() {
    //     axios.get('')
    //         .then((reponse) => {
    //             console.log(reponse);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    submitHandler = (e) => {
        e.preventDefault();
        // axios.post('', e)
        //     .then((reponse) => {
        //         console.log(reponse);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div>
                            <center> <h1> Student Login Form </h1> </center>
                            <form className="container form-signin">
                                <div className="form-group ">
                                    <label>Username : </label>
                                    <input type="text" className="rounded-pill form-control" onChange={this.changeHandler}
                                        value={this.state.username} placeholder="Enter Username" name="username" required />
                                </div>
                                <div className="form-group">
                                    <label>Password : </label>
                                    <input type="password" className="rounded-pill form-control" onChange={this.changeHandler}
                                        value={this.state.password} placeholder="Enter Password" name="password" required />
                                </div>
                                <div className="form-group text-center">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <input type="checkbox" onChange={this.changeHandler}
                                    /> Remember me
                            </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary rounded-pill">Submit</button>
                                    <button className="btn rounded-pill"><Link to="/registration"> Registration</Link></button>
                                </div>
                                <div className="form-group text-center">

                                    <a href="#">Forgot password? </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        )
    }
}

export default LoginForm