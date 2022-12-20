import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div>
        <Link to='/'>Dashboard</Link>
        <Link to='customers'>Customers</Link>
        <Outlet />
    </div>
  )
}

export default Siderbar
