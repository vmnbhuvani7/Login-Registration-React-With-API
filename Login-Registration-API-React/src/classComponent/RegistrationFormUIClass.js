import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './Form.css'

export class RegistrationForm extends Component {
    state = {
        // data: {
        // firstName: '',
        // lastName: '',
        // dateOfBirth: '',
        // num: '',
        // email: '',
        // password: '',
        // optradio: '',
        // optchack: '',
        // address: '',
        // city: '',
        // },
        isForm: false,
        formData: []
    }

    changeHandler = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addRegistrationData(this.state.firstName)
        this.setState({
            isForm: true,
            formData: [
                ...this.state.formData,
                { ...this.state, firstName: this.state.firstName }]
        })
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div>

                            <center> <h1> Student Registration Form </h1> </center>
                            <form className="container form-signin" >

                                <div className="form-group ">
                                    <label className="form-label" >First name: </label>
                                    <input className="rounded-pill form-control" type="text" onChange={this.changeHandler}
                                        value={this.state.firstName}
                                        name="firstName" />
                                </div>
                                {this.state.firstName}

                                <div className="form-group ">
                                    <label className="form-label cf" >Last name: </label>
                                    <input className="rounded-pill form-control" type="text" onChange={this.changeHandler}
                                        value={this.state.lastName} name="lastName" />
                                </div>

                                <div className="form-group ">
                                    <label className="form-label" >Date of birth: </label>
                                    <input className="rounded-pill form-control" type="date" onChange={this.changeHandler}
                                        value={this.state.dateOfBirth} name="dateOfBirth" />
                                </div>

                                <div className="form-group ">
                                    <label className="form-label" >Mobile No. : </label>
                                    <input className="rounded-pill form-control" type="number" onChange={this.changeHandler}
                                        value={this.state.num} name="num" />
                                </div>

                                <div className="form-group ">
                                    <label className="form-label" >Email: </label>
                                    <input className="rounded-pill form-control" type="email" onChange={this.changeHandler}
                                        value={this.state.email} name="email" />
                                </div>

                                <div className="form-group ">
                                    <label className="form-label" >Password: </label>
                                    <input className="rounded-pill form-control" type="password" onChange={this.changeHandler}
                                        value={this.state.password} name="password" />
                                </div>

                                <div className="form-group ">
                                    <label className="form-label cf" >Gender:  </label>
                                    <div className="form-check-inline ml-2">
                                        <label className="form-check-label ">
                                            <input type="radio" className="form-check-input" onChange={this.changeHandler}
                                                value={this.state.optradio} name="optradio" />Male
                                    </label>
                                    </div>
                                    <div className="form-check-inline ml-2">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" onChange={this.changeHandler}
                                                value={this.state.optradio} name="optradio" />Female
                                    </label>
                                    </div>
                                    <div className="form-check-inline ml-2 ">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" onChange={this.changeHandler}
                                                value={this.state.optradio} name="optradio" />Other
                                    </label>
                                    </div>
                                </div>

                                <div className="form-group ">
                                    <label className="form-label cf" >Hobbies:  </label>
                                    <div className="form-check-inline">
                                        <label className="form-check-label ml-2">
                                            <input type="checkbox" value="" className=" mr-2" onChange={this.changeHandler} name="optchack" /> Suffering Internet
                                    </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label ml-2">
                                            <input type="checkbox" value="Music" className=" mr-2" onChange={this.changeHandler} name="optchack" /> Music
                                    </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label ml-2">
                                            <input type="checkbox" value="" className=" mr-2" name="optchack" onChange={this.changeHandler} />Playing Game
                                    </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Address</label>
                                    <textarea className="form-control rounded-pill" name="address" onChange={this.changeHandler} rows="3"></textarea>
                                </div>

                                <div className="form-group ">
                                    <label className="form-label">City: </label>
                                    <select className="form-dropdown field form-control rounded-pill" onChange={this.changeHandler} name="city">
                                        <option value="Surat"> Surat </option>
                                        <option value="Bardoli"> Bardoli </option>
                                        <option value="Ahemdabad"> Ahemdabad </option>
                                        <option value="Vadodra"> Vadodra </option>
                                    </select>
                                </div>

                                <div className="form-group text-center">
                                    <label className="form-label"></label>
                                    <button type="submit" className="btn btn-primary rounded-pill">Save</button>
                                    <button className="btn  rounded-pill"><Link to="/"> Cancle</Link></button>
                                </div>
                            </form>
                            {this.state.isForm && this.state.firstName}
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        )
    }
}

export default RegistrationForm
