import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <div className='Welcome'>
                <span className="hello">Hey There! </span>
                <span className="introText">I'm <span className='introName'>Alex Pham</span> and welcome to my website!</span>
                <p className="introPara">Come get to know more about me!</p>
                </div>     
                <div class="scroll-down"></div>
            </div>
        </section>
    )
}
export default Intro