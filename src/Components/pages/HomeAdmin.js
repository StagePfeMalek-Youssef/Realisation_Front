import React from 'react'
import Navbar from '../PageAdmin/navbar/Navbar'
import Main from '../PageAdmin/main/Main'
import Sidebar from '../PageAdmin/sidebar/Sidebar'
import { useState } from "react";
import './HomeAdmin.css';

const HomeAdmin = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
    };
    return (

        <div className="containerHome">


            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Main />
          
            
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

        </div>

    )
}


export default HomeAdmin;

