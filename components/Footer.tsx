import styled from "styled-components"
import { tabletSize } from "../styles/tabletSize"

const FooterStyle = styled.div`
position : absolute;
width : 100vw;
height : 70px;
bottom : 0;
padding : 0px 100px;
display : flex;
justify-content : right;
z-index : 5;
font-size : 18px;
color : white;
opacity : 0.5;

@media screen and (${tabletSize}){
    display : none;
}
`
const FooterLinkIcon = styled.div`
width : 50px;
margin-right : 50px;
`

const Footer = () => {
    return (
        <FooterStyle>
            <div style={{ width: "400px", display : "flex" }}>
                <FooterLinkIcon><img src="https://bclover-mobile.vicgame.kr/svg/naver_icon_wh.svg" alt="naver-icon" /></FooterLinkIcon>
                <FooterLinkIcon><img src="https://bclover-mobile.vicgame.kr/svg/brand_youtube_white.svg" alt="youtube-icon" /></FooterLinkIcon>
                <FooterLinkIcon><img src="https://bclover-mobile.vicgame.kr/svg/brand_facebook_white.svg" alt="facebook-icon" /></FooterLinkIcon>
                <FooterLinkIcon>
                    <img src="https://bclover-mobile.vicgame.kr/svg/solid_globe_white.svg" alt="earth-icon" /><span>JR</span>
                </FooterLinkIcon>
            </div>
        </FooterStyle>
    )
}

export default Footer