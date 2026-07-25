import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section className="hero py-5" id="home">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center hero-content">
            <p className="hello">Hello, I'm</p>

            <h1>
              <span className="blue">ASHWINTH</span> DK
            </h1>

            <h2>Network Engineer | AI Engineer</h2>

            <p className="description">
              Passionate about Artificial Intelligence, Machine Learning,
              Computer Networks and Secure Backend Systems. I enjoy building
              intelligent applications and designing scalable network
              solutions.
            </p>

            <div className="buttons justify-content-center flex-wrap">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary mb-3 mb-md-0"
              >
                View Resume
              </a>

              <a href="#projects" className="btn secondary">
                View Projects
              </a>
            </div>

            <div className="socials">
              <a
                href="https://github.com/Ashwinth-dk"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ashwinth-dk"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:ashwinth1805dk@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;