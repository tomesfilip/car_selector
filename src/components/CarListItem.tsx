import React from 'react'

interface ICar {
  car: {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
  }
}

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
