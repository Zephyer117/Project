import React from 'react'
import image from '../Asset/Iamges/dea1f8e0-4249-4f14-9cdf-78116ff80b92.jfif'

import react from '../Asset/Iamges/dea1f8e0-4249-4f14-9cdf-78116ff80b92.jfif'

import next from '../Asset/Iamges/dea1f8e0-4249-4f14-9cdf-78116ff80b92.jfif'

import gatsby from '../Asset/Iamges/dea1f8e0-4249-4f14-9cdf-78116ff80b92.jfif'

import ruler from '../Asset/Iamges/dea1f8e0-4249-4f14-9cdf-78116ff80b92.jfif'

import extend from '../Asset/Iamges/dea1f8e0-4249-4f14-9cdf-78116ff80b92.jfif'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: image,
    },
    {
      id: 2,
      src: react,
    },
    {
      id: 3,
      src: next,
    },
    {
      id: 4,
      src: gatsby,
    },
    {
      id: 5,
      src: ruler,
    },
    {
      id: 6,
      src: extend,
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check It Out</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="My Works"
                className="rounded-md duration-200 hover:scale-105 rotate-0"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
