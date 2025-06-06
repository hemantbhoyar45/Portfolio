import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Modal } from "react-bootstrap";

export default function Blog({ title, coverImage, date, excerpt, category }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
        <style>{`
        /* This styles the modal content container */
        .glassmorphic-modal {
        background-color: rgba(15, 15, 30, 0.5) !important; /* translucent */
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 20px !important;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
        color: white;
        }

        /* Override modal-dialog max width so fullscreen works nicely */
        .modal-fullscreen .modal-dialog {
        max-width: 100vw !important;
        margin: 0 !important;
        height: 100vh !important;
        }

        /* Remove background from modal itself, to avoid layering issues */
        .modal-content {
        background: transparent !important;
        box-shadow: none !important;
        }
        `}</style>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
                className="blog-card rounded-4 overflow-hidden shadow-lg text-white position-relative h-100"
                style={{ backgroundColor: "rgba(15, 15, 30, 0.7)" }}
            >
                {/* Cover Image */}
                <div className="position-relative">
                    <img src={coverImage} alt={title} loading="lazy" className="img-fluid w-100" />
                    {/* Category Tag */}
                    <span className="position-absolute top-0 start-0 m-3 badge bg-danger text-white fw-bold">
                        {category}
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-3 d-flex flex-column justify-content-between">
                    <small className="d-flex align-items-center mb-2 fw-bold text-secondary">
                        <FaCalendarAlt className="me-1" />
                        {date}
                    </small>
                    <h5 className="fw-bold" style={{ color: "violet" }}>{title}</h5>
                    <p className="text-light mb-3" style={{ fontSize: "0.95rem" }}>
                        {excerpt.slice(0, 150)}...
                    </p>
                    <span onClick={handleShow} className="fw-medium" style={{ color: "#b26be8", cursor: "pointer" }}>
                        Read More...
                    </span>
                </div>
            </div>

            {/* Full-Screen Modal */}
            <Modal
            show={showModal}
            onHide={handleClose}
            fullscreen
            contentClassName="glassmorphic-modal" // sets .modal-content background
            >
            <Modal.Body className="px-4">
                <div className="mb-3 m-auto" style={{ width: "75%" }}>
                    <h2 className="fw-bold mb-2" style={{ color: "violet" }}>{title}</h2>
                    <div className="d-flex justify-content-between align-items-center text-secondary small">
                        <small
                        className="d-flex align-items-center fw-bold text-secondary"  
                        >
                        <FaCalendarAlt className="me-1" />
                        {date}
                        </small>
                        <span className="badge bg-danger fw-bold">{category}</span>
                    </div>
                </div>
                {/* Cover Image */}
                <div className="text-center mb-4">
                <img
                    src={coverImage}
                    alt={title}
                    className="img-fluid rounded-4 shadow"
                    style={{ maxHeight: "600px", objectFit: "cover", width: "75%" }}
                />
                </div>

                {/* Blog Content */}
                <div
                className="px-md-3 m-auto px-1"
                style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.8",
                    fontSize: "1.1rem",
                    color: "#ddd",
                    width: "75%"
                }}
                >
                {excerpt}
                </div>
            </Modal.Body>
            </Modal>
        </div>
        </>
    );
}
