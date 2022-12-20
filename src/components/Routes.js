import React from 'react';
import {
    Route,
  } from "react-router-dom";
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <>
          <Route path="/" component={Dashboard} />
          <Route path="/customers" component ={Customers} /> 
    </>
  )
}

export default Routes
