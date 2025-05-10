import Envelope from "./Envelope.jsx";

export default function Contact() {
    return (
        <div className="px-4 py-2 bg-dark" style={{minHeight: "99vh", width: "99vw"}}>
            <div className="d-flex flex-column align-items-center ">
                <div style={{ position: "relative", margin: "200px" }}>
                    <Envelope />
                </div>
                <p><b>Email: yashatkari7@gmail.com</b></p>
                <p>Phone Number: 9529623010</p>
                <p>
                    <a href="https://www.linkedin.com/in/yashatkari2005/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                    </a> &nbsp; | &nbsp;
                    <a href="https://github.com/Yash-Atkari" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i> GitHub
                    </a> &nbsp; | &nbsp;
                    <a href="https://yash-atkari-portfolio1.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-address-book"></i> Portfolio
                    </a>
                </p>
                <p>Location: Nagpur, Maharashtra, India</p>
                <p><i>Feel free to reach out for collaborations, questions, or just to say hi!</i></p>
            </div>
        </div>
    );
};
