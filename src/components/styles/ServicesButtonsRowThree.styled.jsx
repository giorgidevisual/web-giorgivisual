import styled from 'styled-components'

const StyleServicesButtons = styled.button` 
      display: flex;
      flex: 1 1 auto;
      min-width: 10rem;
      justify-content: center;
      align-items: center;
      padding: 1rem 1.5rem;
      font: 500 clamp(1rem, 0.929rem + 0.36vw, 1.5rem) 'Plain', sans-serif;
      border: ${(props) => props.border};
      background: ${(props) => props.background};
      background-color:${(props) => props.backgroundColor};
      color: ${(props) => props.color};
      border-radius: ${(props) => props.borderRadius};

      &:hover {
        background-color: ${(props) => props.color};
      }
  `;

const StyleGraphButton = styled.figure`
.graph-circle {
  display: flex;
  width: 3.8rem;
}

.graph-circle__row {
  flex-grow: 1;
  width: 0;
  object-fit: contain;
}

`

const ServicesButtonRowThree = (title) => {
  return (
   <> 
      <StyleServicesButtons
        border="none"
        borderRadius="6.25rem"
        background="linear-gradient(90deg, #F00 0%, #FF5C00 21.88%, #FFE800 100%)"
        color="#000"
      >
        {title.buttonSeven}
      </StyleServicesButtons>
      <StyleGraphButton>
        <figure className="graph-circle">
          <img src="src/assets/arrow-rowThree.svg" alt="" className="graph-circle__row" />
        </figure>
      </StyleGraphButton>  

      <StyleServicesButtons
        border="none"
        borderRadius="0"
        backgroundColor="#EBF1F1"
        color="#000"
      >
        {title.buttonEight}
      </StyleServicesButtons>

   </>
   
  )
};

export default ServicesButtonRowThree;
