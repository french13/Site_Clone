import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/Layout'
import { homeBgVideo } from '../public/assets/imgSrc'
import { RightCircleOutlined } from '@ant-design/icons'
import { tabletSize } from '../styles/tabletSize'
import { MainContainer, HomeContainer } from '../styles/styleComponents'

const VideoStyle = styled.video`
width : 2500px;
`

const ContainerContent = styled.div`
width : 100vw;
padding : 0px 130px;
display : flex;
font-size : 30px;

@media screen and (${tabletSize}){
  flex-direction : column;
  justify-content : center;
  align-items : center;
  text-align : center;
  font-size : 20px;
  & > div > img {
    width : 300px;
    margin-bottom : 50px;
  }
  & > .line {
    width : 60%;
  }
}
`

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <VideoStyle autoPlay muted playsInline loop>
          <source src={homeBgVideo} type='video/mp4' />
        </VideoStyle>
        <HomeContainer>
          <ContainerContent  >
            <div>
              <img src='https://bclover-mobile.vicgame.kr/image/bc_main_logo_kr.webp' width={800}/>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "280px" }}>
              <div style={{ fontWeight: 800, color: "white", width: "100%" }}>블랙클로버 세계를 <br /> 게임으로 만나보세요</div>
              <div className='line' style={{ width: "100%", borderBottom: "solid 0.5px white", margin: "20px 0" }}></div>
              <div style={{ width: "100%", fontSize: "22px", color: "white", fontWeight: 800 }}> <RightCircleOutlined /> 트레일러 보기</div>
            </div>
          </ContainerContent>
        </HomeContainer>
      </MainContainer>
    </Layout>
  )
}

export default Home
