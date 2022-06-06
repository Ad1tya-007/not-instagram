import faker from 'faker'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Story from './Story'
import { PlusCircleIcon } from '@heroicons/react/solid'

export default function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session, status } = useSession()

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      img: faker.image.image(),
      username: faker.internet.userName(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-2 flex space-x-6 overflow-x-scroll rounded-sm border-gray-200 p-6 scrollbar-hide">
      <div>
        <Story img={session?.user?.image} username={session?.user?.username} />
        <PlusCircleIcon className="absolute -mt-9 ml-10 h-5 w-5 text-blue-500" />
      </div>

      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.img} username={profile.username} />
      ))}
    </div>
  )
}
