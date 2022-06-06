import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

export default function signIn({ providers }) {
  return (
    <>
      <title>SignIn</title>
      <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-500 bg-cover">
        <div className="flex min-h-screen items-center justify-center py-2">
          <div className="">
            <img
              className=" w-80"
              src="https://links.papareact.com/ocw"
              alt=""
            />
            <p className="text-center italic">Welcome to Not-Instagram!!!</p>
          </div>

          <div className="">
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
