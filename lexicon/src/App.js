import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Start from './pages/Start'
import Main from './pages/Main'

function App() {
  return (
    <Routes>
      <Route path="/lexicon" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route path="*" element={<Start />} />
      </Route>
    </Routes>
  )
}
export default App
