import styled from "styled-components"

export const Banner = styled.div`
  background-color: #000;
  border-radius: 15px;
  height: 480px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.banner};
    background: ${({ theme }) => theme.colors.bannerGradient};
    z-index: 2;
  }

  & > span {
    height: 100% !important;
  }
`
export const Infos = styled.div`
  top: 20%;
  position: absolute;
  z-index: 3;
  padding: 0 5%;
  width: 100%;
`

export const Sinopse = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 480px;
  max-width: 100%;
`
