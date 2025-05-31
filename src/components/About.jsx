import Subnavbar from './Subnavbar';
import { motion } from 'framer-motion';
import Hackathon from './Hackathon';
import HackathonList from './HackathonList';
import CertificateList from './CertificateList';

export default function About() {
    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3 },
        }),
    };
    
    return (
        <>
        <div className="px-4 py-2 text-white" >
            <Subnavbar />
            {/* Me Section */}
            <section id="me" style={{ minHeight: "99vh", paddingTop: "200px" }}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-8">
                    <h2 className="display-6 fw-bold mb-4" style={{color: "violet"}}>Who I'm</h2>
                    {[
                        "Hello, I'm Yash Atkari from Mandhal, Maharashtra. I'm currently pursuing a Bachelor's degree in Information Technology at G H Raisoni College of Engineering, Nagpur",
                        "I have completed Data Structures and Algorithms in Java and have hands-on experience with the MERN stack for full-stack web development.",
                    "I'm passionate about building scalable web applications and continuously learning new technologies to solve real-world problems.",
                    ].map((text, i) => (
                    <motion.p
                        key={i}
                        className="mb-3 text-light"
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={i}
                    >
                        {text}
                    </motion.p>
                    ))}
                </div>

                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                    src="/yash_1.png"
                    alt="Yash Profile"
                    className="img-fluid rounded-circle shadow bg-secondary bg-opacity-10"
                    style={{ height: "250px", width: "250px", objectFit: "cover" }}
                    />
                </div>
                </div>
            </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="container py-5" style={{ minHeight: "99vh", paddingTop: "170px" }}>                
                <div className="row g-4 text-light" style={{marginTop: "65px"}}>
                    {[
                    {
                        title: "Programming Languages",
                        icon: "fa-solid fa-code text-primary",
                        items: ["Java", "JavaScript", "Node.js", "C", "Python", "HTML", "CSS"]
                    },
                    {
                        title: "Libraries & Frameworks",
                        icon: "fa-solid fa-diagram-project text-warning",
                        items: ["React.js", "Express.js", "OpenAI API", "Web3.js"]
                    },
                    {
                        title: "Tools & Platforms",
                        icon: "fa-solid fa-toolbox text-danger",
                        items: ["Git", "GitHub", "VS Code", "Microsoft Azure", "IntelliJ IDEA"]
                    },
                    {
                        title: "Databases",
                        icon: "fa-solid fa-database text-secondary",
                        items: ["MongoDB", "PostgreSQL", "Firebase"]
                    },
                    {
                        title: "CS Fundamentals",
                        icon: "fa-solid fa-gears text-success",
                        items: ["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS"]
                    },
                    {
                        title: "Blockchain",
                        icon: "fa-brands fa-ethereum text-info",
                        items: ["Solidity", "Ethereum", "Smart Contracts", "MetaMask", "Remix IDE"]
                    },
                    {
                        title: "AI/ML",
                        icon: "fa-solid fa-robot text-info-emphasis",
                        items: ["Azure AI", "Scikit-learn", "OpenAI API", "Hugging Face", "LangChain"]
                    },
                    {
                        title: "Web Development",
                        icon: "fa-solid fa-globe text-light-emphasis",
                        items: ["Responsive Design", "RESTful APIs", "Frontend", "Backend", "Full Stack"]
                    }
                    ].map((category, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className="p-4 rounded-4 h-100 shadow-sm border border-secondary" data-tilt style={{ backgroundColor: "rgba(170, 170, 170, 0.2" }}>
                        <h5 className="mb-3 d-flex align-items-center gap-2" style={{color: "violet"}}>
                            <i className={`${category.icon}`}></i> {category.title}
                        </h5>
                        <ul className="list-unstyled">
                            {category.items.map((item, idx) => (
                            <li key={idx} className="mb-1">
                                <span className="text-info me-2">•</span> {item}
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </section>         

            {/* Hackathons & Events Section */}
            <section id="events" className="row align-items-center px-5" style={{minHeight: "99vh", paddingTop: "150px" }}>
                <div className="col-12 col-md-8">
                    <HackathonList />
                </div>
                <div className="col-12 col-md-4 col-lg-4 text-center">
                    <Hackathon />
                </div>
            </section>

            {/* Certification Section */}
            <section id="certifications" className="row align-items-center px-5" style={{minHeight: "99vh", paddingTop: "0px" }}>
                <div>
                    <CertificateList />
                </div>
            </section>
        </div>
        </>
    );
};
