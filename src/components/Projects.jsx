import Laptop from './Laptop.jsx'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Projects() {
    return (
        <>
        <Navbar />
        <div className="container-fluid px-4 py-4 bg-dark text-white">
            <div className="d-flex flex-wrap justify-content-between">
                <div className="w-25 border rounded p-2">
                    <h3 className="text-center m-0">Aarogyam</h3>
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <Laptop src="/aarogyam_image.png" />
                    </div>
                    <div className="p-2">
                    A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency.
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-5 p-2">
                        <a href="https://github.com/Yash-Atkari/Aarogyam" target='_blank' className="btn btn-outline-light">Code</a>
                        <a href="https://aarogyam-hypg.onrender.com/" target='_blank' className="btn btn-outline-light">Demo</a>
                    </div>
                </div>
                <div className="w-25 border rounded p-2">
                    <h3 className="text-center m-0">Wanderlust</h3>
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <Laptop src="/wanderlust_image.png" />
                    </div>
                    <div className="p-2">
                    A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency.
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-5 p-2">
                        <a href="https://github.com/Yash-Atkari/Wanderlust" target='_blank' className="btn btn-outline-light">Code</a>
                        <a href="https://airbnb-clone-1-2et5.onrender.com" target='_blank' className="btn btn-outline-light">Demo</a>
                    </div>
                </div>
                <div className="w-25 border rounded p-2">
                    <h3 className="text-center m-0">VibeSync</h3>
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <Laptop src="/vibesync_image.png" />
                    </div>
                    <div className="p-2">
                    A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency.
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-5 p-2">
                        <a href="https://github.com/Yash-Atkari/VibeSync" target='_blank' className="btn btn-outline-light">Code</a>
                        <a href="https://vibe-sync-green.vercel.app/" target='_blank' className="btn btn-outline-light">Demo</a>
                    </div>
                </div>
                <div className="w-25 border rounded p-2">
                    <h3 className="text-center m-0">Portfolio</h3>
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <Laptop src="/portfolio_image.png" />
                    </div>
                    <div className="p-2">
                    A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency.
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-5 p-2">
                        <a href="https://github.com/Yash-Atkari/Yash-Atkari-Portfolio.git" target='_blank' className="btn btn-outline-light">Code</a>
                        <a href="https://yash-atkari-portfolio1.vercel.app/" target='_blank' className="btn btn-outline-light">Demo</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
