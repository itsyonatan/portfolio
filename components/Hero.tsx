import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Social from './Social'
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
      when: "afterChildren"
    }
  }),
}
const Hero = () => {
  return (
    <div className='h-screen flex justify-center items-center relative' id='home'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-4 w-full md:max-w-[80vw] z-10'>
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-center text-3xl md:text-4xl lg:text-5xl capitalize max-w-[80%]"
        />
        <motion.p
          variants={upVariant}
          initial='initial'
          animate='animate'
          custom={0}
          className='text-base sm:text-xl text-center text-blue-100 capitalize md:tracking-wide'>
          hi! i&apos;m yonatan adera, a web developer.
        </motion.p>
        <motion.div
          variants={upVariant}
          initial='initial'
          animate='animate'
          custom={0.3}
          className='mt-2 sm:mt-4'>
          <a href="mailto:yoniade06@gmail.com">
            <MagicButton title="Let's get in touch" position='right'
              icon={<FaLocationArrow />} />
          </a>
        </motion.div>
      </div>
      <Social />
    </div >
  )
}

export default Hero