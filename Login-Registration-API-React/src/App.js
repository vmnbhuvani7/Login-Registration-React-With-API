import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import { ToastContainer, toast } from 'react-toastify';


export class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <MainRouter />
        {/* <LoginForm /> */}
        {/* <RegistrationForm addRegistrationData={this.addRegistrationData} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
