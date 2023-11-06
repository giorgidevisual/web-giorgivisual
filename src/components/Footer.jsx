import React from 'react'

const Footer = () => {
  return (
    <section className="footer-wrap">
      <div className="footer-container">
        <div className="legal-links"></div>
        <picture className="logo-footer">
          <img className="logo-footer-embed" src="src/assets/Isotipo-giorgi-visual.svg" alt="" />
        </picture>
        <div className="social-media-container">
            <div className="background-social-media">
              <img src="src/assets/background-social-media-1.svg" alt="" className="background-embed" />
              <p className="social-media">Tiktok</p>
            </div>
            <div className="background-social-media">
              <img src="src/assets/background-social-media-2.svg" alt="" className="background-embed" />
              <p className="social-media">Instagram</p>
            </div>
            <div className="background-social-media">
              <img src="src/assets/background-social-media-3.svg" alt="" className="background-embed" />
              <p className="social-media">Linkedin</p>
            </div>
        </div>  
      </div>
      <div className="all-rights-reserved">
        <p className='all-rights-reserved-text'>© 2023 – Giorgi Visual – Todos Los Derechos Reservados.</p>
      </div>
    </section>
  )
}

export default Footer