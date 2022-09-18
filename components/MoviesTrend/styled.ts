import styled from "styled-components"
import { device } from "styles"
import { IButtonProps } from "./interface"

export const MovieList = styled.div`
  margin-top: 60px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-row-gap: 35px;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`
export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button<IButtonProps>`
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  border-radius: 25px;
  padding: 10px 25px;
  width: 120px;

  border-radius: 25px;
  border: 3px solid;
  color: #fff;
  cursor: pointer;
  margin: 0 5px;
  padding: 10px 25px;
  transition: all 0.5s;
`
