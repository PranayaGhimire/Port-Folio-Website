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
function App() {
  return (
    <Router>
      <Navbar />
      <DarkModeToggle></DarkModeToggle>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 pages */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
