import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feeds from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
        />
      </Head>

      <Header />
      <Feeds />
    </div>
  )
}

export default Home
