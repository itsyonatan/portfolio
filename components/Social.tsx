import { socialMedia } from '@/data'
import Image from 'next/image'
import React from 'react'

const Social = () => {
  return (
    <div className="flex flex-col items-center md:gap-2 absolute z-10 -left-6 md:-left-2 top-1/3">
      {socialMedia.map((item) => (
        <a href={item.link}  key={item.id}>
          <div className="w-10 h-10 md:w-12 md:h-12 -mt-1  cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 hover:opacity-50 bg-black-200 rounded-lg border border-black-300">
            <Image src={item.icon} alt="icons" width={20} height={20} />
          </div>
        </a>
      ))}

    </div>)
}

export default Social