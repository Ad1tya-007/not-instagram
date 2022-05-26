import React, { useEffect, useState } from 'react'
import Post from './Post'
import faker from 'faker'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const posts = [...Array(20)].map((_, i) => ({
      id: i,
      username: faker.internet.userName(),
      userImg: faker.image.image(),
      postImg: faker.image.image(),
      caption: 'This is awesome',
    }))

    setPosts(posts)
  }, [])

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
