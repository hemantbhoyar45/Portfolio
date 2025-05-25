import Hero from './Hero';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Home() {
    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3 },
        }),
    };

    return (
        <div className="px-3 py-4 text-white" style={{minWidth: "99vw"}}>
            {/* Hero Section */}
            <section className="py-5 mt-4" style={{ minHeight: "80vh" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-8 mb-4 mb-md-0">
                            <h1 className="display-4 fw-bold mb-2">Hi there,</h1>
                            <h1 className="display-5 fw-bold text-primary mb-3">I'm Yash Atkari</h1>
                            <p className="fs-4 lead text-secondary">
                                <Typewriter
                                    words={[
                                    'Aspiring Software Engineer',
                                    'Full Stack Web Developer',
                                    'MERN Stack Enthusiast',
                                    'Open Source Contributor'
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={20}
                                    deleteSpeed={20}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 text-center">
                            <Hero />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-5" style={{ minHeight: "50vh" }}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-8">
                    <h2 className="display-6 fw-bold mb-4">Let Me Introduce Myself</h2>
                    {[
                    "Hello, I'm Yash Atkari from Mandhal, Maharashtra. I'm currently pursuing my Bachelor's in Technology at G H Raisoni College of Engineering, Nagpur.",
                    "I've completed Data Structures and Algorithms in Java and have hands-on experience with the MERN stack for full-stack development.",
                    "I'm passionate about building innovative solutions and constantly improving my skill set.",
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

            {/* Social Links Section */}
            <section className="py-5 text-center" style={{ minHeight: "20vh" }}>
                <h2 className="display-6 fw-bold mb-4">Find Me On</h2>
                <div className="col-12 text-center">
                        <a href="https://www.linkedin.com/in/yashatkari2005/" target='_blank' className="fs-3 ms-3" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in" title='LinkedIn'></i></a>
                        <a href="https://github.com/Yash-Atkari" target='_blank' className="fs-3 ms-3" rel="noopener noreferrer"><i className="fa-brands fa-github" title='Github'></i></a>
                        <a href="#" className="fs-3" rel="noopener noreferrer"><i className="fa-brands fa-twitter ms-3" title='Twitter'></i></a>
                        <a href="#" className="fs-3" rel="noopener noreferrer"><i className="fa-brands fa-instagram ms-3" title='Instagram'></i></a>
                </div>
            </section>
        </div>
    );
}
