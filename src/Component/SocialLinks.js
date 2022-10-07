import React from 'react'
import { FaLinkedin, FaMailBulk } from 'react-icons/fa'
import {BsFillPersonLinesFill, BsTwitter}  from 'react-icons/bs'


const SocialLinks = () => {

    const links=[
        {
            id:1, 
            child: (
                <>
                Linked IN <FaLinkedin />
                </>
              
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2, 
            child: (
                <>
                Twitter <BsTwitter />
                </>
              
            ),
            href: 'https://twitter.com',
        },
        {
            id:3, 
            child: (
                <>
                Mail <FaMailBulk />
                </>
              
            ),
            href: 'mailto:msutsho56@gmail.com',
        },
        {
            id:4, 
            child: (
                <>
                More Info <BsFillPersonLinesFill />
                </>
              
            ),
            href: '../Component/About.js',
            style: 'rounded-tr-md'
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>

            {
                links.map(({id,child,href})=>(
                    <li key={id} className='ml-[-100px] hover:ml-[-10px] 
                    hover:rounded-md duration-300 flex justify-between 
                    items-center w-40 h-14 px-4 bg-gray-500'>
                    <a href={href}
                    className='flex justify-between 
                    items-center w-full text-white' >
                    {child}
                    </a>
                    </li>
                ))
            }

        </ul>
    </div>
  )
}

export default SocialLinks
