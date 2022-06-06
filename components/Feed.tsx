import { useSession } from 'next-auth/react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

export default function Feed() {
  return (
    <main className="max-auto mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-20 ">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}
