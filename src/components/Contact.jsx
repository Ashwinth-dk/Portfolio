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
      <div className="container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="contact-info h-100">
              <h3>Let's Connect</h3>

              <p>
                I'm always interested in opportunities involving Networking,
                Artificial Intelligence, Software Development, and innovative
                projects.
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
          </div>

          <div className="col-lg-6">
            <form className="contact-form h-100">
              <input type="text" placeholder="Your Name" className="form-control" />
              <input type="email" placeholder="Your Email" className="form-control" />
              <textarea rows="6" placeholder="Your Message" className="form-control"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;