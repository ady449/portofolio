import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

const Contact = () => {
	const [checked, setChecked] = React.useState({ mobile: false, mail: false });
	const containerRef = React.useRef(null);

	const handleChange = (type) => {
		setChecked((prevChecked) => ({
			...prevChecked,
			[type]: !prevChecked[type], // Toggle the value
		}));
	};

	return (
		<div
			name="contact"
			className="w-full h-screen pt-20 flex justify-center items-center "
		>
			{/* bg-[#0a192f] */}
			<div className="opacity-layer bg-[#0a192f]/75  rounded-xl">
				<div className="flex flex-col justify-center items-center w-full h-full">
					<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
						<div className="sm:text-right pb-8 pl-4 ">
							<p className="text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600">
								Contact
							</p>
						</div>
					</div>
				</div>
				<Box
					sx={{
						height: "100%",
						width: "50%",
						padding: 2,
						borderRadius: 1,
						display: "flex",
						overflow: "hidden",

						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* <Box sx={{ width: 200 }} ref={containerRef}> */}
					<button name="mobile" onClick={() => handleChange("mobile")}>
						<DevicePhoneMobileIcon className="h-10 w-10 text-gray-100" />
						<Slide
							direction="up"
							in={checked.mobile}
							container={containerRef.current}
						>
							<h1>+40751392453</h1>
						</Slide>
					</button>
					<button name="mail" onClick={() => handleChange("mail")}>
						<EnvelopeIcon className="h-10 w-10 text-gray-100" />

						<Slide
							direction="up"
							in={checked.mail}
							container={containerRef.current}
						>
							<h1>valentinadi36@yahoo.com</h1>
						</Slide>
					</button>
					{/* </Box> */}
				</Box>
			</div>
		</div>
	);
};

export default Contact;
