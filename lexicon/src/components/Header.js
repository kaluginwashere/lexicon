import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import ThemeToggler from './ThemeToggle'

function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">Lexicon</Navbar.Brand>
        <Navbar className="justify-content-end">
          <ThemeToggler />
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default Header
