import React from 'react'
import Image from '../Asset/Iamges/dea1f8e0-4249-4f14-9cdf-78116ff80b92.jfif'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
     from-black to-gray-700"
    >
      <div
        className="max-w-screen-lg max-auto 
      flex flex-col items-center justify-center
      h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a beginner and still learning development
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Mainly focused on using React.js, Next.JS, GraphQl for
            WebDevelopment, desiging and building. I love to work on web
            applications
          </p>
        </div>
        <div>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group  cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300 pl-2">
              <FaArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div>
          <img
            src={Image}
            alt="My Inage"
            className="rounded-2xl mx-auto w-2/3 md:w-full width:100px"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
