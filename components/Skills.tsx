import React from "react";
import { FlipWords } from "./ui/FlipWords";

const Skills = () => {

  const words = ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Python", "React", "Next.js", "Node.js", "Express", "Redux Toolkit", "Tailwind CSS", "Git", "Figma", "MongoDB", "RESTful APIs", "GraphQL"]

  return (
    <div className="py-10 md:py-16 w-full max-w-[80vw] md:max-w-[70vw] lg:max-w-[55vw]" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <div className="text-base md:text-lg text-blue-100 mx-auto font-normal mt-12 md:mt-16 text-center">
        {
          words.map((word, i) => (
            <div  key={i} className="inline-block mb-1">
              <FlipWords words={[word]} duration={Math.floor(Math.random() * 10000) + 10000} className="py-0.5 pl-3 mr-3 mb-2 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-100 bg-black-100 rounded-lg border border-black-200"/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills