import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

export default function signIn({ providers }) {
  return (
    <>
      <title>SignIn</title>
      <Header />
      <div className="-mt-40 flex min-h-screen flex-col items-center justify-center py-2">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">Welcome to Not-Instagram!!!</p>
        <div className="mt-40 flex">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="p-3">
              <button
                className="w-30 items-center rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                SignIn with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// server side render
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
