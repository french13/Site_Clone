import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ContentEmptyCard from '../components/ContentEmptyCard'
import { MainContainer, HomeContainer, boxAnimation } from '../styles/styleComponents'
import { tabletSize } from '../styles/tabletSize'
import TabletContentItems from '../components/TabletContentCards'


const ContainerContent = styled.div`
width : 100vw;
padding : 0px 130px;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
`
const ContentsTitle = styled.div`
width : 210px;
color : white;
font-size : 18px;
text-align : center;
letter-spacing : 15px;
font-weight : 300;
margin-bottom : 10px;
animation : ${boxAnimation} 1s linear;
`
const ContentsSubTitle = styled.div`
width : 210px;
height : 45px;
color : white;
text-align : center;
font-size : 30px;
position : relative;
font-weight : 900;
margin-bottom : 40px;
animation : ${boxAnimation} 1s linear;
`
const ContentsCards = styled.div`
width : 1400px;
height : 470px;
display : flex;
justify-content : space-between;
padding : 20px;
animation : ${boxAnimation} 1.5s linear;

@media screen and (${tabletSize}){
  display : none;
}
`
const Card = styled.div`
width : 235px;
height : 95%;
border : none;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
position : relative;
perspective : 800px;
&:hover {
  & > img {
    scale : 1.2; 
  }
}
& > img {
  width : 100%;
  height : 100%;
  transition : all 0.5s
}
`

const AlertIcon = styled.img`
height : 55%;
margin : 0 15px;
margin-top : 13%;
`

const CardContext = styled.div`
position : absolute;
width : 100%;
bottom : 0;
text-align : center;
padding : 30px 0;
background: linear-gradient(rgba(70,70,70,0), rgba(0,0,0,1));
border : none;
`

const ContentImg = styled.img`
width : 250px;
transition : all 0.3s;
&:hover {
  scale : 1.2;
}
`


const Contents = () => {
  return (
    <Layout>
      <MainContainer>
        <img src='https://bclover-mobile.vicgame.kr/image/contents/contents_back_1920.webp' alt="contents-bg" />
        <HomeContainer>
          <ContainerContent>
            <ContentsTitle>contents</ContentsTitle>
            <ContentsSubTitle>
              <div style={{ position: "absolute", width: "100%", top: 0, zIndex: 2 }}>コンテンツ</div>
              <div style={{ position: "absolute", width: "100%", borderBottom: "solid 20px rgba(255,255,255,0.3)", bottom: 0, zIndex: 1 }}></div>
            </ContentsSubTitle>
            <ContentsCards >
              <Card>
                <div style={{ width: '100%', height: '100%', transform: 'rotateY(-20deg)', overflow: 'hidden' }}>
                  <ContentEmptyCard />
                </div>
              </Card>
              <AlertIcon src='https://bclover-mobile.vicgame.kr/svg/deco_contents.svg' alt='line-icon' />
              <Card >
                <div style={{ width: '100%', height: '100%', transform: 'rotateY(20deg)', overflow: 'hidden' }}>
                  <ContentImg src='https://bclover-mobile.vicgame.kr/image/contents/contents_world.webp' />
                  <CardContext>
                    <div style={{ fontSize: 25, color: 'white', fontWeight: 800 }}>ワールド</div>
                    <div style={{ fontSize: 20, color: "lightgray" }}>
                      <span>＃冒険 ＃釣り</span>
                    </div>
                  </CardContext>
                </div>
              </Card>
              <AlertIcon src='https://bclover-mobile.vicgame.kr/svg/deco_contents.svg' alt='line-icon' />
              <Link href='/contents/storyMode'>
                <Card>
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    <ContentImg src='https://bclover-mobile.vicgame.kr/image/contents/contents_story.webp'  />
                    <CardContext>
                      <div style={{ fontSize: 25, color: 'white', fontWeight: 800 }}>ストーリーモード</div>
                      <div style={{ fontSize: 20, color: "lightgray" }}><span>#魔法の世界</span></div>
                    </CardContext>
                  </div>
                </Card>
              </Link>

              <AlertIcon src='https://bclover-mobile.vicgame.kr/svg/deco_contents.svg' alt='line-icon' />
              <Card>
                <div style={{ width: '100%', height: '100%', transform: 'rotateY(-20deg)', overflow: 'hidden' }}>
                  <ContentEmptyCard />
                </div>
              </Card>
              <AlertIcon src='https://bclover-mobile.vicgame.kr/svg/deco_contents.svg' alt='line-icon' />
              <Card>
                <div style={{ width: '100%', height: '100%', transform: 'rotateY(20deg)', overflow: 'hidden' }}>
                  <ContentEmptyCard />
                </div>
              </Card>
            </ContentsCards>
            <TabletContentItems />
          </ContainerContent>
        </HomeContainer>
      </MainContainer>
    </Layout>
  )
}

export default Contents