import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about">
            <div className="aboutContent">
                <div className="aboutContentLeft">
                    <span className='aboutMe'>About Me!</span>
                    </div>
                    <div className='aboutContentRight'>
                    <p className='aboutPara'>Hey, I'm Alex. I'm a Software Developer who recently graduated from Rutgers and I'm currently seeking entry level positions</p>
                    <p className='aboutEnd'>If I'm not on my computer you can find me hanging out with my friends and family.</p>
                    </div>     
            <div className='aboutContentBottom'>
                <img src = "Photo1.Jpeg" alt=''></img>
                <img src='Photo2.jpg'alt=''></img>
                <img src='Photo3.jpg'alt=''></img>
                </div>
            </div>
        </section>
    )
}
export default About