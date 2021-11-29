import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css';

function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="top-left-div">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            </div>
            <div className="top-center-div">
                <ul className="topbar-ul">
                    <li className="topbar-ul-li"><Link className="link" to="/">HOME</Link></li>
                    <li className="topbar-ul-li"><Link className="link" to="/settings">ABOUT</Link></li>
                    <li className="topbar-ul-li"><Link className="link" to="/settings">CONTACT</Link></li>
                    <li className="topbar-ul-li"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topbar-ul-li">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="top-right-div">
                <i className="fas fa-search"></i>
                { user ? <img src="/assets/profile.jpg" alt="profile" />
                : <ul className="topbar-ul">
                    <li className="topbar-ul-li"><Link className="link" to="/login">LOGIN</Link></li>
                    <li className="topbar-ul-li"><Link className="link" to="/register">REGISTER</Link></li>
                    </ul>}
                
            </div>
        </div>
    )
}

export default TopBar
