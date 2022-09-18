interface IImage {
  src: string
  alt?: string
  layout?: "responsive" | "fill" | "fixed" | "intrinsic" | undefined
  width?: number
  height?: number
  mediaSize?: number
}

interface IImageLoader {
  src: string
  width?: number
  quality?: number
  format?: number
}
