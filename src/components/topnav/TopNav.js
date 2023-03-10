import React from 'react';
import './topnav.css'
import Dropdown from '../dropdown/Dropdown';
import ThemeMenu from '../thememenu/ThemeMenu';
import notifications from '../../assets/JsonData/notification.json';
import { Link } from 'react-router-dom';
import user_image from './../../logo.svg';
import user_menu from '../../assets/JsonData/user_menus.json'


const renderNotifications = (item,index) =>{
    return (
        <div className='notification-item' key={index}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    )
}
const curr_user = {
  displayname: 'Reactjs',
  image: user_image
}
const renderUserToggle = (user)=>{
  return(
    <div className='topnav__right-user'>
      <div className='topnav__right-user__image'>
        <img src={user.image} alt={user.displayname} />
      </div>
      <div className='topnav__right-user__name'>
        {user.displayname}
      </div>
    </div>
  )
}

const renderUserMenu= (item,index)=>(
  <Link to='/' key={index}>
    <div className='notification-item'>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)


const TopNav = () => {
  return (
    <div className='topnav'>
      <div className='topnav__search'>
        <input type='text' placeholder='Search'/>
        <i className='bx bx-search'></i>
      </div>
      <div className='topnav__right'>
        <div className='topnav__right-item'>
          <Dropdown  customToggle={() => renderUserToggle(curr_user)}
                    contentData={user_menu}
                    renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className='topnav__right-item'>
            <Dropdown icon='bx bx-bell' 
            badge='12' contentData={notifications} 
            renderItems = {(item,index)=>renderNotifications(item,index)}
            renderFootter = {()=><Link to='/'>View all</Link>}
            />
        </div>
        <div className='topnav__right-item'><ThemeMenu /></div>
      </div>
    </div>
  )
}

export default TopNav
