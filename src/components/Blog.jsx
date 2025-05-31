import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import aarogyamContent from "../blogContents/aarogyamContent";

export default function Blog({ title, coverImage, date, excerpt, category, fullContent }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true); // background: rgba(15, 15, 30, 0.75);

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="blog-card rounded-4 overflow-hidden shadow-lg text-white position-relative h-100" style={{ backgroundColor: "rgba(15, 15, 30, 0.7)" }}>
                {/* Cover Image */}
                <div className="position-relative">
                    <img src={coverImage} alt={title} className="img-fluid w-100" />
                    {/* Category Tag */}
                    <span className="position-absolute top-0 start-0 m-3 badge bg-danger text-white fw-bold">
                        {category}
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-3 d-flex flex-column justify-content-between">
                    <small
                        className="d-flex align-items-center mb-2 fw-bold text-secondary"  
                    >
                    <FaCalendarAlt className="me-1" />
                    {date}
                    </small>
                    <h5 className="fw-bold" style={{ color: "violet" }}>{title}</h5>
                    <p className="text-light mb-3" style={{ fontSize: "0.95rem" }}>{excerpt}</p>
                    <a onClick={handleShow} className="fw-medium" style={{ color: "#b26be8", cursor: "pointer" }}>
                        Read More...
                    </a>
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
