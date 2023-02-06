import styled from "styled-components"

const FooterStyle = styled.div`
position : absolute;
width : 100vw;
height : 70px;
bottom : 0;
padding : 0px 100px;
display : flex;
justify-content : right;
z-index : 5;
font-size : 20px;
color : white;
opacity : 0.5;
`

const FooterLinkIcon = styled.span`
margin-right : 50px;
`

const Footer = () => {
    return (
        <FooterStyle>
            <div style={{ width: "400px", textAlign: "right" }}>
                <FooterLinkIcon><img src="https://bclover-mobile.vicgame.kr/svg/naver_icon_wh.svg" alt="naver-icon" /></FooterLinkIcon>
                <FooterLinkIcon><img src="https://bclover-mobile.vicgame.kr/svg/brand_youtube_white.svg" alt="youtube-icon" /></FooterLinkIcon>
                <FooterLinkIcon><img src="https://bclover-mobile.vicgame.kr/svg/brand_facebook_white.svg" alt="facebook-icon" /></FooterLinkIcon>
                <FooterLinkIcon style={{ marginLeft: "70px", marginRight: 0 }}>
                    <img src="https://bclover-mobile.vicgame.kr/svg/solid_globe_white.svg" alt="earth-icon" />
                    JR
                </FooterLinkIcon>
            </div>
        </FooterStyle>
    )
}

export default Footer