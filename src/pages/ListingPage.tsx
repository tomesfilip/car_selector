import React from 'react'
import { ListingFilters } from '../components/ListingFilters'
import { ListingTopPanel } from '../components/ListingTopPanel'
import { CarList } from '../components/CarList'

export const ListingPage = () => {
  return (
    <section className='flex'>
      <ListingFilters />
      <main className='w-full px-8'>
        <ListingTopPanel />
        <CarList />
      </main>
    </section>
  )
}
