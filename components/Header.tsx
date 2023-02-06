import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
position : absolute;
width : 100%;
height : 100px;
background-color : rgba(0,0,0,0.5);
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
`
const MenuStyle = styled.div`
margin-right : 80px;
height : 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-content: center;

`

const MenuTitleStyle = styled.div`
font-size : 18px;
margin-bottom : 5px;
font-weight : 900;
color : white;
`
const MenuUnderlineStyle = styled.div`
height : 3px;
background-color : white;
`

const Header = () => {
  return (
    <HeaderStyle>
      <MenuBarStyle>
        <MenuStyle>
          <MenuTitleStyle>프롤로그</MenuTitleStyle>
          <MenuUnderlineStyle></MenuUnderlineStyle>
        </MenuStyle>
        <MenuStyle>
          <MenuTitleStyle>캐릭터</MenuTitleStyle>
          <MenuUnderlineStyle></MenuUnderlineStyle>
        </MenuStyle>
        <MenuStyle>
          <MenuTitleStyle><Link href="/contents">컨텐츠</Link> </MenuTitleStyle>
          <MenuUnderlineStyle></MenuUnderlineStyle>
        </MenuStyle>
        <MenuStyle>
          <MenuTitleStyle>세계</MenuTitleStyle>
          <MenuUnderlineStyle></MenuUnderlineStyle>
        </MenuStyle>
        <MenuStyle>
          <MenuTitleStyle>갤러리</MenuTitleStyle>
          <MenuUnderlineStyle></MenuUnderlineStyle>
        </MenuStyle>
        <MenuStyle>
          <img src='https://bclover-mobile.vicgame.kr/svg/share_icon.svg' alt='share-icon' />
        </MenuStyle>
        <MenuStyle >
          <img src='https://bclover-mobile.vicgame.kr/svg/sidemenu_icon.svg' alt='sideBar-icon' />
        </MenuStyle>

      </MenuBarStyle>

    </HeaderStyle>
  )
}

export default Header