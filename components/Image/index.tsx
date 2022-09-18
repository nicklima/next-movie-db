import NextImage from "next/image"
import { getApiImageUrl } from "lib"

const ImageAPI = ({ src, layout, width, height, alt, mediaSize }: IImage) => {
  const imgW = width || 500
  const imgH = height || 470
  const imgSrc = getApiImageUrl(src, mediaSize)

  const loader = ({ src, width, quality, format }: IImageLoader) => {
    return `${src}?w=${width}&q=${quality || 75}&f=${format || "webp"}`
  }

  if (layout === "fill") {
    return (
      <NextImage
        alt={alt || ""}
        blurDataURL={imgSrc}
        layout="fill"
        loader={loader}
        objectFit="cover"
        placeholder="blur"
        src={imgSrc}
      />
    )
  }

  return (
    <NextImage
      alt={alt || ""}
      blurDataURL={imgSrc}
      layout={layout || "responsive"}
      loader={loader}
      objectFit="cover"
      placeholder="blur"
      src={imgSrc}
      width={imgW}
      height={imgH}
    />
  )
}

export default ImageAPI
