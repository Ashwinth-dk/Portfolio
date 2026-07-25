import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Networking",
      skills: [
        "TCP/IP",
        "OSI Model",
        "Routing & Switching",
        "VLANs",
        "Subnetting",
        "DNS",
        "DHCP",
        "NAT",
        "Network Troubleshooting"
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Python",
        "Machine Learning",
        "BERT",
        "Hugging Face",
        "NLP",
        "Data Analytics"
      ]
    },
    {
      title: "Programming",
      skills: ["C", "Java", "Python", "JavaScript", "React"]
    },
    {
      title: "Backend & Database",
      icon: "⚙",
      skills: ["Node.js", "Spring Boot", "MongoDB", "MySQL", "Supabase"]
    },
    {
      title: "Network Tools",
      icon: "🛠",
      skills: [
        "Wireshark",
        "Nmap",
        "Netcat",
        "Cisco Packet Tracer",
        "GitHub",
        "Linux"
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div className="col-lg-6 col-xl-4" key={index}>
              <div className="skill-card h-100">
                <h3>
                  {category.icon} {category.title}
                </h3>

                <ul>
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;