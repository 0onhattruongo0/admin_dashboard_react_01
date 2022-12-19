import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/customers" component ={Customers} />
        </Switch>

    </Router>
  )
}

export default Routes
