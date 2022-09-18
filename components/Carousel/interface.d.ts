import { ReactNode } from "react"
import { Settings, CustomArrowProps } from "react-slick"

interface ICarouselDotColors {
  dotColors?: {
    active?: string
    nonActive?: string
  }
}

interface ICarousel extends Settings, ICarouselDotColors {
  children: ReactNode
}

interface ICarouselArrow extends CustomArrowProps {
  action: "next" | "prev"
}

interface ICarouselObj {
  next: JSX.Element
  prev: JSX.Element
}
