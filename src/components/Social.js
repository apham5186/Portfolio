import React from 'react';
import './Social.css';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Social = () => {
    return (
        <nav className= "socialBar">
            <a href='https://www.linkedin.com/in/alexpham00/'>
                <FaLinkedin icon = {FaLinkedin}/>
            </a>
            <a href= 'https://github.com/apham5186'>
                <FaGithubSquare icon = {FaGithubSquare}/>
            </a>
        </nav>
    )
}
export default Social