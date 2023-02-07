import styled from "styled-components"

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


export {MainContainer, HomeContainer}