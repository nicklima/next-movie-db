import dynamic from "next/dynamic"
import { useState } from "react"

import { IMovies } from "global-interfaces"
import { IMoviesTrend } from "./interface"

import * as Styled from "./styled"

const Section = dynamic(() => import("components/Section"))
const Title = dynamic(() => import("components/Title"))
const Movie = dynamic(() => import("components/Movie"))

const MoviesTrend = ({ movies }: { movies: IMoviesTrend }) => {
  const [trendsBy, setTrendsBy] = useState<string>("day")
  const listMovies = movies[trendsBy as keyof IMoviesTrend]

  const renderButton = (trend: string) => (
    <Styled.Button
      onClick={() => setTrendsBy(trend.toLowerCase())}
      active={trendsBy === trend.toLowerCase()}
    >
      {trend}
    </Styled.Button>
  )

  return (
    <Section>
      <Title>Trendings</Title>
      <Styled.ButtonList>
        {renderButton("Day")}
        {renderButton("Week")}
      </Styled.ButtonList>
      <Styled.MovieList>
        {listMovies?.map((item: IMovies, idx: number) => (
          <Movie movie={item} key={`movie-${idx}`} />
        ))}
      </Styled.MovieList>
    </Section>
  )
}

export default MoviesTrend
