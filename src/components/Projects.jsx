import "./Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Agro Analytics",
      description:
        "Machine Learning based sales forecasting system for pesticide inventory management.",
      tech: "Python • Pandas • NumPy • Flask",
      github: "https://github.com/Ashwinth-dk/Agro-Analytics"
    },
    {
      title: "OrganizeMe",
      description:
        "Secure employee management system to manage employee records and attendance.",
      tech: "React • Supabase • SQL • JavaScript",
      github: "https://github.com/Ashwinth-dk/Organize_Me"
    },
    {
      title: "Sentiment Analysis",
      description:
        "Sentiment Analysis using BERT Transformer and Hugging Face for text classification.",
      tech: "Python • BERT • NLP • Transformers",
      github: "https://github.com/Ashwinth-dk/Sentiment_Analysis"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4" key={index}>
              <div className="project-card h-100">
                <h3>{project.title}</h3>

                <p className="description">{project.description}</p>

                <h4>{project.tech}</h4>

                <div className="project-buttons">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;