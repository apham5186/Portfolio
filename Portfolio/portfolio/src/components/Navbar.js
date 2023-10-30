import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <nav className= "navbar">
            <img src="PhamALogo.png" alt="" className = 'logo'/>
            <div className="desktopMenu">
                <Link activeClass= 'active' to = 'intro' className="desktopMenuListItem">Home</Link>
                <Link activeClass= 'active' to = 'about' className="desktopMenuListItem">About</Link>
                <Link activeClass = 'active' to='skills' className="desktopMenuListItem">Skills</Link>
                <Link activeClass = 'active' to = 'projects' className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src="contact.png" alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}
export default Navbar