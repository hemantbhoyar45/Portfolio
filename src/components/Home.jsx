import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Home() {

    return (
        <>
        <Navbar />
        <div className="px-4 py-4 bg-dark text-white">
        <section className="d-flex justify-content-between align-items-center px-4 py-2" style={{height: "80vh"}}>
            <div>
                <h1>Hi there</h1>
                <h1>I'm Yash Atkari</h1>
                <p>Aspiring Software Engineer | Full Stack Developer</p>
            </div>
            <img style={{height: "350px", width: "250px"}} src="/portfolio_image_bg.png" alt="portfolio_image" />
        </section>
        <section className="d-flex justify-content-between align-items-center px-4 py-2" style={{height: "80vh"}}>
            <div>
                <h1>Let Me Introduce Myself</h1>
                <p>Hello, My name is Yash Atkari. I belong to Mandhal, state of Maharashtra. Currently I pursuing my Bachelor's in Technology from G H Raisoni College of Engineering, Nagpur.</p>
                <p>I have completed Data Structures and Algorithms in Java and have hands-on experience with the MERN stack for full-stack web development.</p>
                <p>I'm passionate about building innovative solutions and consistently improving.</p>
            </div>
            <img style={{height: "350px", width: "350px"}} src="/yash_1.png" alt="profile_image" />
        </section>
        <section className="d-flex flex-column justify-content-center align-items-center px-4 py-2 mb-5">
            <h1>Find me on</h1>
            <div className="d-flex gap-3">
                <a href="https://www.linkedin.com/in/yashatkari2005/" target='_blank' className="fs-3"><i className="fa-brands fa-linkedin-in" title='LinkedIn'></i></a>
                <a href="https://github.com/Yash-Atkari" target='_blank' className="fs-3"><i className="fa-brands fa-github" title='Github'></i></a>
                <a href="#" className="fs-3"><i className="fa-brands fa-twitter" title='Twitter'></i></a>
                <a href="#" className="fs-3"><i className="fa-brands fa-instagram" title='Instagram'></i></a>
            </div>
        </section>
        </div>
        <Footer />
        </>
    )
}
