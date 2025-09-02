export default function Skills() {
    return (
        <div className="row g-4 text-light" style={{marginTop: "75px"}}>
                    {[
                    {
                        title: "Programming Languages",
                        icon: "fa-solid fa-code text-primary",
                        items: ["C++", "Java", "JavaScript(ES6+", "C", "Python"]
                    },
                    {
                        title: "Libraries & Frameworks",
                        icon: "fa-solid fa-diagram-project text-warning",
                        items: ["React.js", "Next.js", "Node.js","Express.js", "Bootstrap","Tailwind", "Web3.js"]
                    },
                    {
                        title: "Tools & Platforms",
                        icon: "fa-solid fa-toolbox text-danger",
                        items: ["Git", "GitHub", "VS Code", "Firebase", "Microsoft Azure", "AWS", "Google Cloud" ,"Docker", "IntelliJ IDEA", "Hoppscotch"]
                    },
                    {
                        title: "Databases",
                        icon: "fa-solid fa-database text-secondary",
                        items: ["MongoDB", "MySQL", "PostgreSQL"]
                    },
                    {
                        title: "CS Fundamentals",
                        icon: "fa-solid fa-gears text-success",
                        items: ["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS", "Computer Networking"]
                    },
                    {
                        title: "Blockchain",
                        icon: "fa-brands fa-ethereum text-info",
                        items: ["Solidity", "Ethereum", "Smart Contracts", "MetaMask", "Remix IDE"]
                    },
                    {
                        title: "AI/ML",
                        icon: "fa-solid fa-robot text-info-emphasis",
                        items: ["Azure AI", "Scikit-learn", "OpenAI API", "Hugging Face", "LangChain"]
                    },
                    {
                        title: "Web Development",
                        icon: "fa-solid fa-globe text-light-emphasis",
                        items: ["MERN Stack", "RESTful APIs", "Responsive Design"]
                    }
                    ].map((category, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className="p-3 rounded-4 h-100 shadow-sm border border-secondary" data-tilt style={{ backgroundColor: "rgba(15, 15, 30, 0.7)" }}>
                        <h5 className="mb-3 d-flex align-items-center gap-2" style={{color: "violet"}}>
                            <i className={`${category.icon}`}></i> {category.title}
                        </h5>
                        <ul className="list-unstyled">
                            {category.items.map((item, idx) => (
                            <li key={idx} className="mb-1">
                                <span className="text-info me-2">•</span> {item}
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    ))}
        </div>
    );
}
