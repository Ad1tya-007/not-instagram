import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Header() {
  const { data: session, status } = useSession()
  const router = useRouter()

  return (
    <div className="border-button-1 sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-5 xl:mt-auto">
        <div className="flex max-w-6xl justify-between">
          <div className=" relative mt-3 h-10 w-10 flex-shrink-0 cursor-pointer items-center ">
            <Image
              src="https://links.papareact.com/jjm"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="max-w-xs">
            <div className="relative rounded-md p-3">
              <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <HomeIcon onClick={() => router.push('/')} className="nav-button" />
            <MenuIcon className="menu-button" />

            {session ? (
              <>
                <div className="nav-button relative">
                  <PaperAirplaneIcon className="nav-button rotate-45" />
                  <div className="absolute -right-0.5 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    3
                  </div>
                </div>

                <PlusCircleIcon className="nav-button" />
                <UserGroupIcon className="nav-button" />
                <HeartIcon className="nav-button" />
                <img
                  onClick={signOut}
                  src={session?.user?.image}
                  alt="profile-pic"
                  className="h-10 rounded-full"
                />
              </>
            ) : (
              <button onClick={signIn}>SignIn</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
