import React, { useState } from "react";
import "../../style/sidebar.css";
import logo from "../asset/logo.jpg"

function SideBarLecturer() {
    const [switched,setSwitch] = useState(false)
    const sidebar = document.querySelector(".sidebar"),
          modeSwitch = document.querySelector(".toggle-switch"),
          app = document.querySelector('.App')

    const [expandSideBar, SetExpandSideBar] = useState(false)

    const toggleSideBar = () => {
        if(!expandSideBar){
            SetExpandSideBar(true)
            
        }
        else{
            SetExpandSideBar(false)
            sidebar.classList.toggle("close")
            
        }
    }
    
    const toggleSwitch = () => {
        if(!switched){
            setSwitch(true)
            
        }
        else{
            app.classList.toggle("dark")
            setSwitch(false)
            
        }
    }
    return (
    <nav className="sidebar">
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={logo} alt="logo" />
                    </span>
                    <div className="text header-text">
                        <span className="name">Barbillard </span>
                        <span className="profession">Lecturer</span>
                    </div>
                </div>  

                <i className="bx bx-chevron-right toggle" onClick={() => toggleSideBar()}></i>  
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-link">
                        {/* <li className="search-box">
                            <i className="bx bx-search icon"></i>
                            <input type="search" placeholder="search..." />
                            
                        </li> */}
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-home-alt icon"></i>
                                <span className="text nav-text">Dashborad</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-bar-chart-alt-2 icon"></i>
                                <span className="text nav-text">Revenue</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-bell icon"></i>
                                <span className="text nav-text">Notification</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-pie-chart-alt icon"></i>
                                <span className="text nav-text">Analytics</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-heart icon"></i>
                                <span className="text nav-text">Like</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-wallet icon"></i>
                                <span className="text nav-text">Wallet</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="nav-link">
                        <a href="#">
                            <i className="bx bx-log-out icon"></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                    <li className="mode">
                        <div className="moon-sun">
                            <i className="bx bx-moon icon moon"></i>
                            <i className="bx bx-sun icon sun"></i>
                        </div>
                        <span className="mode-text text">Dark Mode</span>

                        <div className="toggle-switch">
                            <span className="switch"  onClick={() => toggleSwitch()}></span>
                        </div>
                    </li>
                    
                </div>
            </div>
    </nav>



  )
}

export default SideBarLecturer