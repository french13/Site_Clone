import styled from "styled-components"
import { PlusCircleOutlined } from '@ant-design/icons'
import { tabletSize } from "../styles/tabletSize"
import Link from "next/link"
import { boxAnimation } from "../styles/styleComponents"
import TabletContentEmptyCard from "./TabletContentEmptyCard"

const TabletContentCards = styled.ul`
padding : 0;
display : none;
animation : ${boxAnimation} 1s linear;
@media screen and (${tabletSize}){
    display : block;
  }

`

const TabletContentCard = styled.li`
width : 300px;
height : 90px;
margin-bottom : 10px;
list-style : none;
position : relative;

& > img {
  position : absolute;
  top : 0;
  left : 0;
}
& > div {
  width : 100%;
  height : 100%;
  position : absolute;
  top : 0;
  left : 0;
  z-index : 1;
  display : flex;
  justify-content : left;
  align-items : center;
  font-size : 20px;
  font-weight : 900;
  color : white;
  & > span {
    margin-left :20px;
  }
}
`



const TabletContentItems = () => {
  return (
    <TabletContentCards>
      <Link href='/contents/storyMode'>
        <TabletContentCard>
          <img src="https://bclover-mobile.vicgame.kr/image/contents/m_contents_thum_story.webp" width='100%' alt="" />
          <div>
            <span><PlusCircleOutlined style={{ fontSize: '30px' }} /></span>
            <span>ストーリーモード</span>
          </div>
        </TabletContentCard>
      </Link>
      <TabletContentCard>
        <img src="https://bclover-mobile.vicgame.kr/image/contents/m_contents_thum_world.webp" width='100%' alt="" />
        <div>
          <span><PlusCircleOutlined style={{ fontSize: '30px' }} /></span>
          <span>ワールド</span>
        </div>
      </TabletContentCard>
      <TabletContentEmptyCard />
      <TabletContentEmptyCard />
      <TabletContentEmptyCard />
    </TabletContentCards>
  )
}

export default TabletContentItems