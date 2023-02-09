import styled, {keyframes} from "styled-components"

 const MainContainer = styled.div`
width : 100vw;
height : 100vh;
display : flex;
justify-content : center;
overflow : hidden;
position : absolute;
z-index : 1;
`

const HomeContainer = styled.div`
position : absolute;
width : 100%;
height : 100%;
background-color : rgba(0,0,0,0.4);
display : flex;
justify-content : center;
align-items : center;
`

const boxAnimation = keyframes`
  0% {
   transform : translateY(20px);
   opacity: 0;
  }
  50% {
    transform : translateY(10px);
   opacity: 0;
  }
  100% {
   opacity: 1;
   transform : translateY(0px);
  }
`


export {MainContainer, HomeContainer, boxAnimation}