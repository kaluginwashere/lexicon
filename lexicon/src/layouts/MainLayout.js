import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const MainLayout = () => {
  const { theme } = useSelector((state) => state.lookSlice)
  const themeColor = `${theme} wrapper`
  return (
    <div className={themeColor}>
      <Header />
      <div className="content container">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
