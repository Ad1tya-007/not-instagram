import Posts from './Posts'
import Stories from './Stories'

export default function Feed() {
  return (
    <main className="max-auto mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section></section>
    </main>
  )
}
