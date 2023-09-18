import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const MainLayout = () => {
  const { theme } = useSelector((state) => state.lookSlice)
  useEffect(() => {
    if (document) document.body.dataset["bsTheme"] = theme;
  }, [theme]);
  return (
    <div className="wrapper">
      <Header />
      <div className="content container">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
