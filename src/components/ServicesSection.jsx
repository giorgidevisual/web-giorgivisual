import React from 'react'
import ServicesButtonRowOne from './styles/ServicesButtonsRowOne.styled'
import ServicesButtonRowTwo from './styles/ServicesButtonsRowTwo.styled'
import ServicesButtonRowThree from './styles/ServicesButtonsRowThree.styled'

const ServicesSection = () => {
  return (
    <section className="services-wrap">
      <div className="services-header">
        <figure className="services-header__graph-container">
          <img src="/src/assets/visual-diseño-web-aye-one.svg" alt="" className="services-header__graph-embed" />  
        </figure> 
        <h2 className="services-header__title">
          ¿Qué problema quieres solucionar?
        </h2>
      </div>
      <div className="services-navWrap">
        <div className="services-nav-container">
          <div className="service-nav-container__row">
            <ServicesButtonRowOne buttonOne="Branding" buttonTwo="Identidad de marca" buttonThree="Identidad verbal"/>
          </div>
          <div className="service-nav-container__row">
            <ServicesButtonRowTwo buttonFour="Edición de video" buttonFive="Creación de contenido" buttonSix="Fotografía"/>
          </div>
          <div className="service-nav-container__row">
            <ServicesButtonRowThree buttonSeven="Interfaz y experiencia de usuario UI/UX" buttonEight="Desarrollo web"/>
          </div>
        </div>
        <figure className="service-nav-container__graph-container">
          <img src="/src/assets/visual-diseño-web-graph.svg" className="service-nav-container__graph-embed" />
        </figure>
      </div>
    </section>
  )
};

export default ServicesSection;