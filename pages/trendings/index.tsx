import { Layout, MoviesTrend, Pagination } from "components"
import { fetchAPI } from "lib"

const TrendingPage = ({ movies, pages }: any) => {
  const hasPages = pages.current < pages.total
  return (
    <Layout>
      <MoviesTrend movies={movies} />
      {hasPages && <Pagination pagination={pages} />}
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const trendingResWeek = await fetchAPI("trending/movie/week", { page: page })
  const trendingResDay = await fetchAPI("trending/movie/day", { page: page })

  return {
    props: {
      movies: {
        week: trendingResWeek.results,
        day: trendingResDay.results,
      },
      pages: {
        current: +page,
        limit: 20,
        total: 100,
      },
    },
  }
}

export default TrendingPage
