import React from 'react'
import ServicesButtonRowOne from './styles/ServicesButtonsRowOne.styled'
import ServicesButtonRowTwo from './styles/ServicesButtonsRowTwo.styled';
import ServicesButtonRowThree from './styles/ServicesButtonsRowThree.styled';

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
            <ServicesButtonRowOne titleBtnOne="Branding" titleBtnTwo="Identidad de marca" titleBtnThree="Identidad verbal"/>
          </div>
          <div className="service-nav-container__row">
            <ServicesButtonRowTwo titleBtnOne="Edición de video" titleBtnTwo="Creación de contenido" titleBtnThree="Fotografía"/>
          </div>
          <div className="service-nav-container__row">
            <ServicesButtonRowThree titleBtnOne="Interfaz y experiencia de usuario UI/UX" titleBtnTwo="Desarrollo web"/>
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