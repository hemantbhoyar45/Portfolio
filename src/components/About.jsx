import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function About() {
    return (
        <>
        <Navbar />
        <div className="px-4 py-4 bg-dark text-white" >
            <section>
                <div className="container py-4">
                    <div>
                        <h2>Know Who I'm</h2>
                        <p>Hi everyone, I am Yash Atkari. Currently in 2nd year pursuing bachelor's in Technology from G H Raisoni College of Engineering, Nagpur</p>
                        <p>This year I had participated in 4 hackathons to work on real world problem and to contribute to the innovative solutions. I also gain a certificate of achievement in one of those hackathons.</p>
                    </div>
                    <div>
                        <h4>Attended Hackathons in 2025</h4>
                        <ol>
                            <li>Healthcare Management System Hackathon at <b>Fluxus IIT Indore</b></li>
                            <li>Code of Phoenix <b>24hrs</b> Hackathon at <b>IIIT Naya Raipur</b></li>
                            <li>Ecothon 2025 Hackathon at <b>Sipna College of Engineering and Technology, Amravati</b></li>
                            <li>HackOn 2025 <b>8hrs</b> Hackathon at <b>Government College of Engineering, Nagpur</b></li>
                        </ol>
                    </div>
                </div>
            </section>
            <section style={{paddingTop: "100px"}} className="d-flex flex-column align-items-center">
                <h2>Professional SkillSet</h2>
                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/java.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/mongodb.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/expressjs.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/react.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/nodejs.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/html.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/css.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/js.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/bootstrap.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/mysql.png" alt="java_image" className="h-75" />
                    </div>
                </div>
            </section>
            <section style={{height: "50vh"}} className="d-flex flex-column align-items-center justify-content-center">
                <h2>Tools I Use</h2>
                <div className="d-flex gap-3 flex-wrap">
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/java.png" alt="java_image" className="h-75" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100px", width: "200px", border: "2px solid black", borderRadius: "5px"}}>
                        <img src="/java.png" alt="java_image" className="h-75" />
                    </div>
                </div>
            </section>
            <section className="d-flex flex-column align-items-center">
                <h2>Days I Code</h2>
                <div>
                    <img src="/code_image.png" alt="java_image" />
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}
