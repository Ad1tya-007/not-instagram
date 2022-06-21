import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartSolidIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from '@firebase/firestore'

import { db } from '../firebase-setup/firebase'
import Moment from 'react-moment'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Post({ id, username, userImg, image, caption }) {
  const [open, setOpen] = useRecoilState(modalState)
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLike, setHasLike] = useState(false)
  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  )

  const likePost = async () => {
    if (hasLike) {
      setHasLike(false)
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uuid))
    } else {
      setHasLike(true)
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uuid), {
        username: session.user.username,
      })
    }
  }

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  )
  useEffect(
    () =>
      setHasLike(
        likes.findIndex((like) => like.id === session?.user?.uuid) !== -1
      ),
    [likes]
  )

  return (
    <div className="border bg-white">
      <div className="flex items-center p-1">
        <img
          src={userImg}
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          alt=""
        />
        <p className="flex-1 font-bold hover:underline">{username}</p>
        <DotsHorizontalIcon onClick={() => setOpen(true)} className="h-5" />
      </div>
      <div>
        <img
          src={image}
          className="w-full rounded-lg object-cover p-1 shadow-sm"
          alt=""
        />
      </div>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex items-center space-x-3">
          {hasLike ? (
            <HeartSolidIcon
              onClick={likePost}
              className="transform-200 east-out h-10 cursor-pointer text-red-500 transition-all hover:scale-125"
            />
          ) : (
            <HeartIcon
              onClick={likePost}
              className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125"
            />
          )}

          <ChatIcon className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125" />
          <PaperAirplaneIcon className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125" />
        </div>
        <BookmarkIcon className="transform-200 east-out h-10 cursor-pointer transition-all hover:scale-125" />
      </div>
      <p className="truncate p-5">
        {likes.length > 0 && (
          <p className="mb-1 font-bold">{likes.length} likes</p>
        )}
        <span className="mr-1 font-bold">{username}</span>
        {caption}
      </p>

      {Boolean(comments.length) && (
        <div className="scrollbar-thumb-black scrollbar-thin ml-5 mb-5 max-h-20 overflow-y-scroll scrollbar-hide">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().userImage}
                className="h-7 rounded-full"
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="transform-all h-7 transition ease-out hover:scale-125" />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          className="flex-1 border-none outline-none focus:ring-0"
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          onClick={sendComment}
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  )
}
