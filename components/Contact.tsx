import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Contact = () => {
  return (
    <div className="w-full pt-16 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-20 min-h-96 z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take your <span className="text-purple">digital
          presence</span> to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help to
          achieve your goals.
        </p>
        <a href="mailto:yoniade06@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
