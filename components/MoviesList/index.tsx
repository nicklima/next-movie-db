import dynamic from "next/dynamic"

const Section = dynamic(() => import("components/Section"))
const Title = dynamic(() => import("components/Title"))
const Carousel = dynamic(() => import("components/Carousel"))
const Movie = dynamic(() => import("components/Movie"))

import { settings } from "./settings"
import { IMoviesList } from "./interface"
import * as Styled from "./styled"

const MoviesList = ({ movies, title }: IMoviesList) => (
  <Section>
    <Title>{title}</Title>
    <Styled.MovieList>
      <Carousel
        arrows={false}
        autoplay={false}
        autoplaySpeed={5000}
        centerPadding="20px"
        dots
        slidesToScroll={5}
        slidesToShow={5}
        responsive={settings}
      >
        {movies?.map((item: any, idx: number) => (
          <Movie movie={item} key={`movie-${idx}`} />
        ))}
      </Carousel>
    </Styled.MovieList>
  </Section>
)

export default MoviesList
