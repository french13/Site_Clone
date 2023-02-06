import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { homeBgVideo } from '../public/assets/imgSrc'
import {RightCircleOutlined} from '@ant-design/icons'

const MainContainer = styled.div`
width : 100vw;
height : 100vh;
display : flex;
justify-content : center;
overflow : hidden;
position : absolute;
z-index : 1;
`

const VideoStyle = styled.video`
width : 2500px;
`

const HomeContainer = styled.div`
position : absolute;
width : 100%;
height : 100%;
background-color : rgba(0,0,0,0.4);
display : flex;
justify-content : center;
align-items : center;
`

const ContainerContent = styled.div`
width : 100vw;
padding : 0px 130px;
display : flex;
`

const Home= () => {
  return (
    <Layout>
      <MainContainer>
      <VideoStyle autoPlay muted playsInline loop>
        <source src={homeBgVideo} type='video/mp4' />
      </VideoStyle>
      <HomeContainer>
          <ContainerContent>
            <div style={{width : "800px", height : "360"}}>
              <img src='https://bclover-mobile.vicgame.kr/image/bc_main_logo_kr.webp'/>
            </div>
            <div style={{display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", width : "280px"}}>
              <div style={{fontSize : "30px", fontWeight : 800, color : "white", width : "100%"}}>블랙클로버 세계를 <br/> 게임으로 만나보세요</div>
              <div style={{width: "100%", borderBottom : "solid 0.5px white",  margin: "20px 0"}}></div>
              <div style={{width : "100%", fontSize : "22px", color : "white", fontWeight : 800}}> <RightCircleOutlined /> 트레일러 보기</div>
            </div>

          </ContainerContent>
      </HomeContainer>
      </MainContainer>
    </Layout>
  )
}

export default Home
