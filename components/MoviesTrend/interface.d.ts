import { IMovies } from "global-interfaces"

interface IButtonProps {
  active?: boolean
}

interface IMoviesTrend {
  week: IMovies[]
  day: IMovies[]
}
