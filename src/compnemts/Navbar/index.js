import React from 'react';
import './style.css';
const Navbar=(props)=> {
    return (
        <div className="navbar">
            <ul className="navbarmenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div>
                <input/>
                <img src={require("../../assets/icon/search.png")} alt="search"/>
            </div>
        </div>
    )
}

export default Navbar;
