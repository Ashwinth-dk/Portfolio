import "./About.css";
import profile from "../assets/me.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 text-center">
              <div className="about-image">
                <img src={profile} alt="Ashwinth DK" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="about-content">
                <h3>Network & AI Engineer</h3>

                <p>
                  I'm Ashwinth DK, a Computer Science Engineering student
                  passionate about Artificial Intelligence, Machine Learning,
                  Computer Networks and Backend Development.
                </p>
                <p>
                  I enjoy designing scalable applications, automating networks,
                  and solving real-world engineering problems using AI.
                </p>

                <div className="about-grid">
                  <div className="info-card">
                    <h4>Education</h4>
                    <p>BE CSE</p>
                    <p>Kongu Engineering College</p>
                  </div>

                  <div className="info-card">
                    <h4>CGPA</h4>
                    <p>8.07</p>
                  </div>

                  <div className="info-card">
                    <h4>Projects</h4>
                    <p>3+</p>
                  </div>

                  <div className="info-card">
                    <h4>Certifications</h4>
                    <p>2+</p>
                    <p>Java SE 17 Developer</p>
                    <p>MongoDB Associate Developer</p>
                  </div>

                  <div className="info-card">
                    <h4>Languages</h4>
                    <p>Japanese (N5)</p>
                    <p>English</p>
                    <p>Tamil</p>
                  </div>

                  <div className="info-card">
                    <h4>Focus</h4>
                    <p>Networking</p>
                    <p>Artificial Intelligence</p>
                    <p>Backend Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;