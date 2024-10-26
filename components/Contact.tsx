import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import { motion, Variants } from 'framer-motion'
const upVariant: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  }),
}
const Contact = () => {
  return (
    <div className="w-full pt-16 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-20 min-h-96 z-0">
        {/*<img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />*/}
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={100}
          height={100}
          className="w-full h-full opacity-50 " />
      </div>
      <div className="flex flex-col items-center">
        <motion.h1
          variants={upVariant}
          initial='initial'
          whileInView='animate'
          custom={0}
          className="heading lg:max-w-[45vw]">
          Ready to take your <span className="text-purple">digital
            presence</span> to the next level?
        </motion.h1>
        <motion.p
          variants={upVariant}
          initial='initial'
          whileInView='animate'
          custom={0.2}
          className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help to
          achieve your goals.
        </motion.p>
        <motion.a
          variants={upVariant}
          initial='initial'
          whileInView='animate'
          custom={0.4}
          href="mailto:yoniade06@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
