import styled from 'styled-components'

const StyleServicesButton = styled.button` 
      display: flex;
      border-style: none;
      justify-content: center;
      min-width: 10rem;
      background-color: #FFE833;
      color: #000;
      border-radius: 6.25rem;
      padding: 0.5rem 1.5rem;
      font: 500 clamp(1rem, 1.5vw, 2.5rem) 'Plain', sans-serif; 

      &:hover {
        background-color: ${(props) => props.color};
      }
  `;

  const ServicesButtonTwo = styled(StyleServicesButton)`
    background-color: transparent;
    border: 3px solid #FF3BA1;
    border-radius: 0; 
    color: #fff;
  `

  const ServicesButtonThree = styled(StyleServicesButton)`
    background-color: transparent;
    border: 3px solid #00FFE2; 
    color: #fff;
  `

 const ServicesButtonRowOne = (title) => {
   return (
    <>
      <StyleServicesButton>{title.buttonOne}</StyleServicesButton>
      <ServicesButtonTwo>{title.buttonTwo}</ServicesButtonTwo>
      <ServicesButtonThree>{title.buttonThree}</ServicesButtonThree>

    </>
    
   )
 };
 
 export default ServicesButtonRowOne;



