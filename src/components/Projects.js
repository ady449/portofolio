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
		<div
			name="projects"
			className="w-full h-screen pt-20 text-gray-300 bg-[#0a192f] flex justify-center items-center "
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							Projects
						</p>
					</div>
				</div>
				<Carousel projects={projects}></Carousel>
			</div>
		</div>
	);
}

export default Projects;
