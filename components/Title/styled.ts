import styled from "styled-components"
import { ITitleProps } from "./interface"

export const Title = styled.h2<ITitleProps>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ small }) => (small ? "2.8rem" : "3.8rem")};
  margin-bottom: ${({ small }) => (small ? "10px" : "25px")};
  text-align: ${({ align }) => align};
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: ${({ small }) => (small ? "2.8rem" : "5rem")};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${({ small }) => (small ? "2.8rem" : "7rem")};
  }
`
