import Header from "./Header"
import Footer from "./Footer"
import { Row } from "antd"
import { ReactElement } from "react"
import styled from "styled-components"
import { logo } from "../public/assets/imgSrc"
import LinkWrapper from "./LinkWrapper"
import Link from "next/link"
import { tabletSize } from "../styles/tabletSize"
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
@media screen and (${tabletSize}){
    display : none;
  }
`

interface Props {
    children: ReactElement,
}

const Layout = ({ children }: Props) => {
    return (
        <Wrapper>
            <Logo><Link href='/'><img src={logo} decoding="async" alt="logo" width={170} height={70} /></Link></Logo>
            <Header />
            <LinkWrapper />
            {children}
            <Footer />
        </Wrapper>
    )
}

export default Layout