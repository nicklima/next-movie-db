import { NavItem } from "components"
import SwitchTheme from "components/SwitchTheme"

import menuData from "./data.json"
import * as Styled from "./styled"

const Nav = () => {
  return (
    <Styled.Nav>
      <Styled.List>
        {menuData?.map((item: any, idx: number) => {
          return <NavItem data={item} key={`nav-item-${idx}`} />
        })}
      </Styled.List>
      <SwitchTheme />
    </Styled.Nav>
  )
}

export default Nav
