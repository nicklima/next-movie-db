import { ITitle } from "./interface"
import * as Styled from "./styled"

const Title = ({ children, as, small, align }: ITitle) => (
  <Styled.Title as={as} small={small} align={align || "center"}>
    {children}
  </Styled.Title>
)

export default Title
