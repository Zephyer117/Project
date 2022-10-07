import React from 'react'
import html from '../Asset/Iamges/png-transparent-logo-html-html5-thumbnail.png'
import css from '../Asset/Iamges/png-transparent-logo-html-html5-thumbnail.png'
import js from '../Asset/Iamges/png-transparent-logo-html-html5-thumbnail.png'
import react from '../Asset/Iamges/png-transparent-logo-html-html5-thumbnail.png'
import next from '../Asset/Iamges/png-transparent-logo-html-html5-thumbnail.png'
import gatsby from '../Asset/Iamges/png-transparent-logo-html-html5-thumbnail.png'

const Project = () => {
  const experience = [
    {
      id: 1,
      title: 'html',
      src: html,
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      title: 'css',
      src: css,
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      title: 'js',
      src: js,
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      title: 'react',
      src: react,
      style: 'shadow-blue-800',
    },
    {
      id: 5,
      title: 'next',
      src: next,
      style: 'shadow-cyan-400',
    },
    {
      id: 6,
      title: 'gatsby',
      src: gatsby,
      style: 'shadow-blue-300',
    },
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
          <p className="py-6">Here are some sides I am good at</p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0"
        >
          {experience.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
