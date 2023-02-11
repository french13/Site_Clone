import styled from "styled-components"
import Link from "next/link"
import { tabletSize } from "../styles/tabletSize"
import React, { useEffect, useRef, useState } from "react"
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
width : 250px;
height : 100px;
position : relative;
overflow : hidden;
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
    const firstImg = "https://bclover-mobile.vicgame.jp/image/banner_jp.webp"
    const secondImg = "https://bclover-mobile.vicgame.jp/image/glay_banner_asta.webp"

    const carouselRef: React.RefObject<HTMLDivElement> = useRef(null)

    let array = [firstImg, secondImg, firstImg]

    let count = 1;


    setInterval(() => {
        if (count < 3) {
            carouselRef.current != null && (
                carouselRef.current.style.transform = `translateX(${-250 * count}px)`)
            count++;
        } else {
            carouselRef.current != null && (
                carouselRef.current.style.transform = 'translateX(0px)')
            count = 1;
        }
    }, 3000)


    return (
        <LinkItems>
            <LinkItem>
                <Link href='https://twitter.com/bclover_mobile' target='_blank'>
                    <ItemImg src="https://bclover-mobile.vicgame.jp/image/tw_btn_2x.webp" alt="카페링크 이미지" />
                </Link>
                <LinkCafeContext>
                    <LinkCafeTitle>公式Twitter</LinkCafeTitle>
                    <div>

                        <span style={{ fontSize: '13px', fontWeight: "400", height: "12px", color: "white", marginRight: "5px" }}>最新情報を見る</span>
                        <img src="https://bclover-mobile.vicgame.kr/svg/arrow_icon.svg" width={25} alt="arrow-icon" />

                    </div>
                </LinkCafeContext>
            </LinkItem>
            <LinkItem>
                <div style={{ width: "250px", height: "100%" }}>
                    <div ref={carouselRef} style={{ display: "flex", justifyContent: 'left', width: '100%', height: '100%', transition: 'all 2s' }}>
                        <Link href='https://www.youtube.com/watch?v=xf72k5iNoZg' target='_blank'><ItemImg src={array[0]} alt="개발자편지 이미지" /></Link>
                        <Link href='https://www.youtube.com/watch?v=xf72k5iNoZg' target='_blank'><ItemImg style={{ left: 250 }} src={array[1]} alt="개발자편지 이미지" /></Link>
                        <Link href='https://www.youtube.com/watch?v=xf72k5iNoZg' target='_blank'><ItemImg style={{ left: 500 }} src={array[2]} alt="개발자편지 이미지" /></Link>
                    </div>
                </div>
            </LinkItem>
        </LinkItems>
    )
}

export default LinkWrapper