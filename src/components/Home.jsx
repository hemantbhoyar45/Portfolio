export default function Home() {
    return (
        <div className="px-5 py-2 bg-dark text-white">
            <section className="px-5" style={{height: "80vh", marginTop: "100px"}}>
               <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-9">
                        <h1>Hi there</h1>
                        <h1>I'm Yash Atkari</h1>
                        <p>Aspiring Software Engineer | Full Stack Developer</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <img
                            style={{ height: "350px", width: "250px" }}
                            className="img-fluid"
                            src="/portfolio_image1.png"
                            alt="portfolio_image"
                        />
                    </div>
                </div>
            </section>
            <section className="px-5" style={{height: "70vh"}}>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-8">
                        <h1>Let Me Introduce Myself</h1>
                        <p>Hello, My name is Yash Atkari. I belong to Mandhal, state of Maharashtra. Currently I pursuing my Bachelor's in Technology from G H Raisoni College of Engineering, Nagpur.</p>
                        <p>I have completed Data Structures and Algorithms in Java and have hands-on experience with the MERN stack for full-stack web development.</p>
                        <p>I'm passionate about building innovative solutions and consistently improving.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img 
                            style={{height: "350px"}} 
                            className="img-fluid" 
                            src="/yash_1.png" 
                            alt="profile_image" 
                        />
                    </div>
                </div>
            </section>
            <section className="px-5 mb-5" style={{height: "20vh"}}>
                <div className="row align-items-center">
                    <h1 className="col-12 text-center">Find me on</h1>
                    <div className="col-12 text-center">
                        <a href="https://www.linkedin.com/in/yashatkari2005/" target='_blank' className="fs-3 ms-3" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in" title='LinkedIn'></i></a>
                        <a href="https://github.com/Yash-Atkari" target='_blank' className="fs-3 ms-3" rel="noopener noreferrer"><i className="fa-brands fa-github" title='Github'></i></a>
                        <a href="#" className="fs-3" rel="noopener noreferrer"><i className="fa-brands fa-twitter ms-3" title='Twitter' style={{ opacity: 0.3 }}></i></a>
                        <a href="#" className="fs-3" rel="noopener noreferrer"><i className="fa-brands fa-instagram ms-3" title='Instagram' style={{ opacity: 0.3 }}></i></a>
                    </div>
                </div>
            </section>
        </div>
    );
};
