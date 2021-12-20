import React from 'react'

interface ICars {
  cars: {
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
  }[]
}

export const CarList: React.FC<ICars> = ({ cars }) => {

  return (
    <ul className='flex flex-wrap bg-cultured px-12 py-4 rounded-2xl w-full'>
      { cars.map((car, index) => 
          <li key={index}>{car.class}</li>
        )
      }
    </ul>
  )
}
