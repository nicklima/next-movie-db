import dynamic from "next/dynamic"
import { ILayout } from "global-interfaces"

const Seo = dynamic(() => import("components/Seo"))
const Header = dynamic(() => import("components/Header"))
const Footer = dynamic(() => import("components/Footer"))

import * as Styled from "./styled"


const Layout = ({ children, pageTitle }: ILayout) => (
  <>
    <Seo pageTitle={pageTitle} />
    <Header />
    <Styled.Main>{children}</Styled.Main>
    <Footer />
  </>
)

export default Layout
