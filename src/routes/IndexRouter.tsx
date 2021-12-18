import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DetailPage } from '../pages/DetailPage'
import { ErrorPage } from '../pages/ErrorPage'
import { ListingPage } from '../pages/ListingPage'
import { WelcomePage } from '../pages/WelcomePage'

export const IndexRouter: React.FC = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/listing' element={<ListingPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
