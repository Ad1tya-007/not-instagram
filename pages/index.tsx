import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  return (
    <div
      className={`h-screen overflow-y-scroll bg-gray-50 scrollbar-hide ${
        !session && 'bg-red-50'
      }`}
    >
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
        />
      </Head>

      {session && <Header />}

      <Feed />
    </div>
  )
}

export default Home
