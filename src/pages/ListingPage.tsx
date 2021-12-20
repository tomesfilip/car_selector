import React from 'react'
import { ListingFilters } from '../components/ListingFilters'
import { ListingTopPanel } from '../components/ListingTopPanel'
import { CarList } from '../components/CarList'
import { useFetch } from '../api/api'


export const ListingPage = () => {

  const { data: cars, isLoading } = useFetch()


  return (
    <section className='flex'>
      <ListingFilters />
      <main className='w-full px-8'>
        <ListingTopPanel />
        {/* { error && <div className='text-red'>{ error }</div> } */}
        { isLoading && <div className='text-gray'>Loading...</div> }
        { cars &&  <CarList cars={cars} />}
      </main>
    </section>
  )
}
