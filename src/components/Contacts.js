
import React, {useRef} from "react";
import './Contacts.css';
import emailjs from '@emailjs/browser';
const Contacts = ()=>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvoyjxb', 'template_9alshyg', form.current, '8mhmg3y4rMDD8AVWJ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
      <section id='contactsPg'>
         <div className="contactBox">
          <h1 className="contactTitle">Connect!</h1>
          <span className="contactDesc"> Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type='text'className="name"placeholder="Your Name" name='your_name' />
            <input type="email" className="email" placeholder="Your Email" name='your_email' />
            <textarea className ='message' cols="30" rows="10" placeholder="Say something nice!"></textarea>
            <button type='submit' value='Send'className="sendBtn">SEND!</button>
          </form>
         </div>
      </section>
  );
}
export default Contacts;