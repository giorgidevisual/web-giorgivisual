import React from 'react'
import MainBackground from './animations/MainBackground'

function MainHome() {
  return (
    <>
 
    <main className="main-wrap">
      <figure className="main-background">
        <MainBackground/>
      </figure>
      <div className="main-container">
        <h1 className="main-container__title">Estrategias de Comunicación</h1>
        <span className="main-container__subtitle">Diseño digital</span>
        <p className="main-container__description">Ayudamos a tu empresa a hablar y conectar con tus clientes ideales a través de estrategias de comunicación visual.</p>
      </div>
    </main>
    </>
  )
}

export default MainHome