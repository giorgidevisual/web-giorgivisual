import styled from 'styled-components'

const StyleServicesButtonRowThree = styled.button` 
      display: flex;
      border: none;
      justify-content: center;
      min-width: 10rem;
      border-radius: 6.25rem;
      background: linear-gradient(90deg, #F00 0%, #FF5C00 21.88%, #FFE800 100%);
      color: #000;
      padding: 0.5rem 1.5rem;
      font: 500 clamp(1rem, 1.5vw, 2.5rem) 'Plain', sans-serif; 

      &:hover {
        background-color: ${(props) => props.color};
      }
  `;

  const StyleServicesButtonRowThree__btnTwo = styled(StyleServicesButtonRowThree)`
    background: none;
    background-color: #EBF1F1;
    padding: 0.5rem 0.6rem; 
    border-radius: 0;  
  `

 const ServicesButtonRowThree = ({titleBtnOne, titleBtnTwo}) => {
   return (
    <>
      <StyleServicesButtonRowThree>{titleBtnOne}</StyleServicesButtonRowThree>
      <StyleServicesButtonRowThree__btnTwo>{titleBtnTwo}</StyleServicesButtonRowThree__btnTwo>     

    </>
    
   )
 };
 
 export default ServicesButtonRowThree;



