import React from 'react';
import './Social.css';
import { FaLinkedin } from "react-icons/fa";
const Social = () => {
    return (
        <div className= "socialBar">
            <a href='https://www.linkedin.com/in/alexpham00/'>
                <FaLinkedin icon = {FaLinkedin}/>
            </a>
        </div>
    )
}
export default Social