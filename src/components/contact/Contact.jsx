import "./contact.css";
import Email from "../../img/email.png";
import insta from "../../img/insta.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
          setError(true)
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's create together</h1>
          <div className="c-info">
            <div className="c-info-item">
            <a href={'mailto:management@jeffmaranan.com'} target="_blank" rel="noopener noreferrer" ><img className="c-icon" src={Email} alt="Email" /></a>
              management@jeffmaranan.com
            </div>
            <div className="c-info-item">
            <a href={'https://www.instagram.com/jeff.maranan/?hl=en'} target="_blank" rel="noopener noreferrer" ><img className="c-icon" src={insta} alt="Instagram" /></a>
              @jeff.maranan
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" aria-label="Name" />
            <input type="text" placeholder="Subject" name="user_subject" aria-label="Subject" />
            <input type="text" placeholder="Email" name="user_email" aria-label="Email" />
            <textarea rows="5" placeholder="Message" name="message" aria-label="Message" />
            <button className="btn btn-primary">Submit</button>
            {done && <p className="c-status" role="status">Thank you — your message has been sent.</p>}
            {error && <p className="c-status c-error" role="alert">Something went wrong. Please try again or email directly.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
