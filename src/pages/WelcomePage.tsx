import React from 'react'
import { Link } from 'react-router-dom'

export const WelcomePage = () => {
  return (
    <section id='welcome-page' 
      className='flex flex-col md:flex-row items-center justify-around md:justify-evenly'>
      <div className='pro-side w-full md:w-1/2 flex items-center justify-center h-full px-4 md:px-8'>
        <Link to={'/listing'}>
          <h2 className='text-6xl  md:text-8xl text-center'>I KNOW WHAT I’M DOING</h2>
        </Link>
      </div>
      <div className='newbie-side w-full md:w-1/2 flex items-center justify-center h-full px-4 md:px-8'>
        <Link to={'/listing'}>
          <h2 className='text-6xl md:text-8xl text-center'>PLEASE HELP ME</h2>
        </Link>
      </div>
    </section>
  )
}
