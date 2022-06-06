import React from 'react'

export default function Starter() {
  return (
    <div className="">
      <div className="flex min-h-screen flex-col items-center justify-center  py-2">
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
          onClick={() => window.location.replace('/auth/signin')}
        >
          SignIn
        </button>
      </div>
    </div>
  )
}
