import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/slices/lookSlice'
import { BsSun } from 'react-icons/bs'
import { BsMoonFill } from 'react-icons/bs'
import Button from 'react-bootstrap/esm/Button'

const ThemeToggler = () => {
  const { theme } = useSelector((state) => state.lookSlice)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTheme())
  }

  if (theme === 'dark')
    return (
      <div>
        <Button variant="outline-secondary" onClick={handleToggle}>
          <BsSun />
        </Button>
      </div>
    )
  if (theme === 'light')
    return (
      <div>
        <Button variant="outline-secondary" onClick={handleToggle}>
          <BsMoonFill />
        </Button>
      </div>
    )
}

export default ThemeToggler
