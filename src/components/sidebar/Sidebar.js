import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './sidebar.css';
import Logo from './../../logo.svg';
import sidebar_item from './../../assets/JsonData/sidebar_routes.json';
import { useResolvedPath, useMatch } from "react-router-dom";
import TopNav from '../topnav/TopNav';

const CustomLink= ({children,to,icon}) =>{
  const resolved = useResolvedPath(to)
  const match = useMatch({path:resolved.pathname,end:true})
  return (
    // <li className={match ? 'active' : ''}>
    //   <Link to={to} >
    //     {children}
    //   </Link>
    // </li>
    <Link to={to}>
       <div className='sidebar__item'>
          <div className={`sidebar__item-inner ${match ? 'active' : ''}`}>
          <i className={icon}></i>
          <span>{children}</span>                            
         </div>
      </div>
    </Link>
   
  )
}

// const Sidebar_item = props=>{
//   const active = match ? 'active' : '';
//   return (
//     <div className='sidebar__item'>
//       <div className={`sidebar__item-inner ${active}`}>
//         <i className={props.icon}></i>
//         <span>{props.title}</span>
//       </div>
//     </div>
//   )
// }

const Sidebar = () => {
  // console.log(useCurrentPath)
  // const activeItem =sidebar_item.findIndex(item=>item.route === useCurrentPath)
  return (
    <div className='layout'>
        <div className='sidebar'>
          <div className='sidebar__logo'>
            <img src={Logo} alt='Logo'/>
          </div>
          {sidebar_item.map((item,index)=>(
            <CustomLink to={item.route} key={index} icon={item.icon} >{item.display_name}</CustomLink>
        ))}
        </div>
        <div className='layout_content'>
          <TopNav />
          <div className='layout_content_main'> 
           <Outlet />
          </div>
        </div>
        
    </div>
  )
}

export default Sidebar
