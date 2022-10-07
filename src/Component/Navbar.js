import React from 'react'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleOnClick = () => {
    setMenu(!menu)
  }

  const list = [
    {
      id: 1,
      title: 'home',
    },
    {
      id: 2,
      title: 'about',
    },
    {
      id: 3,
      title: 'portfolio',
    },
    {
      id: 4,
      title: 'experience',
    },
    {
      id: 5,
      title: 'Contact',
    },
  ]

  return (
    <div
      className="flex justify-between items-center w-full h-20
    text-white bg-black fixed px-4"
    >
      <div className="text-5xl font-signatue ml-2">
        <h1>utsho</h1>
      </div>
      <ul className="hidden md:flex">
        {list.map(({ id, title }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={title} smooth duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={handleOnClick}
        className="md:hidden cursor-pointer pr-4 z-10 text-white "
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>
      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-50">
          {list.map(({ id, title }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6">
              <Link
                onClick={() => setMenu(!menu)}
                to={title}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar
