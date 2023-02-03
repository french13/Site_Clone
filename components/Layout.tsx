import Header from "./Header"
import Footer from "./Footer"
import { Row } from "antd"
import { ReactElement } from "react"

// ReactElemet, ReactNode 둘중에 좀더 미시적인 Element를 사용하였다. Node는 좀더 범위가 크다. 참고 블로그 https://merrily-code.tistory.com/209
interface Props {
    children: ReactElement,
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <div>로고</div>
            <div>
                <div>공식카페</div>
                <div>개발자의 편지</div>
            </div>
            <Row>
                <Header />
            </Row>
            <Row>
                {children}
            </Row>
            <Row>
                <Footer />
            </Row>


        </div>
    )
}

export default Layout