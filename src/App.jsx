import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import ProjectList from './components/ProjectList.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <>
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
