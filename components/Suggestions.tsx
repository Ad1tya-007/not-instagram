import faker from 'faker'
import { useState, useEffect } from 'react'

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      img: faker.image.image(),
      username: faker.internet.userName(),
      company: faker.company.companyName(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="ml-10 rounded-sm border border-gray-200 bg-white p-5">
      <div className="mt-1 mb-3 flex justify-between">
        <p className="font-semibold text-gray-400">Suggestions</p>
        <button className="text-gray-400">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            className="p-(1.5px) transform-200 h-10 w-10 cursor-pointer rounded-full border-2 border-red-500 object-contain transition ease-out hover:scale-110"
            src={profile.img}
            alt=""
          />
          <div className="ml-4 flex-1">
            <h2 className="cursor-pointer hover:underline">
              {profile.username}
            </h2>
            <h3 className="text-xs">Works at {profile.company}</h3>
          </div>
          <button className="text-xs text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}
