import './background.css'; // Import starry background

export default function Resume() {
    return (
        <div style={{ height: "99%", width: "99vw" }}>
            <div className="d-flex flex-column align-items-center py-4">
                <h2 className="fw-bold mb-4" style={{ color: "violet" }}>
                    My Resume
                </h2>

                <section style={{ width: "90vw", maxWidth: "1000px" }}>
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            src="Resume.jpg"
                            title="PDF Viewer"
                            style={{
                                borderRadius: "10px"
                            }}
                            className="img-fluid"
                        />
                    </div>
                </section>

                <a
                    href="Hemant_resume.pdf"
                    download
                    className="btn text-white mt-4"
                    rel="noopener noreferrer"
                    style={{ backgroundImage: "linear-gradient(to right, #007bff, #ff2c9c)", border: "none" }}
                >
                    <i class="fa-solid fa-cloud-arrow-down"></i> <span style={{ fontWeight: "600"}}>Download</span>
                </a>
            </div>
        </div>
    );
}
