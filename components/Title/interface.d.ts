import { ReactNode } from "react"

interface ITitleProps {
  small?: boolean
  align?: "left" | "center" | "right"
}

interface ITitle extends ITitleProps {
  children: ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
