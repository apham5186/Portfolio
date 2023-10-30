
import React from "react";
import './Contacts.css';
const Contacts = ()=>{
  return (
      <section id='contactsPg'>
         <div className="contactBox">
          <h1 className="contactTitle">Connect!</h1>
          <span className="contactDesc"> Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm">
            <input type='text'className="name"placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your Email"/>
            <textarea className ='message' cols="30" rows="10" placeholder="Say something nice!"></textarea>
            <button type='submit' value='Send'className="sendBtn">SEND!</button>
          </form>
         </div>
      </section>
  );
}
export default Contacts;