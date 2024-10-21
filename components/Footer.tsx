import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-6">
      <div className="flex md:flex-row flex-col justify-between gap-12 ">
        <div className="md:max-w-[40vw]">
          <h2 className="uppercase mb-6 font-bold text-lg tracking-wider md:tracking-widest">yonatan adera</h2>
          <p className="text-white-200">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className=" flex flex-col gap-6 ">
          <h2 className="uppercase font-bold text-lg tracking-wider">social</h2>
          <div className="flex md:gap-3 gap-6">
            {socialMedia.map((item) => (
              <div
                key={item.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:opacity-50"
              >
                <a href={item.link}>
                  <Image src={item.icon} alt="icons" width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
        © Copyright 2024. <span className="text-blue-100 ">Yonatan Adera</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
