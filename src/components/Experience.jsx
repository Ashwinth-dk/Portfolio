import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="duration">2026 • 7 Days</span>

              <h3>Inplant Trainee</h3>

              <h4>Domain Hostly & Web Hosting</h4>

              <p>
                Completed intensive hands-on training covering the OSI Model,
                TCP/IP architecture, Routing, Switching and practical
                networking labs.
              </p>

              <div className="tags">
                <span>OSI</span>
                <span>TCP/IP</span>
                <span>Routing</span>
                <span>Switching</span>
                <span>Networking Labs</span>
                <span>AI Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;