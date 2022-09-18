import { getRelaseDate, getVotes } from "lib"
import { Date, Star } from "icons"

import * as Styled from "./styled"

const MovieInfos = ({ release_date, vote_average }: IMovieInfos) => {
  return (
    <Styled.Info>
      <Styled.Grid>
        <Date />
        <Styled.Text>{getRelaseDate(release_date)}</Styled.Text>
      </Styled.Grid>
      <Styled.Grid>
        <Star />
        <Styled.Text>{getVotes(vote_average)}</Styled.Text>
      </Styled.Grid>
    </Styled.Info>
  )
}

export default MovieInfos
