import React from 'react'
import ButtonNavbar from './ButtonNavbar'
import GiorgiVisualLogo from '../assets/logo-giorgi-visual.svg'

function Navbar() {
  return (
    <header className="header-wrap">
      <figure className="header__logo-container">
        <img className="header__embed-logo" src={GiorgiVisualLogo} alt="" />
      </figure>
      <nav className="navbar__main-nav">
        <ButtonNavbar buttonName="Servicios"/>
        <ButtonNavbar buttonName="Portafolio"/>
        <ButtonNavbar buttonName="Contacto"/>
      </nav>
    </header>
  )
}

export default Navbar