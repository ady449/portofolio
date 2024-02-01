import React from "react";
import Navbar from "./components/Navbar.js";
import MatrixRain from "./components/MatrixRain.js";
import "./Layout.css";
const Layout = (props) => {
	return (
		<div className="page">
			<MatrixRain />
			<div className="flex flex-col overflow-hidden ">
				<Navbar />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
