import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <section className="contact-section">
        <h2>Contact Me</h2>
        <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/DanielSanJP"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="contact-info">
          <a href="mailto:daniel.m514@outlook.com" className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>daniel.m514@outlook.com</span>
          </a>
          <a href="tel:+021815415" className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>(021) 815415</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
