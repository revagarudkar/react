import React from "react";
import "./nav-bar.css"

function NavBar(){
    return(
        <div className = "nav-bar-container">
            <div className = "nav-bar-left-container">
                <img src = "https://ieeevbitsb.in/wp-content/uploads/2019/11/ieee-vbit-sb.png" alt = "logo" className = "nav-bar-logo"></img>
            </div>
            <div className = "nav-bar-right-conatiner">
            <a href="" id="blue" className="nav-bar-links">HOME</a>
            <a href="" className="nav-bar-links">ABOUT</a>
            <a href="" className="nav-bar-links">SOCIETIES</a>
            <a href="" className="nav-bar-links">EXECOM</a>
            <a href="" className="nav-bar-links">EVENTS</a>
            <a href="" className="nav-bar-links">ACHIEVEMENTS</a>
            <a href="" className="nav-bar-links">CONTACT</a>
            <a href="" className="nav-bar-links">SITE MAP</a>
            </div>
        </div>
    )
}

export default NavBar;