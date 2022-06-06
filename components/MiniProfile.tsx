import { signOut, useSession } from 'next-auth/react'

export default function MiniProfile() {
  const { data: session, status } = useSession()

  return (
    <div className="ml-10 mt-14 flex items-center border bg-white p-3 shadow-sm">
      <img
        src={session?.user?.image}
        alt="profile-pic"
        className="h-16 w-16 rounded-full bg-blue-500 p-0.5"
      />

      <div className="flex-1 p-3">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm">Welcome to Not-Instagram!</h3>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        className="font-semibold text-blue-400"
      >
        Sign Out
      </button>
    </div>
  )
}
