import styled from "styled-components"
import Link from "next/link"
import { tabletSize } from "../styles/tabletSize"
const LinkItems = styled.div`
position : absolute;
top : 100px;
right : 0;
width : 350px;
z-index : 5;

@media screen and (${tabletSize}){
    display : none;
  }
`
const LinkItem = styled.div`
width : 100%;
height : 100px;
position : relative;
`
const ItemImg = styled.img`
position : absolute;
z-index : 10;
width : 250px;
height : 100px;
`
const LinkCafeContext = styled.div`
position : absolute;
height : 80px;
width : 250px;
bottom : 0;
border : solid 1px white;
border-radius : 2px;
background-color : rgba(255,255,255, 0.3);
padding : 15px;
display: flex;
justify-content: center;
flex-direction: column;
align-content: center;
`

const LinkCafeTitle = styled.div`
font-size : 20px;
font-weight : 900;
height: 20px;
margin-bottom : 10px;
color : white;
`

const LinkWrapper = () => {
    return (
        <LinkItems>
            <LinkItem>
                <ItemImg src="https://bclover-mobile.vicgame.jp/image/tw_btn_2x.webp" alt="카페링크 이미지" />
                <LinkCafeContext>
                    <LinkCafeTitle>公式Twitter</LinkCafeTitle>
                    <div>
                        <span style={{ fontSize: '13px', fontWeight: "400", height: "12px", color : "white", marginRight: "5px" }}>最新情報を見る</span>
                        <img src="https://bclover-mobile.vicgame.kr/svg/arrow_icon.svg" width={25} alt="arrow-icon" />
                    </div>
                </LinkCafeContext>
            </LinkItem>
            <LinkItem>
                <ItemImg src="https://bclover-mobile.vicgame.kr/image/banner_kr.webp" alt="개발자편지 이미지" />
            </LinkItem>
        </LinkItems>
    )
}

export default LinkWrapper