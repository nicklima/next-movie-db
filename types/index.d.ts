declare module "global-interfaces" {
  import { ReactNode } from "react"

  export interface ILayout {
    children: ReactNode
  }

  export interface IMovies {
    adult: boolean
    backdrop_path: string
    genre_ids: [number]
    id: number
    media_type: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
}
