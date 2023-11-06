import React from 'react'
import ButtonNavbar from './ButtonNavbar'
import GiorgiVisualLogo from '../assets/logo-giorgi-visual.svg'

function Navbar() {
/*   const toggle = () => {
    let checkIcon = document.querySelector(".check-icon");
    if (checkIcon.style.display === false) {
      checkIcon.style.display = "flex";
    } else {
      checkIcon.style.display = "none";
    }
  }; */
  

  return (
    <header className="header-wrap">
      <figure className="header__logo-container">
        <img className="header__embed-logo" src={GiorgiVisualLogo} alt="" />
      </figure>
      <div className="menu-container">
      <input hidden=" " /* onClick="{toggle}" */ class="check-icon" id="check-icon" name="check-icon" type="checkbox"/>
            <label class="icon-menu" for="check-icon">
                <div class="bar bar--1"></div>
                <div class="bar bar--2"></div>
                <div class="bar bar--3"></div>
            </label>
        <nav className="menu-container__nav-mobile">
          <ButtonNavbar buttonName="Servicios"/>
          <ButtonNavbar buttonName="Portafolio"/>
          <ButtonNavbar buttonName="Contacto"/>
        </nav>
      </div>
      <nav className="navbar__main-nav">
        <ButtonNavbar buttonName="Servicios"/>
        <ButtonNavbar buttonName="Portafolio"/>
        <ButtonNavbar buttonName="Contacto"/>
      </nav>
    </header>
  )
}


export default Navbar