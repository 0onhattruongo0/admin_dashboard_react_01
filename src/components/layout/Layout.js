import React from 'react';
import Siderbar from '../siderbar/Siderbar';
import Dashboard from '../../pages/Dashboard';
import Customers from '../../pages/Customers';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';



const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Siderbar />}>
          <Route index element={<Dashboard />} />
          <Route path='customers' element={<Customers />} />
        </Route>
      </Routes>
      {/* <Link to='/'>Dashboard</Link>
      <Link to='customers'>Customers</Link> */}
      
    </BrowserRouter>
  )
}

export default Layout
