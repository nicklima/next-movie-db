import styled from "styled-components"

export const MovieList = styled.div`
  margin-top: 60px;

  .slick-track {
    display: flex !important;
    grid-gap: 20px;
  }

  .slick-slide {
    display: flex;
    height: inherit !important;

    & > div {
      height: 100%;
      width: 100%;
    }
  }
`
