import Blog from './Blog.jsx';

export default function BlogList() {
    const blogs = [
        {
            title: "The Future of Healthcare Management Systems",
            coverImage: "/aarogyam_blog.png",
            date: "April 12, 2025",
            excerpt: "Exploring how technology is transforming healthcare management and the development of my student project...",
            category: "Healthcare Tech",
            readMoreUrl: "/blogs/healthcare-management-system"
        },
        {
            title: "How AI Impacted My Life & Career",
            coverImage: "/AI_blog.jpg",
            date: "April 18, 2025",
            excerpt: "From coding assistants to hackathons, discover how AI reshaped the way I build, learn, and think...",
            category: "AI & Productivity",
            readMoreUrl: "/blogs/ai-impact"
        },
        {
            title: "Hackathon Journey 2025",
            coverImage: "/hackathon_blog.png",
            date: "April 22, 2025",
            excerpt: "A 24-hour sprint, sleepless nights, and a chatbot that stole the show. Here’s how I built my hackathon MVP...",
            category: "Tech Journey",
            readMoreUrl: "/blogs/hackathon-journey-2025"
        },
        {
            title: "My 8-Month Coding Batch Experience",
            coverImage: "/coding_blog.png",
            date: "April 29, 2025",
            excerpt: "Over 300 questions, countless errors, and one big transformation. Here's my story of consistency and growth...",
            category: "Learning Path",
            readMoreUrl: "/blogs/batch-coding-journey"
        },
        {
            title: "VibeSync – An AI-Driven Music Sync Platform",
            coverImage: "/vibesync_blog.png",
            date: "May 4, 2025",
            excerpt: "Discover how I built an AI-powered music-sync app that lets users vibe together in real time...",
            category: "AI Projects",
            readMoreUrl: "/blogs/vibesync"
        },
        {
            title: "Building a Web3 Remittance Platform",
            coverImage: "/blockchain_blog.jpeg",
            date: "May 10, 2025",
            excerpt: "Learn how I used blockchain to create a fast, secure, and low-cost cross-border remittance platform...",
            category: "Web3 & Blockchain",
            readMoreUrl: "/blogs/web3-remittance"
        }
    ];

    return (
        <div className="row" style={{ width: "99vw", minHeight: "99vh", margin: "0" }}>
            {blogs.map((blog, index) => (
                <Blog
                    key={index}
                    title={blog.title}
                    coverImage={blog.coverImage}
                    date={blog.date}
                    excerpt={blog.excerpt}
                    category={blog.category}
                    readMoreUrl={blog.readMoreUrl}
                />
            ))}
        </div>
    );
}
