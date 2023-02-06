import Header from "./Header"
import Footer from "./Footer"
import { Row } from "antd"
import { ReactElement } from "react"
import styled from "styled-components"
import { logo } from "../public/assets/imgSrc"
import LinkWrapper from "./LinkWrapper"
import Link from "next/link"

const Wrapper = styled.div`
width : 100vw;
height : 100vh;
position : relative;
`

const Logo = styled.div`
position : absolute;
width : 160px;
height : 70px;
z-index : 10;
top : 20px;
left : 80px;
`


// ReactElemet, ReactNode 둘중에 좀더 미시적인 Element를 사용하였다. Node는 좀더 범위가 크다. 참고 블로그 https://merrily-code.tistory.com/209
interface Props {
    children: ReactElement,
}

const Layout = ({ children }: Props) => {
    return (
        <Wrapper>
            <Logo><Link href='/'><img src={logo} decoding="async" alt="logo" width={170} height={70}/></Link></Logo>
            <Header />
            <LinkWrapper/>
            <Row>
                {children}
            </Row>
            <Footer/>
        </Wrapper>
    )
}

export default Layout