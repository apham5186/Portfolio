import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <nav className= "navbar">
            <img src="PhamALogo.png" alt="" className = 'logo'/>
            <div className="desktopMenu">
                <Link activeClass= 'active' to = 'intro' spy = {true} smooth = {true} duration ={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass= 'active' to = 'about' spy = {true} smooth = {true} offset = {-100} duration ={500} className="desktopMenuListItem">About</Link>
                <Link activeClass = 'active' to= 'skills' spy = {true} smooth = {true} offset = {-100} duration ={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass = 'active' to = 'projects' spy = {true} smooth = {true} offset = {-100} duration ={500}className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contactsPg').scrollIntoView({behavior:'smooth'});}}>
                <img src="contact.png" alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}
export default Navbar