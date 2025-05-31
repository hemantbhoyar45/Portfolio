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
                            src="/Resume.png"
                            title="PDF Viewer"
                            style={{
                                borderRadius: "10px"
                            }}
                            className="img-fluid"
                        />
                    </div>
                </section>

                <a
                    href="/Yash_Atkari_Resume.pdf"
                    download
                    className="btn text-white mt-4"
                    rel="noopener noreferrer"
                    style={{ backgroundImage: "linear-gradient(to right, #007bff, #ff2c9c)", border: "none" }}
                >
                    <i class="fa-solid fa-cloud-arrow-down"></i> Download
                </a>
            </div>
        </div>
    );
}
