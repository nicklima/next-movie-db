import Head from "next/head"

const Seo = ({ pageTitle }: { pageTitle: string }) => (
  <Head>
    <meta name="title" content={`${pageTitle} - NextJS Movie DB API`} />
    <meta name="description" content="Movie DB API - Sample" />
  </Head>
)

export default Seo
