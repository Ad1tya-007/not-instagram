import React from 'react'
import {
  DotsHorizontalIcon,
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  ChatIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

export default function Post({ id, username, userImg, postImg, caption }) {
  return (
    <div className="border bg-white">
      <div className="flex items-center p-1">
        <img
          src={userImg}
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <div>
        <img
          src={postImg}
          className="w-full rounded-lg object-cover p-1 shadow-sm"
          alt=""
        />
      </div>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex items-center space-x-3">
          <HeartIcon className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125" />
          <ChatIcon className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125" />
          <PaperAirplaneIcon className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125" />
        </div>
        <BookmarkIcon className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125" />
      </div>
    </div>
  )
}
