import styled from "styled-components"


const TabletContentEmptyCardItem = styled.li`
display : flex;
justify-content : space-between;
align-items : center;
background-color : black;
width : 300px;
height : 90px;
margin-bottom : 10px;
padding : 0 25px;
font-size : 22px;
font-weight : 500;
color : gray;
`




const TabletContentEmptyCard = ()=>{
    return (
<TabletContentEmptyCardItem>
<div>COMING SOON</div>
<img src='https://bclover-mobile.vicgame.kr/svg/lock_contents.svg' width='20%' />
</TabletContentEmptyCardItem>
    )
}


export default TabletContentEmptyCard