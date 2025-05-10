import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: "99vh", width: "99vw"}}>
            <div className="text-center p-5 shadow-lg rounded" style={{ maxWidth: "500px" }}>
                <h1 className="text-danger mb-3">404</h1>
                <h2 className="mb-3">Page Not Found</h2>
                <p className="text-muted mb-4">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="btn text-white" style={{backgroundColor: "#8A2BE2"}}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};
