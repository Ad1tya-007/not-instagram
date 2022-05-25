import React from 'react'
import Post from './Post'

const posts = [
  {
    id: 1,
    username: 'Adi',
    userImg: 'https://avatars.githubusercontent.com/u/50322978?v=4',
    postImg: 'https://avatars.githubusercontent.com/u/50322978?v=4',
    caption: 'This is awesome',
  },
  {
    id: 2,
    username: 'Adi',
    userImg: 'https://avatars.githubusercontent.com/u/50322978?v=4',
    postImg: 'https://avatars.githubusercontent.com/u/50322978?v=4',
    caption: 'This is awesome',
  },
  {
    id: 3,
    username: 'Adi',
    userImg: 'https://avatars.githubusercontent.com/u/50322978?v=4',
    postImg: 'https://avatars.githubusercontent.com/u/50322978?v=4',
    caption: 'This is awesome',
  },
]

export default function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          postImg={post.postImg}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
