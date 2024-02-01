import React from "react";

import Carousel from "./carousel/carousel";

function Projects() {
	const projects = [
		{
			title: "Coming",
			desc: null,
			comp: null,
			tags: [],
		},
		{
			title: "Soon!",
			desc: null,
			comp: null,
			tags: [],
		},
	];
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center pt-20 text-gray-300">
			<div className="opacity-layer w-1/2  bg-[#0a192f]/75 rounded-xl p-4">
				<div className="sm:text-center pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Projects
					</p>
				</div>

				<Carousel projects={projects} />
			</div>
		</div>
	);
}

export default Projects;
