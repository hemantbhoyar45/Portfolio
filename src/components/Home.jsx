import Hero from './Hero';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';  // FaGithub is the regular GitHub logo

export default function Home() {
    return (
        <><style>{`
            .gradient-text {
                background: linear-gradient(to right, #007bff, #5f57ff, #b33df2, #ff2c9c);
                background-size: 100%;
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                -webkit-text-fill-color: transparent;
                display: inline-block;
            }
        `}</style>
        <div className="px-3 py-4 text-white" style={{minWidth: "99vw"}}>
            {/* Hero Section */}
            <section className="py-5 mt-4" style={{ minHeight: "80vh" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-8 mb-4 mb-md-0">
                            <h1 className="fw-bold mb-2">Hi there,</h1>
                            <h1 className="gradient-text display-5 fw-bold mb-3">I'm Yash Atkari</h1>
                            <p className="fs-4 lead text-secondary">
                                <Typewriter
                                    words={[
                                    'Aspiring Software Engineer',
                                    'Full Stack Web Developer',
                                    'MERN Stack Enthusiast',
                                    'AI Explorer',
                                    'Blockchain Enthusiast'
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={60}
                                    deleteSpeed={20}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 text-center">
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Links Section */}
            <section className="py-5 text-center" style={{ minHeight: "20vh" }}>
                <h2 className="display-6 fw-bold">Find me on</h2>
                <div className="col-12 text-center pe-3">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/yashatkari2005/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fs-3 ms-3"
                        >
                            <i
                            className="fa-brands fa-linkedin-in p-2"
                            style={{ color: "#b26be8", transition: "all 0.3s ease" }}
                            title="LinkedIn"
                            ></i>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Yash-Atkari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fs-3 ms-3"
                        >
                            <i
                            className="fa-brands fa-github p-2"
                            style={{ color: "#b26be8", transition: "all 0.3s ease" }}
                            title="GitHub"
                            ></i>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:youremail@example.com" // Replace with your actual email
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fs-3 ms-3"
                            >
                            <i
                                className="fa-solid fa-envelope p-2"
                                style={{ color: "#b26be8", transition: "all 0.3s ease" }}
                                title="Email"
                            ></i>
                        </a>
                </div>
            </section>
        </div>
        </>
    );
}
