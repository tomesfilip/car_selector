import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailPage = () => {

  const { id } = useParams()

  return (
    <div>
      Detail page - { id }
    </div>
  )
}
