import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import { useSession } from 'next-auth/react'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  return (
    <div
      className={`h-screen overflow-y-scroll bg-gray-50 scrollbar-hide ${
        !session && 'bg-gradient-to-tr from-yellow-500 to-fuchsia-500'
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
      <Modal />
    </div>
  )
}

export default Home
