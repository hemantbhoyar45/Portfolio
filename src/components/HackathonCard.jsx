import { FaCalendarAlt } from "react-icons/fa";

export default function HackathonCard({ name, organizer, duration, date, certificate, redirect }) {
    return (
        <>
        <style>{`
            .gradient-text {
                background: linear-gradient(to right, #007bff, #b33df2, #ff2c9c);
                background-clip: text;
                color: transparent;
            }
            .gradient-text:hover {
                background: linear-gradient(to right, #007bff, #b33df2, #ff2c9c);
                color: white;
                border: none;
            }
        `}</style>
        <div className="col-12 col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 text-white" style={{backgroundColor: "rgba(15, 15, 30, 0.7)"}}>
                <div className="card-body rounded-4 border border-secondary">
                    <h5 className="card-title fw-bold" style={{color: "violet"}}>{name}</h5>
                    <p className="card-text mb-2"><b className="text-secondary"></b> {organizer}</p>
                    <small
                    className="d-flex align-items-center my-3 fw-bold text-secondary"  
                    >
                    <FaCalendarAlt className="me-1" />
                    {date}
                    </small>
                    
                    <div className="d-flex justify-content-between">
                        {certificate && (
                            <a href={certificate} target="_blank" rel="noopener noreferrer" className="gradient-text btn btn-outline-primary">
                            <i class="fa-solid fa-medal"></i> <span style={{ fontWeight: "600"}}>Certificate</span>
                            </a>
                        )}
                        {redirect && (
                            <a href={redirect} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">
                                <i className="fa-brands fa-linkedin-in"></i> <span style={{ fontWeight: "600"}}>LinkedIn</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
