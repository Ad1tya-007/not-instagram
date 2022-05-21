import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>SFU.NET</title>
        <link rel="icon" href="/sfunet.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
