import { IMovies } from "global-interfaces"
import dynamic from "next/dynamic"

const Section = dynamic(() => import("components/Section"))
const Links = dynamic(() => import("components/Links"))
const Title = dynamic(() => import("components/Title"))
const Carousel = dynamic(() => import("components/Carousel"))
const MoviesBanner = dynamic(() => import("components/MoviesBanner"))

import * as Styled from "./styled"

const MoviesTrendDay = ({ movies }: { movies: IMovies[] }) => (
  <Section>
    <Title>Trending Today</Title>
    <Carousel
      arrows={false}
      autoplay={true}
      autoplaySpeed={5000}
      centerPadding="20px"
      dots
      slidesToScroll={1}
      slidesToShow={1}
    >
      {movies?.map((item: any, idx: number) => (
        <MoviesBanner movie={item} key={`movie-${idx}`} />
      ))}
    </Carousel>
    <Styled.ButtonWrapper>
      <Styled.Button>
        <Links to="/trendings">See all</Links>
      </Styled.Button>
    </Styled.ButtonWrapper>
  </Section>
)


export default MoviesTrendDay
