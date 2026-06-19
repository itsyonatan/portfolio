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
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-4">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem h-[26rem] flex items-center justify-center sm:w-[540px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.linkTitle}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[470px] w-[80vw] overflow-hidden h-[30vh]">
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
                  className={`z-10 absolute bottom-0 object-cover w-full h-full ${item.imgClassName || 'object-top'}`}
                />
              </div>

              <h1 className="font-bold lg:text-lg md:text-base text-sm line-clamp-1 mt-3">
                {item.title}
              </h1>

              <p
                className="lg:text-xs lg:font-normal font-light text-[16px] line-clamp-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-blue-900 lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image width={100} height={100} src={icon} alt="icon5" className="p-1.5" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-sm md:text-xs text-[10px] text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2 lg:w-3 lg:h-3 w-2 h-2" color="#CBACF9" />
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
