import Project from './Project.jsx';

export default function ProjectList() {
    // You can optionally move this to a separate file: data/projectData.js
    const projects = [
        {
            title: "Aarogyam",
            src: "/aarogyam_image.webp",
            description: "A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency.",
            codeUrl: "https://github.com/hemantbhoyar45/Aarogyamm",
            projectUrl: "https://aarogyamm.onrender.com",
            category: "Arogyamm",
            date: "2025"
        },
        {
            title: "Wanderlust",
            src: "/wanderlust_image.webp",
            description: "A full-stack Airbnb clone that allows users to explore and book stays across various destinations. Features include property listing, booking management, authentication, and responsive UI. The application is built using Node.js, Express.js, MongoDB, and EJS for server-side rendering. It also exposes RESTful APIs for various operations, ensuring a scalable and modular architecture.",
            codeUrl: "https://github.com/hemantbhoyar45/Majorproject",
            projectUrl: "https://airbnb-8qx1.onrender.com",
            category: "Travel",
            date: "2025"
        },
        {
            title: "Zoom Meeting App",
            src: "/vibesync_image.webp",
            description: "The Zoom Meeting App is a real-time video conferencing platform that enables users to connect, communicate, and collaborate from anywhere in the world. It supports high-quality video, audio, and chat messaging in both one-on-one and group settings.",
            codeUrl: "https://github.com/hemantbhoyar45/Zoom-Meeting-App",
            projectUrl: "https://apnacollegezoomfrontend.onrender.com/",
            category: "Video-Meeting-App",
            date: "2025"
        },
        {
            title: "Portfolio",
            src: "/portfolio_image.webp",
            description: "A personal developer portfolio showcasing projects, skills, and experience in a visually engaging layout. Built with React and styled using Bootstrap and custom CSS, it serves as a professional online presence.",
            codeUrl: "https://github.com/hemantbhoyar45/Portfolio",
            projectUrl: "https://yash-atkari-portfolio-3.onrender.com",
            category: "Portfolio",
            date: "2025"
        },

        {
            title: "Wheather App",
            src: "/weather.webp",
            description: "The Weather App is a real-time weather information platform that provides users with accurate and up-to-date forecasts for any location worldwide. It offers current weather conditions, hourly forecasts, multi-day predictions, and additional meteorological details in an easy-to-read interface.",
            projectUrl: "https://weather-app-brn6.onrender.com",
            category: "Wheather App",
            date: "2024"
        }
    ];
    return (
        <div className="row" style={{width: "99vw", margin: "0", marginTop: "20px"}}>
                {projects.map((project, index) => (
                    <Project
                            key={index}
                            title={project.title}
                            src={project.src}
                            description={project.description}
                            codeUrl={project.codeUrl}
                            projectUrl={project.projectUrl}
                            category={project.category}
                            date={project.date}
                    />
                ))}
        </div>
    );
}
