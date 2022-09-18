import styled from "styled-components"

export const Movie = styled.div`
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s;
`

export const FigureHolder = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.text};
`

export const Figure = styled.figure`
  height: 470px;
  position: relative;

  & > span {
    height: 100% !important;
  }
`
