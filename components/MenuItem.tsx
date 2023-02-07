import styled from "styled-components"
import { useState } from 'react'
import Link from "next/link"

const MenuStyle = styled.div`
margin-right : 80px;
height : 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-content: center;
overflow : hidden;
`
const MenuTitleStyle = styled.div`
font-size : 18px;
margin-bottom : 5px;
font-weight : 900;
color : white;
`
const MenuUnderlineStyle: any = styled.div<{ translateX: string | number }>`
height : 3px;
background-color : white;
transform : translateX(${props => props.translateX});
transition : all 0.5s;
`

interface menuItem {
    id: number,
    title: string,
    link: string
}

const MenuItem = ({ item }: any) => {

    const [translateX, setTranslateX] = useState<string | number>('-100%')

    const underLineIn = () => {
        setTranslateX(0)
    }
    const underLineOut = () => {
        setTranslateX("-100%")
    }
    return (
        <MenuStyle onMouseOver={underLineIn} onMouseOut={underLineOut}>
            <MenuTitleStyle><Link href={item.link}>{item.title}</Link></MenuTitleStyle>
            <MenuUnderlineStyle translateX={translateX}></MenuUnderlineStyle>
        </MenuStyle>
    )
}

export default MenuItem