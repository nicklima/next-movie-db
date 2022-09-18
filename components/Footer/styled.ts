import styled from "styled-components"

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  a {
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;

    &:visited,
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
