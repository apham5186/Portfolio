
import React from "react";

import './projects.css';
import Button from 'react-bootstrap/Button';
import Card from'react-bootstrap/Card';

const Projects = ()=>{
  return (
      <section id='projects'>
          <h1 className='projectTitle'>What I've worked on</h1>
          <div className = 'projectContent'>
            <div className = 'project1'>
            <Card border = "light" bg = 'dark' text = "light" style ={{ width: '20rem', height:'30rem'}}>
              <Card.Header>Discord Bot</Card.Header>
              <Card.Img className = 'projectImg' variant = "top" src= "Discord.png" />
              <Card.Body>
                <Card.Text>
                A discord bot created for a personal server. 
                Used to post videos for certain holidays, Wishing everyone Merry Christmas, Happy Thanksgiving, etc.
                </Card.Text>
                <Button href="https://github.com/apham5186/Usher-Bot" variant= 'light'>Github</Button>
              </Card.Body>
            </Card>
            </div>
            <div>
              <Card border = "light" bg = 'dark' text = "light" style ={{ width: '20rem', height:'30rem'}}>
              <Card.Header>Tic-Tac-Toe</Card.Header>
              <Card.Img className = 'projectImg' variant = "top" src= "tic-tac-toe.jpg" />
              <Card.Body>
                <Card.Text>
                A discord bot created for a personal server.
                Used to post videos for certain holidays, Wishing everyone Merry Christmas, Happy Thanksgiving, etc.
                </Card.Text>
                <Button href = "https://github.com/apham5186/TicTacToe" variant= 'light'>Github</Button>
              </Card.Body>
              </Card>
            </div>
            <div>
              <Card border = "light" bg = 'dark' text = "light" style ={{ width: '20rem', height:'30rem'}}>
                <Card.Header>Gym Manager</Card.Header>
                <Card.Img className = 'projectImg' variant = "top" src= "gymManager.png" />
                <Card.Body>
                  <Card.Text>
                  A discord bot created for a personal server.
                  Used to post videos for certain holidays, Wishing everyone Merry Christmas, Happy Thanksgiving, etc.
                  </Card.Text>
                  <Button href= "https://github.com/apham5186/Gym-Manager" variant= 'light'>Github</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
      </section>
  );
}
export default Projects;