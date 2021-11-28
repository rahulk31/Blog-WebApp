import React from 'react'
import './topbar.css';

function TopBar() {
    return (
        <div className="top">
            <div className="top-left-div">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            </div>
            <div className="top-center-div">
                <ul>
                    <li>HOME</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>Write</li>
                    <li>LOGOUT</li>
                </ul>
            </div>
            <div className="top-right-div">
                <i className="fas fa-search"></i>
                <img src="/assets/profile.jpg" alt="profile" />
            </div>
        </div>
    )
}

export default TopBar
