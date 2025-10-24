"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-10 md:py-16" id="projects">
      <h1 className="heading">
        recent{" "}
        <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-4">
        {projects.map((item) => (
          <div
            className="lg:min-h-[20rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.linkTitle}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#02040fff" }}
                >
                  <Image width={100} height={100} src="/bg.png" alt="bgimg" />
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src={item.img}
                  alt="recent project"
                  className={`z-10 absolute bottom-0 object-cover w-full h-full ${item.id === 3 || item.id === 1 ? 'object-left' : 'object-top'}`}
                />
              </div>

              <h1 className="font-bold text-xl  line-clamp-1 mt-2">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-base line-clamp-2 capitalize"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-blue-900 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image width={100} height={100} src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
