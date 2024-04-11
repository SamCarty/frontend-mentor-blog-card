import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="group flex flex-col gap-6 max-w-full w-[528px] p-6 bg-white rounded-2xl border-black border cursor-pointer shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] transition-shadow">
      <Image
        src="/illustration-article.svg"
        width={1280}
        height={760}
        alt="Card image"
        className="w-full rounded-xl"
      />

      <div className="flex flex-col gap-3">
        <div className="text-sm sm:text-base w-fit py-1.5 px-4 bg-yellow text-black font-bold rounded-md">
          Learning
        </div>
        <p className="text-xs sm:text-sm">Published 21 Dec 2023</p>
        <h3 className="text-lg sm:text-2xl font-bold group-hover:text-yellow">
          HTML & CSS foundations
        </h3>
        <p className="text-sm sm:text-base text-grey">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>

      <div className="text-sm sm:text-base flex flex-row gap-3 items-center font-bold">
        <Image
          src="/image-avatar.webp"
          width={32}
          height={32}
          alt="Avatar image"
        />
        Sam Carty
      </div>
    </div>
  )
}

export default Card
