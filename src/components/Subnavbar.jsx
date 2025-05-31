import { useState } from "react";

export default function Subnavbar() {
    const [activeLink, setActiveLink] = useState("me");

    // Violet background color
    const violetStyle = {
        backgroundImage: "linear-gradient(to right, #007bff, #ff2c9c)",  // You can also use a hex like "#8a2be2" for blue-violet
        border: "none",
        color: "white"
    };

    return (
        <>
        <style>{`
        @media (max-width: 993px) {
            .sub-navbar {
                width: 80vw;
                height: 7vh;
                display: flex;
                justify-content: space-around;
                position: fixed;
                top: 10vh;
                left: 10vw;
            }
            span {
                display: none;
            }
        }
        `}</style>
        <div className="d-flex justify-content-center my-2">
            <div className="sub-navbar d-flex gap-4 p-2 rounded position-fixed"  style={{backgroundColor: "rgba(15, 15, 30, 0.7)"}}>
                <a
                    href="#me"
                    onClick={() => setActiveLink("me")}
                    className="text-decoration-none py-1 px-2 rounded"
                    style={activeLink === "me" ? violetStyle : {color: "white"}}
                ><i class="fa-regular fa-user"></i>&nbsp;
                    <span>Me</span>
                </a>

                <a
                    href="#skills"
                    onClick={() => setActiveLink("skills")}
                    className="text-decoration-none py-1 px-2 rounded"
                    style={activeLink === "skills" ? violetStyle : {color: "white"}}
                ><i class="fa-regular fa-keyboard"></i>&nbsp;
                    <span>Skills</span>
                </a>

                <a
                    href="#events"
                    onClick={() => setActiveLink("events")}
                    className="text-decoration-none py-1 px-2 rounded"
                    style={activeLink === "events" ? violetStyle : {color: "white"}}
                ><i class="fa-regular fa-calendar"></i>&nbsp;
                    <span>Hackathons & Events</span>
                </a>

                <a
                    href="#certifications"
                    onClick={() => setActiveLink("certifications")}
                    className="text-decoration-none py-1 px-2 rounded"
                    style={activeLink === "certifications" ? violetStyle : {color: "white"}}
                ><i class="fa-solid fa-medal"></i>&nbsp;
                    <span>Certifications</span>
                </a>

                <a
                    href="#events"
                    onClick={() => setActiveLink("achievements")}
                    className="text-decoration-none py-1 px-2 rounded"
                    style={activeLink === "achievements" ? violetStyle : {color: "white"}}
                ><i class="fa-solid fa-trophy"></i>&nbsp;
                    <span>Achievements</span>
                </a>
            </div>
        </div>
        </>
    );
}
