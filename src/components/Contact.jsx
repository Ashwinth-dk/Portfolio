import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always interested in opportunities involving
            Networking, Artificial Intelligence,
            Software Development, and innovative projects.
          </p>

          <div className="info">

            <p>
              <FaPhone />
              +91 97896 17978
            </p>

            <p>
              <FaEnvelope />
              ashwinth1805dk@gmail.com
            </p>

            <p>
              <FaGithub />
              github.com/Ashwinth-dk
            </p>

            <p>
              <FaLinkedin />
              linkedin.com/in/ashwinth-dk
            </p>

            <p>
              <FaMapMarkerAlt />
              Tamil Nadu, India
            </p>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;