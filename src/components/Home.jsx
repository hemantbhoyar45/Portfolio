import Hero from './Hero';
import { useState, useEffect } from 'react';

export default function Home() {
  // ⏳ Typewriter Custom Hook Logic (Inline)
  const words = [
    'Aspiring Software Engineer',
    'Full Stack Web Developer',
    'MERN Stack Enthusiast',
    'AI Explorer',
    'Blockchain Enthusiast'
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <>
      <style>{`
        .gradient-text {
          background: linear-gradient(to right, #007bff, #5f57ff, #b33df2, #ff2c9c);
          background-size: 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .typewriter-text {
          font-family: monospace;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }

        .cursor {
          display: inline-block;
          width: 1px;
          background-color: #fff;
          animation: blink 0.7s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div className="py-4 text-white" style={{ minWidth: "99vw" }}>
        {/* Hero Section */}
        <section className="py-5 mt-4" style={{ minHeight: "80vh" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-8 mb-4 mb-md-0">
                <h1 className="fw-bold mb-2">Hi there,</h1>
                <h1 className="gradient-text display-5 fw-bold mb-3">I'm Yash Atkari</h1>
                <p className="fs-4 lead text-secondary">
                  <span className="typewriter-text">{text}<span className="cursor" /></span>
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <Hero />
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-5 text-center" style={{ minHeight: "20vh" }}>
          <h2 className="display-6 fw-bold">Find me on</h2>
          <div className="col-12 text-center pe-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yashatkari2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-3 ms-3"
            >
              <i
                className="fa-brands fa-linkedin-in p-2"
                style={{ color: "#b26be8", transition: "all 0.3s ease" }}
                title="LinkedIn"
              ></i>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Yash-Atkari"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-3 ms-3"
            >
              <i
                className="fa-brands fa-github p-2"
                style={{ color: "#b26be8", transition: "all 0.3s ease" }}
                title="GitHub"
              ></i>
            </a>

            {/* Email */}
            <a
              href="mailto:youremail@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-3 ms-3"
            >
              <i
                className="fa-solid fa-envelope p-2"
                style={{ color: "#b26be8", transition: "all 0.3s ease" }}
                title="Email"
              ></i>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
