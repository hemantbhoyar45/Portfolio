import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="d-flex justify-content-between align-items-center bg-dark px-4 py-2 sticky-top">
            <NavLink to="/" className="d-inline-block mx-3" style={{height: "50px", width: "50px"}}>
                <img src="/portfolio_logo_bg.png" alt="Portfolio logo" className="h-100 w-100"/>
            </NavLink>
            <div className="d-flex gap-5">
                <NavLink to="/" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>About</NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Resume</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Projects</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "fw-bold" : "text-white"}>Contact</NavLink>
            </div>
        </nav>
    );
};
