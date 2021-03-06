import React from "react"
import "./nav2-bar.css"

function Nav2Bar(){
    return(
        <div className = "nav2bar-container">
            <div className = "nav2bar-left-conatiner">
                <a href="" className = "nav2bar-links">+91 9849765102</a>
                <a href="" className = "nav2bar-links">ieeevbitsbdoc@gmail.com</a>
            </div>
            <div className = "nav2bar-right-container">
                <a href = "" className = "nav2bar-links">IEEE.org</a>
                <a href = "" className = "nav2bar-links">IEEE Explore Digital Library</a>
                <a href = "" className = "nav2bar-links">IEEE Spectrum</a>
                <a href = "" className = "nav2bar-links">IEEE Standards</a>
                <a href = "" className = "nav2bar-links">More Sites</a>
                <a href = "" className = "nav2bar-links">Join IEEE</a>
            </div>

        </div>
    )
}
export default Nav2Bar;