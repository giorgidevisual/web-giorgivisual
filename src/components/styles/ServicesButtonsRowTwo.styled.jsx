import styled from 'styled-components'

const StyleServicesButtonRowTwo = styled.button` 
      display: flex;
      border: 3px solid #fff;
      justify-content: center;
      min-width: 10rem;
      background-color: transparent;
      color: #fff;
      border-radius: 6.25rem;
      padding: 0.5rem 1.5rem;
      font: 500 clamp(1rem, 1.5vw, 2.5rem) 'Plain', sans-serif; 

      &:hover {
        background-color: ${(props) => props.color};
      }
  `;

  const StyleServicesButtonRowTwo__btnTwo = styled(StyleServicesButtonRowTwo)`
    background-color: transparent;
    border: 3px solid #00E83B;
    border-radius: 6.25rem;
     padding: 0.5rem 0.6rem; 
    color: #fff;
  `

  const StyleServicesButtonRowTwo__btnThree = styled(StyleServicesButtonRowTwo)`
    background-color: transparent;
    border: 3px solid #FF0000; 
    color: #fff;
  `

 const ServicesButtonRowTwo = ({titleBtnOne, titleBtnTwo, titleBtnThree}) => {
   return (
    <>
      <StyleServicesButtonRowTwo>{titleBtnOne}</StyleServicesButtonRowTwo>
      <StyleServicesButtonRowTwo__btnTwo>{titleBtnTwo}</StyleServicesButtonRowTwo__btnTwo>
      <StyleServicesButtonRowTwo__btnThree>{titleBtnThree}</StyleServicesButtonRowTwo__btnThree>
      

    </>
    
   )
 };
 
 export default ServicesButtonRowTwo;



