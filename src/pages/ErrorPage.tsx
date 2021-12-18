import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <section id='error-page' className='pt-16 flex flex-col justify-start items-center'>
      <Link to='/' className='text-center text-2xl'>
        <h1 className='text-8xl'>404 - page not found</h1>
        Back to homepage
      </Link>
    </section>
  )
}
