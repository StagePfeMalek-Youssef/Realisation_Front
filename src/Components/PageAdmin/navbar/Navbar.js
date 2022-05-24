import "./navbar.css";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react'


const Navbar = ({ sidebarOpen, openSidebar}) => {
  return (
    <nav className="navbar">
        <div className="nav_icon" onClick={() => openSidebar()}>
            <MenuIcon className="navbarIcon" />
        </div>
        <div className="navbar__left">
            <a className="active_link" href="/admin">Admin</a>
        </div>
    
  

        <div className="navbar__right">
            <a href="#">
                <SearchIcon/>
            </a>
           
            <a href="#">
               <AccountCircleIcon/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar;