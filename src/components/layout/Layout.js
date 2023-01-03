import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../../pages/Dashboard';
import Customers from '../../pages/Customers';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './layout.css'



const Layout = () => {



  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Sidebar />}>
                <Route index element={<Dashboard />} />
                <Route path='customers' element={<Customers />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout
