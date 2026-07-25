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
         
            skills: [
                "C",
                "Java",
                "Python",
                "JavaScript",
                "React"
            ]
        },

        {
            title: "Backend & Database",
            icon: "⚙",
            skills: [
                "Node.js",
                "Spring Boot",
                "MongoDB",
                "MySQL",
                "Supabase"
            ]
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

            <h2 className="section-title">
                Technical <span>Skills</span>
            </h2>

            <div className="skills-container">

                {skillCategories.map((category, index) => (

                    <div className="skill-card" key={index}>

                        <h3>
                            {category.icon} {category.title}
                        </h3>

                        <ul>

                            {category.skills.map((skill, i) => (

                                <li key={i}>{skill}</li>

                            ))}

                        </ul>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default Skills;