import { Button } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { CaretRightOutlined, SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons'
import { MainContainer, HomeContainer } from '../../styles/styleComponents'


const VideoStyle = styled.video`
width : 2500px;
`
const ContainerContent = styled.div`
width : 100vw;
padding : 0px 50px;
display : flex;
justify-content : left;
`
const ContentsTitle = styled.div`
width : 210px;
color : white;
font-size : 18px;
text-align : center;
letter-spacing : 15px;
font-weight : 300;
margin-bottom : 10px;
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
`
const ButtonStyle = styled.button`
background : none;
border : solid 1px white;
height : 60px;
border-radius : 3px;
width : 60px;
margin-right : 10px;
font-size : 30px;
color : white;
`

const StoryMode = () => {
  return (
    <Layout>
      <MainContainer>
        <VideoStyle autoPlay muted playsInline loop>
          <source src='https://bclover-mobile-cqfrbqgyfxbaamg7.z01.azurefd.net/video/storyMode.mp4' type='video/mp4' />
        </VideoStyle>
        <HomeContainer>
          <ContainerContent>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "200px" }}>
              <div style={{ textAlign: "center", fontSize: "20px", color: "white" }}>
                <SwapLeftOutlined style={{ fontSize: "30px" }} />돌아가기
              </div>
            </div>
            <div style={{ width: "900px", height: "450px" }}>
              <ContentsTitle>contents</ContentsTitle>
              <ContentsSubTitle style={{ marginBottom: "70px" }}>
                <div style={{ position: "absolute", width: "100%", top: 0, zIndex: 2 }}>콘텐츠</div>
                <div style={{ position: "absolute", width: "100%", borderBottom: "solid 20px rgba(255,255,255,0.3)", bottom: 0, zIndex: 1 }}></div>
              </ContentsSubTitle>
              <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: "40px", color: 'white' }}>스토리모드</h1>
                <div style={{ fontSize: "17px", lineHeight: "40px", color: 'white' }}>마법의 세계를 경험하자! <br /> 애니메이션 스토리를 바탕으로<br /> 몰입도 높은 다양한 퀘스트가 구성되어 있습니다.</div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "60px" }}>
                  <ButtonStyle style={{ width: "200px", fontSize: "18px", color: "white" }}>
                    <span style={{ marginRight: "10px" }}><CaretRightOutlined /></span>
                    <span>영상보기</span>
                  </ButtonStyle>
                </div>
                <div>
                  <ButtonStyle>
                    <SwapLeftOutlined />
                  </ButtonStyle>
                  <ButtonStyle>
                    <SwapRightOutlined />
                  </ButtonStyle>
                </div>
                <div>
                  <div style={{ fontSize: "18px", color: "white" }}>NEXT CONTENTS</div>
                  <div style={{ fontSize: "18px", color: "white", fontWeight: 800 }}>월드 컨텐츠</div>
                </div>
              </div>
            </div>

          </ContainerContent>
        </HomeContainer>
      </MainContainer>
    </Layout>
  )
}

export default StoryMode
