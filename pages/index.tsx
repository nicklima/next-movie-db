import dynamic from "next/dynamic"
import { fetchAPI } from "lib"

const Layout = dynamic(() => import("components/Layout"))
const MoviesList = dynamic(() => import("components/MoviesList"))
const MoviesTrendDay = dynamic(() => import("components/MoviesTrendDay"))

const HomePage = ({ nowPlaying, upcoming, popular, trending }: any) => (
  <Layout pageTitle="Home Page">
    <MoviesTrendDay movies={trending} />
    <MoviesList title="Now Playing" movies={nowPlaying} />
    <MoviesList title="Upcoming Movies" movies={upcoming} />
    <MoviesList title="What's Popular" movies={popular} />
  </Layout>
)

export async function getStaticProps() {
  const trendingRes = await fetchAPI("trending/movie/day")
  const upcomingRes = await fetchAPI("movie/upcoming")
  const nowPlayingRes = await fetchAPI("movie/now_playing")
  const popularRes = await fetchAPI("movie/popular")

  return {
    props: {
      trending: [
        trendingRes.results[0],
        trendingRes.results[1],
        trendingRes.results[2],
      ],
      nowPlaying: nowPlayingRes.results,
      popular: popularRes.results,
      upcoming: upcomingRes.results,
    },
    revalidate: 1,
  }
}

export default HomePage
