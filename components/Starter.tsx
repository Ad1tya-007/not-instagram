import React from 'react'
import { useRouter } from 'next/router'

export default function Starter() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <img
        className="-mt-20 w-80"
        src="https://links.papareact.com/ocw"
        alt=""
      />
      <p className="font-xs text-red animate-pulse italic">
        Welcome to Not-Instagram!!!
      </p>

      <button
        className="mt-5 rounded-lg bg-blue-500 p-3 text-white"
        onClick={() => router.push('/auth/signin')}
      >
        SignIn
      </button>
    </div>
  )
}
