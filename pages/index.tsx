import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/Layout'
import { homeBgVideo, indexPageLogo } from '../public/assets/imgSrc'
import { RightCircleOutlined } from '@ant-design/icons'
import { tabletSize } from '../styles/tabletSize'
import { MainContainer, HomeContainer, boxAnimation } from '../styles/styleComponents'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
const VideoStyle = styled.video`
position : absolute;
object-fit : fill;
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
const PlayVideoDiv = styled.div`
width : 100%;
transition : all 0.5s;
animation : ${boxAnimation} 3s linear ;

&:hover {
  transform : translateX(15px);
}
`
const Imgdiv = styled.div`
animation : ${boxAnimation} 1s linear ;
`
const Titlediv = styled.div`
font-weight : 700;
color  :white;
width : 100%;
animation : ${boxAnimation} 1.2s linear ;
`
const LineDiv = styled.div`
animation : ${boxAnimation} 2s linear ;
width : 100%;
border-bottom : solid 0.5px white;
margin : 20px 0;
`



const Home = () => {


  return (
    <Layout>
      <MainContainer>
        <VideoStyle autoPlay muted playsInline loop>
          <source src={homeBgVideo} type='video/mp4'/>
        </VideoStyle>
        <HomeContainer>
          <ContainerContent  >
            <Imgdiv>
              <img src={indexPageLogo} width={780}/>
            </Imgdiv>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "320px" }}>
              <Titlediv>ブラッククローバーの <br /> 世界をゲームで体験！</Titlediv>
              <LineDiv className='line'></LineDiv>
              <PlayVideoDiv>
              <div style={{ width: "100%", fontSize: "22px", color: "white", fontWeight: 800 }}> <RightCircleOutlined /> トレーラーを見る</div>
              </PlayVideoDiv>
            </div>
          </ContainerContent>
        </HomeContainer>
      </MainContainer>
    </Layout>
  )
}


// export const getStaticProps : GetStaticProps = async ()=>{
//   const data = {

//   }

//   return {
//     props : {
//       item : data,
//     }
//   }
// }

export default Home


