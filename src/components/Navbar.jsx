import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="d-flex justify-content-between align-items-center bg-dark px-4 py-2" style={{ width: "100%" }}>
            <Link to="/" className="d-inline-block mx-3" style={{height: "50px", width: "50px"}}>
                <img src="/portfolio_logo_bg.png" alt="logo_image" className="h-100 w-100"/>
            </Link>
            <div className="d-flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
