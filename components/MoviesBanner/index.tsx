import { IMovies } from "global-interfaces"
import dynamic from "next/dynamic"

const Title = dynamic(() => import("components/Title"))
const ImageAPI = dynamic(() => import("components/Image"))
const MovieInfos = dynamic(() => import("components/MovieInfos"))

import * as Styled from "./styled"

const MovieBanner = ({ movie }: { movie: IMovies }) => {
  const { backdrop_path, title, overview, release_date, vote_average } = movie
  return (
    <Styled.Banner>
      <Styled.Infos>
        <MovieInfos release_date={release_date} vote_average={vote_average} />
        <Title small align="left">
          {title}
        </Title>
        <Styled.Sinopse>{overview}</Styled.Sinopse>
      </Styled.Infos>
      <ImageAPI src={backdrop_path} />
    </Styled.Banner>
  )
}

export default MovieBanner
