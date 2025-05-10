import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="d-flex justify-content-between align-items-center bg-dark text-white px-4 py-2">
            <Link to="/" className="d-inline-flex text-white" style={{height: "50px", width: "50px"}}>
                <img className="h-100 w-100" src="/portfolio_logo_bg.png" alt="Portfolio logo"/>
                &nbsp;Yash &nbsp;Atkari
            </Link>
            <p>Copyright &copy; 2025</p>
            <div>
                <p className="m-0">Connect with me</p>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <a href="https://www.linkedin.com/in/yashatkari2005/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/Yash-Atkari" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter" style={{ opacity: 0.3 }}></i></a>
                    <a href="#"><i className="fa-brands fa-instagram" style={{ opacity: 0.3 }}></i></a>
                </div>
            </div>
        </footer>
    );
};
