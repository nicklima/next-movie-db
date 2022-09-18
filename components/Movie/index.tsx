import dynamic from "next/dynamic"
import { IMovies } from "global-interfaces"

const ImageAPI = dynamic(() => import("components/Image"))
const Title = dynamic(() => import("components/Title"))
const MovieInfos = dynamic(() => import("components/MovieInfos"))

import * as Styled from "./styled"

const Movie = ({ movie }: { movie: IMovies }) => {
  const { title, release_date, vote_average, poster_path } = movie
  return (
    <Styled.Movie>
      <Styled.FigureHolder>
        <Styled.Figure>
          <ImageAPI src={poster_path} layout="fill" mediaSize={500} />
        </Styled.Figure>
      </Styled.FigureHolder>
      <MovieInfos release_date={release_date} vote_average={vote_average} />
      <Title small align="left">
        {title}
      </Title>
    </Styled.Movie>
  )
}

export default Movie
