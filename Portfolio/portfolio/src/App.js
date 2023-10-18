import React from "react";
import Contact from "./components/Contacts";
import Navbar from "./components/Navbar";
import Intro from "./components/intro"
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const intro = document.querySelector('.intro')

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
   intro.classList.add('display-none');
  }, 2000);
})

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Intro />
      <Skills/>
    </main>
  );
}