import React from 'react'
import { ICar } from '../interfaces/ICar'


export const CarListItem: React.FC<ICar> = ({ car }) => {
  return (
    <div className='p-2 xl:p-4 flex flex-col items-center bg-light-gray rounded-2xl cursor-pointer'>
      <h4 className='text-xl'>{ car.make }</h4>
      <p>{ car.model }</p>
      <p>{ car.year }</p>
      <p>{ car.fuel_type }</p>
      <p>{ car.class }</p>
      <p>{ car.transmission }</p>
    </div>
  )
}
