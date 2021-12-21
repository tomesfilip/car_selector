import axios from 'axios'
import { useEffect, useState } from 'react'
import { ICars } from '../interfaces/ICars'


const baseURL = 'https://api.api-ninjas.com/v1/cars'

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'X-Api-Key': process.env.REACT_APP_NINJA_CARS || ''
  }
})



export const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<object>()
  const [data, setData] = useState<ICars['cars']>([])

  useEffect(() => {
    api.get('', {
      params: {
        limit: 64,
        make: 'audi',
        year: 2021
      }
    }).then(data => {
      setData(data.data)
      setIsLoading(false)
      setError({})
    })
    .catch(err => {
      setIsLoading(false)
      setError(err)
    })
  }, [])

  return { data, isLoading, error }
}