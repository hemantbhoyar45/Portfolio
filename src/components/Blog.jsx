import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import aarogyamContent from "../blogContents/aarogyamContent";

export default function Blog({ title, coverImage, date, excerpt, category, fullContent }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="blog-card rounded-4 overflow-hidden shadow-lg text-white position-relative h-100" style={{ backgroundColor: "rgba(170, 170, 170, 0.2)" }}>
                {/* Cover Image */}
                <div className="position-relative">
                    <img src={coverImage} alt={title} className="img-fluid w-100" />
                    {/* Category Tag */}
                    <span className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-danger text-white fw-semibold rounded-pill small shadow-sm" style={{ fontSize: "0.75rem" }}>
                        {category}
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-3 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center fw-bold mb-2">
                        <FaCalendarAlt className="me-2" />
                        <small>{date}</small>
                    </div>
                    <h5 className="fw-bold" style={{ color: "violet" }}>{title}</h5>
                    <p className="text-secondary mb-3" style={{ fontSize: "0.95rem" }}>{excerpt}</p>
                    <button onClick={handleShow} className="btn btn-sm text-white fw-medium" style={{ backgroundColor: "#b26be8", borderRadius: "10px" }}>
                        Read More
                    </button>
                </div>
            </div>

            {/* Enhanced Modal */}
            <Modal show={showModal} onHide={handleClose} centered size="lg" contentClassName="bg-dark text-white rounded-4">
                <Modal.Header closeButton closeVariant="white" className="border-0 pb-0">
                    <Modal.Title className="fw-bold" style={{ color: "#b26be8" }}>
                        {title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto", whiteSpace: "pre-line", fontSize: "1rem", lineHeight: "1.7" }}>
                    {aarogyamContent}
                </Modal.Body>

                <Modal.Footer className="border-0 pt-0">
                    <button onClick={handleClose} className="btn btn-outline-light px-4 rounded-pill">
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
