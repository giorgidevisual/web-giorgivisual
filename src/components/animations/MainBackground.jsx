import React from 'react'
import circle from  '/src/assets/circle.svg'
import halfCircle from '/src/assets/half-circle.svg'

const MainBackground = () => {
  return (
    <>
    <picture className="main-background__circle-container">
      <img src={circle} type="image/svg" alt="" className="main-background__image-embed" />
    </picture>
    <picture className="main-background__halfcircle-container">
      <img src={halfCircle} type="image/svg" alt="" className="main-background__image-embed" />
    </picture>
    <picture className="main-background__halfcircle-container">
      <img src={halfCircle} type="image/svg" alt="" className="main-background__image-embed" />
    </picture>
    </>
   
  )
}

export default MainBackground

