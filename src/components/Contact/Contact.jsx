import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

import { EnvelopeSimple, WhatsappLogo } from "phosphor-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_efjqsc9",
      "template_3wrufkg",
      form.current,
      "vfhncTl1g1nSRn2zL"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <EnvelopeSimple
              size={24}
              weight="thin"
              className="contact__option-icon"
            />
            <h4>Email</h4>
            <h5>shayaneteixeira@gmail.com</h5>
            <a href="mailto:shayaneteixeira@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <WhatsappLogo
              size={24}
              weight="thin"
              className="contact__option-icon"
            />
            <h4>Linkedin</h4>
            <h5>Shayane Teixeira</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5527996189892"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary contact__text">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
