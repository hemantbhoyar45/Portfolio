import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function Project({ title, src, description, codeUrl, projectUrl, category, date }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className="project-card position-relative overflow-hidden rounded-4 shadow-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} 
        style={{
          height: "360px",
          width: "100%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Background Image */}
        <img
          src={src}
          alt={title}
          className="position-absolute img-fluid top-0 start-0 w-100 h-100"
          loading="lazy"
          style={{
            objectFit: "cover",
            transition: "transform 0.2s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            filter: hovered ? "brightness(0.75)" : "brightness(1)",
            zIndex: 1,
          }}
        />

        {/* Gradient Overlay for smooth darkening */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Content Overlay */}
        <div
          className="position-relative p-4 d-flex flex-column justify-content-end rounded-bottom-4"
          style={{
            zIndex: 3,
            height: hovered ? "auto" : "150px",
            transition: "height 0.35s ease",
            overflow: "hidden",
          }}
        >
          {/* Tag + Date */}
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ opacity: hovered ? 1 : 0.56, transition: "opacity 0.2s ease" }}
          >
            <span
              className="badge bg-primary text-uppercase"
            >
              {category}
            </span>

            <small
              className="d-flex align-items-center fw-bold text-light"  
            >
              <FaCalendarAlt className="me-1" />
              {date}
            </small>
          </div>

          {/* Title */}
          <h4
            className="mb-2 fw-bold"
            style={{
              lineHeight: "1",
              color: "violet"
            }}
          >
            {title}
          </h4>

          {/* Description */}
          <p
            className="text-light"
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.4",
              color: "#ddd",
              maxHeight: hovered ? "8rem" : "3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              transition: "all 0.5s ease-in-out",
              marginBottom: "1rem",
            }}
          >
            {description}
          </p>

          {/* Read More Button */}
          <div className="d-flex justify-content-between">
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn text-light align-self-start" style={{ backgroundImage: "linear-gradient(to right, #007bff, #ff2c9c)", border: "none" }}>
            <i class="fa-solid fa-code"></i>&nbsp; <span style={{ fontWeight: "600"}}>Code</span>
          </a>
          <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline-light align-self-start d-flex align-items-center gap-2"
        >
          <i className="fa-solid fa-circle text-danger" style={{ fontSize: "0.5rem" }}></i>
          <span style={{ fontWeight: "600"}}>Live</span>
        </a>
          </div>
        </div>
      </div>
    </div>
  );
}
