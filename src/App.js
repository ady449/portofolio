import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Layout from "./Layout";
import usePreventZoom from "./components/preventZoom.js";
function App() {
	usePreventZoom();
	return (
		<Layout>
			<Home />
			<About />
			<Projects />
			<Contact />
		</Layout>
	);
}

export default App;
