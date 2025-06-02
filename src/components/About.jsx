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
            <section id="me" className="d-flex align-items-center justify-content-center" style={{ minHeight: "99vh", paddingTop: "80px"}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-8">
                    <h2 className="display-6 fw-bold mb-4" style={{color: "violet"}}>Who I'm</h2>
                    {[
                        "Hello, I’m Yash Atkari from Mandhal, Maharashtra. I’m currently pursuing a Bachelor’s degree in Information Technology at G H Raisoni College of Engineering, Nagpur.",
                        "I have completed comprehensive training in Data Structures and Algorithms using Java, solving over 300 problems to strengthen my foundation. Alongside this, I have hands-on experience with the MERN stack—MongoDB, Express.js, React, and Node.js—for full-stack web development. My skills also extend to Firebase services and Bootstrap for UI design. I am proficient in implementing authentication strategies using Passport.js and managing session and database operations with MongoDB, MySQL, and PostgreSQL. Additionally, I have explored Web3 and blockchain technologies like Solidity and smart contracts.",
                        "I’m passionate about building innovative and scalable web applications that solve real-world problems. Rather than overwhelming myself with information, I focus on deeply understanding small details to craft thoughtful and creative solutions. Outside of tech, I find joy and balance in spending time with nature—it reminds me of the value of patience, loyalty, and curiosity."
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
                    <div class="info-grid row">
                        <div class="info-item col-md-6 mb-4">
                            <span class="label fs-5 fw-bold" style={{ color: "violet" }}>Location</span><br />
                            <span class="value">Nagpur, Maharashtra, India</span>
                        </div>
                        <div class="info-item col-md-6 mb-4">
                            <span class="label fs-5 fw-bold" style={{ color: "violet" }}>Email</span><br />
                            <span class="value">yashatkari7@gmail.com</span>
                        </div>
                        <div class="info-item col-md-6 mb-4">
                            <span class="label fs-5 fw-bold" style={{ color: "violet" }}>Study</span><br />
                            <span class="value">G H Raisoni College of Engineering, Nagpur</span>
                        </div>
                        <div class="info-item col-md-6 mb-4">
                            <span class="label fs-5 fw-bold" style={{ color: "violet" }}>Degree</span><br />
                            <span class="value">B.Tech in Information Technology</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <img
                    src="/yash_1.png"
                    alt="Yash Profile"
                    className="img-fluid rounded-circle shadow bg-secondary bg-opacity-10"
                    style={{ height: "450px", width: "450px", objectFit: "cover" }}
                    />
                </div>
                </div>
            </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="container py-5" style={{ minHeight: "99vh", paddingTop: "170px" }}>                
                <div className="row g-4 text-light" style={{marginTop: "75px"}}>
                    {[
                    {
                        title: "Programming Languages",
                        icon: "fa-solid fa-code text-primary",
                        items: ["Java", "JavaScript", "Node.js", "C", "Python", "HTML", "CSS"]
                    },
                    {
                        title: "Libraries & Frameworks",
                        icon: "fa-solid fa-diagram-project text-warning",
                        items: ["React.js", "Express.js", "Bootstrap", "Web3.js"]
                    },
                    {
                        title: "Tools & Platforms",
                        icon: "fa-solid fa-toolbox text-danger",
                        items: ["Git", "GitHub", "VS Code", "Firebase", "Microsoft Azure", "IntelliJ IDEA", "Hoppscotch"]
                    },
                    {
                        title: "Databases",
                        icon: "fa-solid fa-database text-secondary",
                        items: ["MongoDB", "MySQL", "PostgreSQL"]
                    },
                    {
                        title: "CS Fundamentals",
                        icon: "fa-solid fa-gears text-success",
                        items: ["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS", "Computer Networking"]
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
                        items: ["MERN Stack", "RESTful APIs", "Responsive Design"]
                    }
                    ].map((category, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className="p-3 rounded-4 h-100 shadow-sm border border-secondary" data-tilt style={{ backgroundColor: "rgba(15, 15, 30, 0.7)" }}>
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
            <section id="events" className="row align-items-center" style={{minHeight: "99vh", paddingTop: "150px" }}>
                <div className="col-12 col-md-8">
                    <HackathonList />
                </div>
                <div className="col-12 col-md-4 col-lg-4 text-center">
                    <Hackathon />
                </div>
            </section>

            {/* Certification Section */}
            <section id="certifications" className="row align-items-center" style={{minHeight: "99vh", paddingTop: "100px"}}>
                <div>
                    <CertificateList />
                </div>
            </section>
        </div>
        </>
    );
};
