
import React from "react";
import './projects.css';
const Projects = ()=>{
  return (
      <section id='projects'>
          <h1 className='projectTitle'>What I've worked on</h1>
          <div className = 'projectContent'>
            <div className='project1'>
              <div className="project1Content">
            <img src= 'Discord.png' alt='' className="project1Img"></img>
              <span className="project1Title">Discord Bot</span>
              <p className="project1Para">A discord bot created for a personal server. Used to post videos for certain holidays, Wishing everyone Merry Christmas, Happy Thanksgiving, etc.</p>
              </div>
            </div>
          </div>
      </section>
  );
}
export default Projects;