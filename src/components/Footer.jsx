import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-white px-4 py-3">
            <div className="container">
                <div className="row text-center text-md-start align-items-center gy-3">
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start pe-5">
                        <Link to="/" className="d-inline-flex align-items-center text-white text-md-start" style={{height: "50px", width: "50px"}}>
                            <img className="h-100 w-100" src="/portfolio_logo_bg.png" alt="Portfolio logo"/>
                            &nbsp;Yash &nbsp;Atkari
                        </Link>
                    </div>

                    <div className="col-12 col-md-4 text-center">
                        <p className="m-0">Copyright &copy; 2025</p>
                    </div>

                    <div className="col-12 col-md-4 text-center text-md-end">
                        <p className="m-0">Connect with me</p>
                        <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-2">
                            <a href="https://www.linkedin.com/in/yashatkari2005/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/Yash-Atkari" target="_blank"><i className="fa-brands fa-github"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter" style={{ opacity: 0.3 }}></i></a>
                            <a href="#"><i className="fa-brands fa-instagram" style={{ opacity: 0.3 }}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
