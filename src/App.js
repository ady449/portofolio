import Navbar from "./components/Navbar.js";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import usePreventZoom from "./components/preventZoom.js"
function App() {
  usePreventZoom();
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
