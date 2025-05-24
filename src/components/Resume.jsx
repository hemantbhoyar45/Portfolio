export default function Resume() {
    return (
        <div className="" style={{height: "99%", width: "99vw"}}>
            <div className="d-flex flex-column align-items-center py-4">
                <a href="/Yash_Atkari_Resume.pdf" download className="btn mb-4 text-white" rel="noopener noreferrer" style={{backgroundColor: "blueviolet"}}>
                    Download Resume
                </a>

                <section style={{width: "90vw", maxWidth: "1000px"}}>
                    <iframe src="/Yash_Atkari_Resume.pdf" title="PDF Viewer"
                        style={{
                            width: "100%",
                            height: "700px",
                            border: "2px solid blueviolet",
                            borderRadius: "10px"
                        }}
                    />
                </section>

                <a href="/Yash_Atkari_Resume.pdf" download className="btn mt-4 text-white" rel="noopener noreferrer" style={{backgroundColor: "blueviolet"}}>
                    Download Resume
                </a>
            </div>
        </div>
    );
};
