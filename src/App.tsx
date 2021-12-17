
import React from 'react'
import { api } from './api/api'
import './App.css'

async function getCars() {
  try {
    const response = await api.get('/cars?limit=10&cylinders=4')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getCars()


function App() {
  return (
    <div className="App">
    </div>
  )
}

export default App
