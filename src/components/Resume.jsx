import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Resume() {
    return (
        <>
        <div className="bg-dark text-white d-flex flex-column" style={{width: "99vw"}}>
            <Navbar />

            <div className="container my-5 d-flex flex-column align-items-center">
                <a href="/Yash_Atkari_Resume.pdf" download className="btn btn-outline-light mb-4">
                    Download Resume
                </a>

                <div style={{width: "90vw"}}>
                    <iframe src="/Yash_Atkari_Resume.pdf" title="PDF Viewer"
                        style={{
                            width: "100%",
                            height: "700px",
                            border: "2px solid white",
                            borderRadius: "10px"
                        }}
                    />
                </div>

                <a href="/Yash_Atkari_Resume.pdf" download className="btn btn-outline-light mt-4">
                    Download Resume
                </a>
            </div>

            <Footer />
        </div>
        </>
    );
}
