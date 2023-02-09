import Link from "next/link"
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
display : flex;
align-items : start;
margin-right : 
`

const Footer = () => {
    return (
        <FooterStyle>
            <div style={{ width: "400px", display : "flex", justifyContent : "right" }}>
    
                <FooterLinkIcon style={{marginRight : '46px'}}><Link href='https://www.youtube.com/channel/UCZdtBsOJZPg9teUyKaqSXgg' target='_blank'><img src="https://bclover-mobile.vicgame.kr/svg/brand_youtube_white.svg" alt="youtube-icon" /></Link></FooterLinkIcon>
                <FooterLinkIcon style={{marginRight : '90px'}}><Link href='https://twitter.com/bclover_mobile' target='_blank'><img src="https://bclover-mobile.vicgame.jp/svg/brand_twitter_white.svg" alt="facebook-icon" /></Link></FooterLinkIcon>
                <FooterLinkIcon>
                    <img src="https://bclover-mobile.vicgame.kr/svg/solid_globe_white.svg" alt="earth-icon" style={{marginRight : '5px'}} /><div style={{lineHeight: '20px'}}>JR</div>
                </FooterLinkIcon>
            </div>
        </FooterStyle>
    )
}

export default Footer