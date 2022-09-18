import { Links } from "components"
import * as Styled from "./styled"

const NavItem = ({ data }: { data: INavItem }) => {
  const { title, link, target } = data
  return (
    <Styled.Item>
      <Links to={`/${link}`} alt={`Go to ${title}`} target={target}>
        {title}
      </Links>
    </Styled.Item>
  )
}

export default NavItem
