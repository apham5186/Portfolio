import React from'react';
import './skills.css';

const Skills = ()=>{
    return (
        <section id='skills'>
            <span className='skillTitle'>Programming Languages</span>
            <div className="skillBars">
            <img src="Coding.png" alt="" className='bg'></img>
            <div className ="skillGroup">
                <button className='javaBtn'>Java</button>
                <button className='pythonBtn'>Python</button>
                <button className='HTMLBtn'>HTML</button>
                <button className='JSBtn'>JavaScript</button>
                <button className='reactBtn'>React</button>
                <button className='CSSBtn'>CSS</button>
                <button className='SQLBtn'>SQL</button>
                <button className='c#Btn'>C#</button>
                <button className='gitBtn'>GIT</button>
                </div>
            </div>
          
        </section>
    );
}
export default Skills;