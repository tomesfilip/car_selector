import React from 'react'
import { Link } from 'react-router-dom'
import { CarListItem } from './CarListItem'

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
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4 bg-cultured px-2 lg:px-12 py-4 rounded-2xl w-full text-center'>
      { cars.map((car, index) =>
          <Link key={index} to={`/cars/${index}`}>
            <CarListItem car={car} />
          </Link>
        )
      }
    </ul>
  )
}
