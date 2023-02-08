import styled from 'styled-components'
import Layout from '../../components/Layout'
import { CaretRightOutlined, SwapLeftOutlined, SwapRightOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { MainContainer, HomeContainer } from '../../styles/styleComponents'
import { tabletSize } from '../../styles/tabletSize'


const VideoStyle = styled.video`
width : 2500px;
`
const ContainerContent = styled.div`
width : 100vw;
padding : 0px 50px;
display : flex;
justify-content : space-between;
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
width : 200px;
margin-right : 10px;
font-size : 22px;
color : white;
@media screen and (${tabletSize}){
  width : 150px;
  height : 40px;
  font-size : 15px;
}
`

const BackArrowStyle = styled.div`
text-align : center;
font-size : 20px;
color : white;
@media screen and (${tabletSize}){
  display : none;
}
`

const ArrowStyle = styled.div`
  width : 50px;
  height : 50px;
  background-color : rgba(0,0,0,0.5);
  border-radius : 50px;
  display : none;
  justify-content : center;
  align-items : center;
  font-size : 20px;
  color : white;
  @media screen and (${tabletSize}){
    display : flex;
  }
`

const NextPageButton = styled.div`
display : flex;
align-items : center;
margin-left : 60px;
@media screen and (${tabletSize}){
  display : none;
}
`
const StoryModeBox = styled.div`
width : 900px;
height : 450px;
@media screen and (${tabletSize}){
  text-align : center;
  display : flex;
  flex-direction : column;
  justify-content : flex-start;
  align-items : center;

}
`
const StoryModeBoxContext = styled.div`
margin-bottom : 30px;

& > h1 {
  font-size : 40px;
  color : white;
}
& > div {
  font-size : 17px;
  line-height : 40px;
  color : white;
}

@media screen and (${tabletSize}){
  & > h1 {
    font-size : 25px;
  }
  & > div {
    font-size : 14px;
    line-height : 30px;
    color : white;
  }
}
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
              <BackArrowStyle>
                <SwapLeftOutlined style={{ fontSize: "30px" }} />돌아가기
              </BackArrowStyle>
              <ArrowStyle>
              <ArrowLeftOutlined />
              </ArrowStyle>
            </div>
            <StoryModeBox>
              <ContentsTitle>contents</ContentsTitle>
              <ContentsSubTitle style={{ marginBottom: "70px" }}>
                <div style={{ position: "absolute", width: "100%", top: 0, zIndex: 2 }}>콘텐츠</div>
                <div style={{ position: "absolute", width: "100%", borderBottom: "solid 20px rgba(255,255,255,0.3)", bottom: 0, zIndex: 1 }}></div>
              </ContentsSubTitle>
              <StoryModeBoxContext style={{ marginBottom: '30px' }}>
                <h1>스토리모드</h1>
                <div>마법의 세계를 경험하자! <br /> 애니메이션 스토리를 바탕으로<br /> 몰입도 높은 다양한 퀘스트가 구성되어 있습니다.</div>
              </StoryModeBoxContext>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <ButtonStyle>
                    <span style={{ marginRight: "10px" }}><CaretRightOutlined /></span>
                    <span>영상보기</span>
                  </ButtonStyle>
                </div>
                <NextPageButton>
                  <div>
                    <ButtonStyle style={{width : '60px'}}>
                      <SwapLeftOutlined  />
                    </ButtonStyle>
                    <ButtonStyle style={{width : '60px'}}>
                      <SwapRightOutlined />
                    </ButtonStyle>
                  </div>
                  <div>
                    <div style={{ fontSize: "18px", color: "white" }}>NEXT CONTENTS</div>
                    <div style={{ fontSize: "18px", color: "white", fontWeight: 800 }}>월드 컨텐츠</div>
                  </div>
                </NextPageButton>
              </div>
            </StoryModeBox>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "200px" }}>
              <ArrowStyle>
              <ArrowRightOutlined />
              </ArrowStyle>
            </div>

          </ContainerContent>
        </HomeContainer>
      </MainContainer>
    </Layout>
  )
}

export default StoryMode
