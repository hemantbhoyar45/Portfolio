import { lazy, Suspense } from 'react';
import './background.css'; // Import the same starry background CSS

const Subnavbar = lazy(() => import('./Subnavbar'));
const Skills = lazy(() => import('./Skills'));
const HackathonAnimation = lazy(() => import('./HackathonAnimation'));
const HackathonList = lazy(() => import('./HackathonList'));
const CertificateList = lazy(() => import('./CertificateList'));

export default function About() {
    return (
        <>
            {/* Main container with starry background */}
            <div className="px-4 py-2 text-white starry-background">

                <Suspense fallback={<div>Loading...</div>}>
                    <Subnavbar />
                </Suspense>

                {/* Me Section */}
                <section id="me" className="d-flex align-items-center justify-content-center" style={{ minHeight: "99vh", paddingTop: "80px" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 col-lg-8">
                                <h2 className="display-6 fw-bold mb-4" style={{ color: "violet" }}>Who I'm</h2>
                                <p className="mb-3 text-light">
                                    Hello, I’m Hemant Bhoyar From Kuhi , Nagpur, Maharashtra. I’m currently pursuing a Bachelor’s degree in Computer Science at Vishwakarma Institute Of Technogy, Pune.
                                </p>

                                <p className="mb-3 text-light">
                                    I have completed comprehensive training in Data Structures and Algorithms using C++, solving over 300 problems to strengthen my foundation. Alongside this, I have hands-on experience with the MERN stack—MongoDB, Express.js, React, and Node.js—for full-stack web development. My skills also extend to Firebase services and Bootstrap for UI design. I am proficient in implementing authentication strategies using Passport.js and managing session and database operations with MongoDB, MySQL, and PostgreSQL. Additionally, I have explored Web3 and blockchain technologies like Solidity and smart contracts.
                                </p>

                                <p className="mb-3 text-light">
                                    I’m passionate about building innovative and scalable web applications that solve real-world problems. Rather than overwhelming myself with information, I focus on deeply understanding small details to craft thoughtful and creative solutions. Outside of tech, I find joy and balance in spending time with nature—it reminds me of the value of patience, loyalty, and curiosity.
                                </p>

                                <div className="info-grid row">
                                    <div className="info-item col-md-6 mb-4">
                                        <span className="label fs-5 fw-bold" style={{ color: "violet" }}>Location</span><br />
                                        <span className="value">Nagpur, Maharashtra, India</span>
                                    </div>
                                    <div className="info-item col-md-6 mb-4">
                                        <span className="label fs-5 fw-bold" style={{ color: "violet" }}>Email</span><br />
                                        <span className="value">hemanbhoyar6836@gmail.com</span>
                                    </div>
                                    <div className="info-item col-md-6 mb-4">
                                        <span className="label fs-5 fw-bold" style={{ color: "violet" }}>Study</span><br />
                                        <span className="value">Vishwakarma Institute Of Technogy, Pune.</span>
                                    </div>
                                    <div className="info-item col-md-6 mb-4">
                                        <span className="label fs-5 fw-bold" style={{ color: "violet" }}>Degree</span><br />
                                        <span className="value">B.Tech in Computer Science</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 text-center">
                                <img
                                    src="/yash_1.webp"
                                    loading="lazy"
                                    alt="Hemant Profile"
                                    className="img-fluid rounded-circle shadow bg-secondary bg-opacity-10"
                                    style={{ height: "450px", width: "450px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="container py-5" style={{ minHeight: "99vh", paddingTop: "170px" }}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Skills />
                    </Suspense>
                </section>

                {/* Hackathons & Events Section */}
                <section id="events" className="row align-items-center" style={{ minHeight: "99vh", paddingTop: "150px" }}>
                    <div className="col-12 col-md-8">
                        <Suspense fallback={<div>Loading...</div>}>
                            <HackathonList />
                        </Suspense>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 text-center">
                        <Suspense fallback={<div>Loading...</div>}>
                            <HackathonAnimation />
                        </Suspense>
                    </div>
                </section>

                {/* Certification Section */}
                <section id="certifications" className="row align-items-center" style={{ minHeight: "99vh", paddingTop: "100px" }}>
                    <div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <CertificateList />
                        </Suspense>
                    </div>
                </section>
            </div>
        </>
    );
}
