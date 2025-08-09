import ContactAnimation from "./ContactAnimation.jsx";
import emailjs from '@emailjs/browser';
import { useEffect, useRef } from 'react';
import Notiflix from "notiflix";

export default function Contact() {
    const form = useRef();

    Notiflix.Notify.init({
        width: '320px',
        position: 'right-top',
        distance: '12px',
        opacity: 0.95,
        borderRadius: '12px',
        rtl: false,
        timeout: 4000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: 'rgba(0,0,0,0.4)',
        plainText: false,
        showOnlyTheLastOne: true,
        clickToClose: true,
        pauseOnHover: true,
        ID: 'NotiflixNotify',
        className: 'notiflix-custom',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '15px',
        cssAnimation: true,
        cssAnimationDuration: 400,
        cssAnimationStyle: 'fade', // smooth fade-in/out
        success: {
            background: '#2ecc71',
            textColor: '#ffffff',
            childClassName: 'success-icon',
            notiflixIconColor: 'violet',
        },
        failure: {
            background: '#e74c3c',
            textColor: '#ffffff',
            childClassName: 'failure-icon',
            notiflixIconColor: 'gray',
        },
        });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_21tx0hq",     // Replace with your service ID
                "template_r12a6y5",    // Replace with your template ID
                form.current,
                "ld6rRmoTC4T4bQKpa"      // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    Notiflix.Notify.success('Your message has been sent successfully.');
                },
                (error) => {
                    Notiflix.Notify.failure('Failed to send your message. Please try again.');
                    console.error(error);
                }
            );
    };

    return (
        <>
        <style>
            {`
            .form-control::placeholder {
            color: gray; /* Light gray */
            }
            `}
        </style>
        <div className="px-3 py-2" style={{minHeight: "99vh", width: "99vw"}}>
            <div className="d-flex flex-column align-items-center text-white">
                <ContactAnimation />
                <h2 className="fw-bold" style={{ color: "violet"}}>Get In Touch</h2>
                <div className="container py-5">
                    <div className="row d-flex align-items-stretch">
                        {/* Contact Form */}
                        <div className="col-md-6 mb-4">
                            <div className="p-4 text-light h-100" style={{ backgroundColor: "rgba(15, 15, 30, 0.7)", borderRadius: "10px" }}>
                                <h4 className="mb-4">
                                    <b>Send me a message</b>
                                </h4>
                                <form ref={form} onSubmit={sendEmail}  className="h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="mb-3">
                                    <label className="form-label text">Name</label>
                                    <input type="text" style={{backgroundColor: "#2f2f36", color: "white"}} name="name" className="form-control" placeholder="Your name" required />
                                    </div>
                                    <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" style={{backgroundColor: "#2f2f36", color: "white"}} name="email"  className="form-control" placeholder="Your email" required />
                                    </div>
                                    <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" style={{backgroundColor: "#2f2f36", color: "white"}} name="message" rows="4" placeholder="Your message" required></textarea>
                                    </div>
                                    <button type="submit" className="text-light btn mt-3 w-100" style={{ backgroundImage: "linear-gradient(to right, #007bff, #ff2c9c)", border: "none" }}><i className="fa-solid fa-paper-plane"></i>&nbsp; <span style={{ fontWeight: "600"}}>Send</span></button>
                                </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-6 mb-4">
                            <div
                            className="p-4 text-light h-100"
                            style={{
                                backgroundColor: "rgba(15, 15, 30, 0.7)",
                                borderRadius: "10px",
                            }}
                            >
                            <h4 className="mb-4">
                                <b>Contact Information</b>
                            </h4>

                            <p className="mb-4">
                                <i className="fa-solid fa-envelope me-2" style={{ color: "#b26be8" }}></i>
                                <span className="fs-5 fw-bold">Email</span>
                                <br />
                                <a
                                    href="mailto:hemanbhoyar6836@gmail.com"
                                    className="text-secondary"
                                >
                                hemanbhoyar6836@gmail.com
                                </a>
                            </p>

                            <p className="mb-4">
                                <i
                                className="fa-solid fa-phone me-2"
                                style={{ color: "#b26be8" }}
                                ></i>
                                <span className="fs-5 fw-bold">Phone</span>
                                <br />
                                <span className="text-secondary">9322477239</span>
                            </p>

                            <p className="mb-4">
                                <i
                                className="fa-brands fa-linkedin me-2"
                                style={{ color: "#b26be8" }}
                                ></i>
                                <span className="fs-5 fw-bold">LinkedIn</span>
                                <br />
                                <a
                                href="https://www.linkedin.com/in/hemant-bhoyar-17bb9431b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary"
                                >
                                linkedin.com/in/hemant-bhoyar-17bb9431b/
                                </a>
                            </p>

                            <p className="mb-4">
                                <i
                                className="fa-brands fa-github me-2"
                                style={{ color: "#b26be8" }}
                                ></i>
                                <span className="fs-5 fw-bold">GitHub</span>
                                <br />
                                <a
                                href="https://github.com/Hemantbhoyar45"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary" 
                                >
                               github.com/Hemantbhoyar45
                                </a>
                            </p>

                            <p className="mb-4">
                                <i
                                className="fa-solid fa-location-dot me-2"
                                style={{ color: "#b26be8" }}
                                ></i>
                                <span className="fs-5 fw-bold">Location</span>
                                <br />
                                <span className="text-secondary">Pune, Maharashtra, India</span>
                            </p>

                            <p className="text-center mt-auto text-light" style={{ fontStyle: "italic" }}>
                                Feel free to reach out for collaborations, questions, or just to say hi!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
