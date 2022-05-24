import faker from 'faker'
import { useState, useEffect } from 'react'
import Story from './Story'

export default function Stories() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-2 flex space-x-6 overflow-x-scroll rounded-sm border-gray-200 p-6 scrollbar-hide">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img="https://avatars.githubusercontent.com/u/50322978?v=4"
          username={profile.username}
        />
      ))}
    </div>
  )
}
