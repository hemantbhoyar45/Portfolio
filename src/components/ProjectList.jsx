import Project from './Project.jsx';

export default function ProjectList() {
    // container - Adds padding and centers content responsively.
    return (
        <div className="container py-2 text-white" style={{minWidth: "99vw"}}>
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-4 border rounded-3">
                    <Project 
                    title={"Aarogyam"} 
                    src={"/aarogyam_image.png"} 
                    description={
                        "A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency."
                    } 
                    codeUrl={"https://github.com/Yash-Atkari/Aarogyam"} 
                    demoUrl={"https://aarogyam-hypg.onrender.com/"} 
                    />
                </div>
                <div className="col-md-6 col-lg-3 mb-4 border rounded-3">
                    <Project
                    title={"Wanderlust"}
                    src={"/wanderlust_image.png"}
                    description={
                        "A full-stack Airbnb clone that allows users to explore and book stays across various destinations. Features include property listing, booking management, authentication, and responsive UI. Built with Next.js, Tailwind CSS, Prisma, and MongoDB."
                    }
                    codeUrl={"https://github.com/Yash-Atkari/Wanderlust"}
                    demoUrl={"https://airbnb-clone-1-2et5.onrender.com"}
                    />
                </div>
                <div className="col-md-6 col-lg-3 mb-4 border rounded-3">
                    <Project
                    title={"VibeSync"}
                    src={"/vibesync_image.png"}
                    description={
                        "A music-sharing and syncing platform designed to connect users through real-time collaborative playlists. Users can create rooms, sync playback, and chat with others. Built with React, Node.js, Express, and WebSockets."
                    }
                    codeUrl={"https://github.com/Yash-Atkari/VibeSync"}
                    demoUrl={"https://vibesync-ao2c.onrender.com/chatbot"}
                    />
                </div>
                <div className="col-md-6 col-lg-3 mb-4 border rounded-3">
                    <Project
                    title={"Portfolio"}
                    src={"/portfolio_image.png"}
                    description={
                        "A personal developer portfolio showcasing projects, skills, and experience in a visually engaging layout. Built with React and styled using Bootstrap and custom CSS, it serves as a professional online presence."
                    }
                    codeUrl={"https://github.com/Yash-Atkari/Yash-Atkari-Portfolio.git"}
                    demoUrl={"https://yash-atkari-portfolio-3.onrender.com"}
                    />
                </div>
            </div>
        </div>
    );
};
