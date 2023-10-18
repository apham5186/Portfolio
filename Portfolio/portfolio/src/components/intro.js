import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hey There! </span>
                <span className="introText">I'm <span className='introName'>Alex</span> and welcome to my website!</span>
                <p className="introPara">I'm a recent grad from Rutgers with a bachelors degree in <br /> Computer Science, currently seeking entry level positions</p>
                <img src="Coding.png" alt="" className='bg'></img>
            </div>
        </section>
    )
}
export default Intro