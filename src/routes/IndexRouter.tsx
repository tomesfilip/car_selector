import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DetailPage } from '../pages/DetailPage'
import { ErrorPage } from '../pages/ErrorPage'
import { ListingPage } from '../pages/ListingPage'
import { ProfilePage } from '../pages/ProfilePage'
import { QuestionsPage } from '../pages/QuestionsPage'
import { WelcomePage } from '../pages/WelcomePage'

export const IndexRouter: React.FC = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/cars' element={<ListingPage />} />
        <Route path='/questions' element={<QuestionsPage />} />
        <Route path='/cars/:id' element={<DetailPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
