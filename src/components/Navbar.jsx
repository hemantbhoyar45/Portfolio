import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => setIsOpen(!isOpen);
    return (
        <nav className="navbar navbar-expand-md px-4 py-2 sticky-top">
            <NavLink to="/" className="d-inline-block mx-3" style={{height: "50px", width: "50px"}}>
                <img src="/portfolio_logo_bg.png" alt="Portfolio logo" className="h-100 w-100"/>
            </NavLink>

            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <div className="navbar-nav ms-auto gap-md-5">
                    <NavLink to="/" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>About</NavLink>
                    <NavLink to="/resume" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Resume</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Projects</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Contact</NavLink>
                </div>
            </div>
        </nav>
    );
};
