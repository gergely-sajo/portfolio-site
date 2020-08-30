import React from 'react';
import GithubIcon from '../images/icons/github.png'

function Contact() {
  return (
    <div id="contact" className="page-section page-section--dark">
      <div className="wrapper">
        <h2 className="page-section__title page-section__title--light">Contact</h2>

        <form className="contact-email-form" action="https://formspree.io/myynqppo" method="POST">
          <div className="contact-email-form__your-email">
            <label>Your email:<br/><input className="contact-email-form__input" type="text" name="_replyto" /></label>
          </div>
          <div className="contact-email-form__message">
            <label>Your message:<br/><textarea className="contact-email-form__textarea" name="message"></textarea></label>
          </div>
          <div className="generic-centered">
            <button className="btn" type="submit">Send message</button>
          </div>
        </form>

        <p className="contact__email page-section__text-centered generic-centered s-b-m">Or if you prefer here is my email address: <a href="mailto:gary.sajo@gmail.com">gary.sajo@gmail.com</a></p>
        <div className="page-section__narrow-centered generic-centered">
          <a href="mailto:gary.sajo@gmail.com"><img className="contact__social-icon" src="https://img.icons8.com/color/48/000000/secured-letter.png"/></a>
          <a href="https://www.linkedin.com/in/gergely-saj%C3%B3-a0267486/" target="_blank"><img className="contact__social-icon" src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
          <a href="https://github.com/gergely-sajo" target="_blank"><img className="contact__social-icon" src={GithubIcon}/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;