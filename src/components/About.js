import React from "react";
import Card from "./3dCard/TiltCard.js";
import AOS from 'aos';
const About = () => {
  AOS.init()
  const projects = [
    {
      title: "Junior QA Software",
      desc: "QA in insurance project",
      comp:"Endava",
      tags: [
        {
          name: "AWS",
          color: "red-600",
        },
        {
          name: "Java",
          color: "green-600",
        },
        {
          name: "Manual & Automation Testing",
          color: "green-600",
        },
      ],
    },
    {
      title: "QA Software",
      desc: "Promoted to a mid position since 1 January 2023. He changed the teams repeatedly, completing the objectives.",
      comp:"Endava",
      tags: [
        {
          name: "AWS",
          color: "red-600",
        },
        {
          name: "Java",
          color: "blue-600",
        },
        {
          name: "Database",
          color: "green-200",
        },
      ],
    },
  ];
  return (
    <div name="about" className="w-full h-screen pt-10 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[800px] pb-8 pl-4">
          <p>
            He graduated with a bachelor's degree in computer science from the
            West University of Timisoara. Is a passionate about building
            software that improves the lives of those around he.
          </p>
        </div>
        <div className="max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex-basis text-4xl font-bold">
            <p className="text-2xl font-light text-center sm:pt-10 ">Work experience</p>
          </div>
          {projects.map((project, ind) => {
            return (
              <div
                key={ind}
                data-aos={"fade-up"}
                data-aos-offset="100"
                data-aos-delay={ind % 2 === 0 ? "0" : "700"}
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                data-aos-duration="2000"
              >
                <Card
                  color={"bg-[#0b212d]"}
                  title={project.title}
                  comp={project.comp}
                  desc={project.desc}
                  tags={project.tags}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
