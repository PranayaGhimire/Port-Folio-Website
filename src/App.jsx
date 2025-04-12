import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import Services from "./components/Services";
import { useState } from "react";
function App() {
  const [isDarkMode,setIsDarkMode] = useState(true);
  const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
  }
  return (
    <Router>
      <Navbar />
      <DarkModeToggle onClick={toggleMode} isDarkMode={isDarkMode}></DarkModeToggle>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />}></Route>
        <Route path="/about" element={<About isDarkMode={isDarkMode} />}></Route>
        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />}></Route>
        <Route path="/services" element={<Services isDarkMode={isDarkMode} />}></Route>
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
        <Route path="*" element={<NotFound isDarkMode={isDarkMode} />} />{" "}
        {/* Catch-all route for 404 pages */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
