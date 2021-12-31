import React, {  } from 'react'
import { useParams } from 'react-router-dom'
import { ICar } from '../interfaces/ICar'
// import { ICar } from '../interfaces/ICar'

export const DetailPage: React.FC<ICar> = ({ car }) => {

  const { id } = useParams()

  return (
    <div>
      Detail page - { id }
      
      <h2>{car.make}</h2>
    </div>
  )
}
