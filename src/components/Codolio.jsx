export default function Codolio() {
    return (
        <div className="py-5" style={{ minHeight: "90vh", width: "99vw"}}>
            <div className="text-center text-white mb-4">
                <h2 className="fw-bold" style={{ color: "violet" }}>My Codolio Profile</h2>
                <p className="text-secondary">Track my live journey, challenges, and achievements in coding!</p>
            </div>
            <div className="d-flex justify-content-center">
                <iframe
                    src="https://codolio.com/profile/Yash-Atkari" // replace with your actual profile URL
                    title="Codolio Profile"
                    width="90%"
                    height="600"
                    style={{ borderRadius: "10px" }}
                    allowFullScreen
                ></iframe>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <a
                    href="/Yash_Atkari_Resume.pdf"
                    download
                    className="btn text-white mt-4"
                    rel="noopener noreferrer"
                    style={{ backgroundImage: "linear-gradient(to right, #007bff, #ff2c9c)", border: "none" }}
                >
                    <i class="fa-solid fa-eye"></i> <span style={{ fontWeight: "600"}}>Visit Profile</span>
                </a>
            </div>
        </div>
    );
}
