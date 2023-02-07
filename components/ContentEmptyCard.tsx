
import styled from "styled-components"

const EmptyCard = styled.div`
width : 235px;
height : 95%;
border : none;
background: linear-gradient(rgb(50,50,50), black);
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
`


const ContentEmptyCard = () => {

    return (
        <EmptyCard>
            <img src='https://bclover-mobile.vicgame.kr/svg/lock_contents.svg' />
            <div style={{ fontSize: "27px", marginTop: 10, color: "gray", fontWeight: 500 }}>COMING SOON</div>
        </EmptyCard>
    )


}

export default ContentEmptyCard