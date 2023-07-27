import React from "react";
import Card from "../components/3dCard/Card.js";
const About = () => {
  const projects = [
    {
      title: "Junior QA Software",
      desc: "QA in insurance project",
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
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
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
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold bg-slate-100">
            <p className="text-2xl font-light align-center">Work experience</p>
          </div>
          {projects.map((project, ind) => {
            return (
              <div
                key={ind}
                data-aos={"zoom-in-up"}
                data-aos-offset="-5"
                data-aos-delay={ind % 2 === 0 ? "0" : "700"}
                data-aos-duration="2000"
              >
                <Card
                  title={project.title}
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
