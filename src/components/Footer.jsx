import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="d-flex justify-content-between align-items-center bg-dark text-white px-4 py-2">
            <Link to="/" className="d-inline-flex py-2" style={{height: "50px"}}>
                <img className="h-100" src="/portfolio_logo_bg.png" alt="logo_image"/>
                Yash Atkari
            </Link>
            <p>Copyright &copy; 2025</p>
            <div>
                Connect with me 
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <a href="https://www.linkedin.com/in/yashatkari2005/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/Yash-Atkari" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}
