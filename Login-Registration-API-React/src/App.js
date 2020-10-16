import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRouter from './MainRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Form.css'
export class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <ToastContainer />
        <MainRouter />
      </BrowserRouter>
    );
  }
}
export default App;
