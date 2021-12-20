import React from 'react'
import SearchIconSvg from '../assets/img/search_icon.svg'

export const SearchBar = () => {
  return (
    <div className='relative w-1/3 bg-cultured rounded-2xl'>
      <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
        <button className='p-1 focus:outline-none focus:shadow-outline w-8'>
          <img src={SearchIconSvg} alt='search icon' />
        </button>
      </span>
      <input 
        type="text" 
        className='bg-cultured focus:outline-none w-full pl-10 pr-2 py-2 rounded-2xl' 
        placeholder='Search for cars'
      />
    </div>
  )
}
