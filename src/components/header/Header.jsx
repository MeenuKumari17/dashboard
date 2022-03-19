import React from 'react';
import "./header.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';




const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search here' />
          </div>
          <div className="items">
            <div className="item"><img src="https://images.pexels.com/photos/9879466/pexels-photo-9879466.jpeg?cs=srgb&dl=pexels-beytlik-9879466.jpg&fm=jpg" alt="" className='avatar'/> </div>
            <div className="item"><SettingsIcon className='icon'/></div>
            <div className="item"><NotificationsIcon className='icon'/>
            <div className="counter">11</div>
            </div>
            <div className="item"><Brightness2OutlinedIcon className='icon'/></div>


          </div>
        </div>
    </div>
  )
}

export default Header;