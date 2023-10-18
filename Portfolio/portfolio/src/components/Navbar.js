import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <nav className= "navbar">
            <img src="PhamALogo.png" alt="" className = 'logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Skills</Link>
                <Link className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src="contact.png" alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}
export default Navbar