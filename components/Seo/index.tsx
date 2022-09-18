import Head from "next/head"

const Seo = ({ pageTitle }: { pageTitle: string }) => (
  <Head>
    <title>{`${pageTitle} - NextJS Movie DB API`}</title>
    <meta name="description" content="Movie DB API - Sample" />
  </Head>
)

export default Seo
