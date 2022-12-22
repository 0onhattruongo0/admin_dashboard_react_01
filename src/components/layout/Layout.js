import React from 'react';
import Siderbar from '../siderbar/Siderbar';
import Dashboard from '../../pages/Dashboard';
import Customers from '../../pages/Customers';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './layout.css'



const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <div className='layout'>
          <Route path='/' element = {<Siderbar />}>
            <div className='layout_content'>
              <div className='layout_content_main'>
                <Route index element={<Dashboard />} />
                <Route path='customers' element={<Customers />} />
              </div>
            </div>
          </Route>
        </div>
        
      </Routes>
    </BrowserRouter>
  )
}

export default Layout
