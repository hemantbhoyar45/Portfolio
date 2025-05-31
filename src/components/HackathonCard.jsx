export default function HackathonCard({ name, organizer, duration, date, certificate, redirect }) {
    return (
        <>
        <style>{`
            .gradient-text {
                background: linear-gradient(to right, #007bff, #5f57ff, #b33df2, #ff2c9c);
                background-size: 100%;
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                -webkit-text-fill-color: transparent;
                display: inline-block;
            }
        `}</style>
        <div className="col-12 col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 text-white" style={{backgroundColor: "rgba(125, 125, 125, 0.2)"}}>
                <div className="card-body rounded-4 border border-secondary">
                    <h5 className="card-title fw-bold" style={{color: "violet"}}>{name}</h5>
                    <p className="card-text mb-2"><b className="text-secondary">Organizer:</b> {organizer}</p>
                    {duration && <p className="card-text mb-2"><b className="text-secondary">Duration:</b> {duration}</p>}
                    <p className="card-text mb-3"><b className="text-secondary">Date:</b> {date}</p>
                    
                    <div className="d-flex gap-2">
                        {certificate && (
                            <a href={certificate} target="_blank" rel="noopener noreferrer" className="gradient-text btn btn-outline-primary">
                            <i class="fa-solid fa-medal"></i> <span className="gradient-text">Certificate</span>
                            </a>
                        )}
                        {redirect && (
                            <a href={redirect} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                                <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
