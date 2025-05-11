import TechBox from './TechBox';

export default function About() {
    return (
        <div className="px-4 py-2 bg-dark text-white" >
            <section className="row align-items-center" style={{minHeight: "90vh"}}>
                <div className="col-12 col-md-9">
                    <div>
                        <h2>Know Who I'm</h2>
                        <p>Hi everyone, I am Yash Atkari. Currently in 2nd year pursuing bachelor's in Technology from G H Raisoni College of Engineering, Nagpur</p>
                        <p>This year I had participated in 4 hackathons to work on real world problem and to contribute to the innovative solutions. <br /> I also gain a certificate of achievement in one of those hackathons.</p>
                        <h4>Attended Hackathons in 2025</h4>
                        <ol>
                            <li>Healthcare Management System Hackathon at <b>Fluxus IIT Indore</b></li>
                            <li>Code of Phoenix <b>24hrs</b> Hackathon at <b>IIIT Naya Raipur</b></li>
                            <li>Ecothon 2025 Hackathon at <b>Sipna College of Engineering and Technology, Amravati</b></li>
                            <li>HackOn 2025 <b>8hrs</b> Hackathon at <b>Government College of Engineering, Nagpur</b></li>
                        </ol>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <img src="/about_image.png" className="img-fluid" alt="Image" style={{minHeight: "350px", width: "250px"}} />
                </div>
            </section>
            <section className="d-flex flex-column m-5">
                <h2 className="text-center mb-4">Professional SkillSet</h2>
                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <TechBox src={"/java.png"} />
                    <TechBox src={"/mongodb.png"} />
                    <TechBox src={"/expressjs.png"} />
                    <TechBox src={"/react.png"} />
                    <TechBox src={"/nodejs.png"} />
                    <TechBox src={"/html.png"} />
                    <TechBox src={"/css.png"} />
                    <TechBox src={"/js.png"} />
                    <TechBox src={"/bootstrap.png"} />
                    <TechBox src={"/mysql.png"} />
                </div>
            </section>
            <section className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "50vh"}}>
                <h2 className="mb-4">Tools I Use</h2>
                <div className="d-flex gap-3 flex-wrap flex-wrap justify-content-center">
                    <TechBox src={"/vscode.png"} />
                    <TechBox src={"/git.png"} />
                    <TechBox src={"/github.png"} />
                </div>
            </section>
            <section className="d-flex flex-column align-items-center m-5">
                <h2 className="mb-4">Days I Code</h2>
                <div>
                    <img src="/code_image.png" className="img-fluid" alt="image" />
                </div>
            </section>
        </div>
    );
};
