import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import { ICarousel, ICarouselArrow, ICarouselObj } from "./interface"
import { Arrow } from "icons"

import * as Styled from "./styled"

const Arrows = ({ action, ...props }: ICarouselArrow) => {
  const arrows = {
    next: <Arrow next />,
    prev: <Arrow />,
  } as ICarouselObj

  return (
    <Styled.Arrow className={props.className} onClick={props.onClick}>
      {arrows[action]}
    </Styled.Arrow>
  )
}

const Carousel = ({ children, dotColors, ...props }: ICarousel) => {
  const settings = {
    ...props,
    nextArrow: <Arrows action="next" />,
    prevArrow: <Arrows action="prev" />,
  }

  return (
    <Styled.Carousel dotColors={dotColors}>
      <Slider {...settings}>{children}</Slider>
    </Styled.Carousel>
  )
}

export default Carousel
