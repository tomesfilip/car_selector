import React from 'react'
import { Link } from 'react-router-dom'
import RedHelmetSvg from '../assets/img/red_helmet.svg'
import { SearchBar } from './SearchBar'

export const ListingTopPanel = () => {
  return (
    <header className='w-full flex p-4 items-center justify-center relative'>
      <SearchBar />
      <Link to={'/profile'} className='absolute right-10'>
        <img src={RedHelmetSvg} alt='red helmet profile icon' />
      </Link>
    </header>
  )
}
