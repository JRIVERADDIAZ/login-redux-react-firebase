import React from 'react'

import SkinScreen from './components/SkinScreen'

import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SkinScreen />
      </BrowserRouter>
    </>
  )
}

export default App
