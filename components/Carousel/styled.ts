import styled from "styled-components"

import { ICarouselDotColors } from "./interface"

export const Carousel = styled.div<ICarouselDotColors>`
  .slick-dots {
    bottom: -40px;

    li {
      height: 10px;
      transition: all 0.5s;
      width: 10px;

      button {
        height: 10px;
        overflow: hidden;
        padding: 0;
        width: 100%;

        &:before {
          background-color: ${({ dotColors, theme }) =>
            dotColors?.nonActive || theme.colors.secondary};
          border-radius: 50%;
          content: "";
          height: 10px;
          opacity: 1;
          transition: all 0.5s;
          width: 100%;
          overflow: hidden;
        }
      }

      &.slick-active {
        width: 28px;

        button:before {
          background-color: ${({ dotColors, theme }) =>
            dotColors?.active || theme.colors.primary};
          border-radius: 5px;
          transform: scaleX(1);
        }
      }
    }
  }
`

export const Arrow = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  height: 30px;
  justify-content: center;
  overflow: hidden;
  width: 30px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:before {
    display: none;
  }
`
