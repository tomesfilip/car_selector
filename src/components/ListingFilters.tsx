import React, { useState } from 'react'
import MoustacheSvg from '../assets/img/moustache.svg'

export const ListingFilters = () => {
  const [filterOptions] = useState([
    'make',
    'model',
    'fuel type',
    'drive',
    'cylinders',
    'transmission',
    'year',
    'fuel consumption'
  ])

  return (
    <div className='bg-carnelian h-full w-2/5 md:w-1/5 fixed'>
      <ul className='flex flex-col items-center justify-around min-h-screen'>
        <img src={MoustacheSvg} alt='moustache' className='px-4'/>
        {filterOptions.map(option =>
          <li className='text-xl text-white' key={option}>{option}</li>
        )}
      </ul>
    </div>
  )
}
