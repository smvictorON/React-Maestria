import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      {/* exemplo de como usar o isActive do NavLink para atribuir alguma classe especifica */}
      {/* como padrão ele atribui a classe .active */}
      {/* <NavLink to="/" className={({isActive}) => (isActive ? 'something':'otherthing')}>Home</NavLink> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar