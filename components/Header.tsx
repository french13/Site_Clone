import React, { useState } from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import { tabletSize } from '../styles/tabletSize'
import { logo } from '../public/assets/imgSrc'
import Link from 'next/link'

const HeaderStyle = styled.div`
position : absolute;
width : 100%;
height : 100px;
display : flex;
justify-content : flex-end;
z-index : 5;
`
const MenuBarStyle = styled.div`
display : flex;
justify-content : flex-start;
height : 100%;
align-items : end;
padding-right : 20px;

@media screen and (${tabletSize}){
  display : none;
}
`
const MenuStyle = styled.div`
margin-right : 80px;
height : 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-content: center;
`
const HeaderOverlay: any = styled.div<{ translateY: string | number }>`
position : absolute;
top : 0;
left : 0;
width : 100%;
height : 100%;
background-color : rgba(0,0,0,0.5);
z-index : -1;
transform : translateY(${props => props.translateY});
transition : all 0.5s;
`
const TabletMenuBarStyle = styled.div`
  display : none;

@media screen and (${tabletSize}){
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding : 0px 50px;
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 50px;
  background-color : rgba(0,0,0,0.5);
}

`

const Header = () => {
  const [translateY, setTranslateY] = useState<string | number>('-100%')

  const menu = [
    { id: 1, title: "プロローグ", link: "/" },
    { id: 2, title: "キャラクター", link: "/" },
    { id: 3, title: "コンテンツ", link: "/contents" },
    { id: 4, title: "世界", link: "/" },
    { id: 5, title: "ギャラリー", link: "/" },
  ]

  const overLayIn = () => {
    setTranslateY(0)
  }
  const overLayOut = () => {
    setTranslateY("-100%")
  }


  return (
    <HeaderStyle>
      <HeaderOverlay translateY={translateY} ></HeaderOverlay>
      <MenuBarStyle>
        {
          menu.map((item) => {
            return (
              <div onMouseOver={overLayIn} onMouseOut={overLayOut} style={{ height: "100%" }}>
                <MenuItem item={item} />
              </div>
            )
          })
        }
        <MenuStyle onMouseOver={overLayIn} onMouseOut={overLayOut}>
          <img src='https://bclover-mobile.vicgame.kr/svg/share_icon.svg' alt='share-icon' />
        </MenuStyle>
        <MenuStyle onMouseOver={overLayIn} onMouseOut={overLayOut} >
          <img src='https://bclover-mobile.vicgame.kr/svg/sidemenu_icon.svg' alt='sideBar-icon' />
        </MenuStyle>

      </MenuBarStyle>
      <TabletMenuBarStyle>
        <Link style={{height : '100%'}} href='/'><img src={logo} alt="logo" width={100} /></Link>
        <div style={{display : 'flex',  height : '100%', width : '70px', justifyContent : 'space-between', alignItems : "center",}}>
          <img src='https://bclover-mobile.vicgame.kr/svg/share_icon.svg' alt='share-icon' width={20}/>
          <img src='https://bclover-mobile.vicgame.kr/svg/sidemenu_icon.svg' alt='sideBar-icon'width={20} />
        </div>
      </TabletMenuBarStyle>

    </HeaderStyle>
  )
}

export default Header