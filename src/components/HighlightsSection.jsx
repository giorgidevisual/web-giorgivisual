import React from 'react'

const HighlightsSection = () => {
  return (
    <section className="highlights-wrap">
      <div className="highlights-colum-one">
        <h2 className="highlights-colum-one__title">Logros Destacados</h2>
        <figure className="highlights__graph">
          <img src="src/assets/visual-diseño-web-graph-proyectos.svg" alt="" className="highlights__graph-embed" />
        </figure>
      </div>
      <div className="highlights-colum-two">
        <figure className="highlights-colum-two-figure-wrap">
          <picture className="highlights-colum-two__project">
          <span className="degrade"></span>
            <img src="" alt="" className="highlights-colum-two__image-embed" />
          </picture>
          <picture className="highlights-colum-two__project">
            <span className="degrade"></span>
            <img src="" alt="" className="highlights-colum-two__image-embed" />
          </picture>
          <picture className="highlights-colum-two__project">
            <span className="degrade"></span>
            <img src="" alt="" className="highlights-colum-two__image-embed" />
          </picture>
          <picture className="highlights-colum-two__project">
            <span className="degrade"></span>
            <img src="" alt="" className="highlights-colum-two__image-embed" />
          </picture>
        </figure>          
      </div>
    </section>
  )
}

export default HighlightsSection