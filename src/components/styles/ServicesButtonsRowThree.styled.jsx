import styled from 'styled-components'

const StyleServicesButtonRowThree = styled.button` 
      display: flex;
      border: ${(props) => props.border};
      justify-content: center;
      min-width: 10rem;
      border-radius: ${(props) => props.borderRadius };//6.25rem;
      background: ${(props) => props.background};
      color: #000;
      padding: 0.5rem 1.5rem;
      font: 500 clamp(1rem, 1.5vw, 2.5rem) 'Plain', sans-serif; 

      &:hover {
        background-color: ${(props) => props.color};
      }
  `;

 const ServicesButtonRowThree = (title) => {
   return (
    <>
      <StyleServicesButtonRowThree
        border="none"
        background="linear-gradient(90deg, #F00 0%, #FF5C00 21.88%, #FFE800 100%)"
        borderRadius="6.25rem"
      >
        {title.buttonOne}
      </StyleServicesButtonRowThree>
{
      <StyleServicesButtonRowThree
        background="#EBF1F1"
        border="none"
      >
        {title.buttonTwo}
      </StyleServicesButtonRowThree>}

    </>
    
   )
 };
 
 export default ServicesButtonRowThree;



