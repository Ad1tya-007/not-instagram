export default function MiniProfile() {
  return (
    <div className="ml-10 mt-14 flex items-center border bg-white p-3 shadow-sm">
      <img
        src="https://avatars.githubusercontent.com/u/50322978?v=4"
        alt="profile-pic"
        className="h-16 w-16 rounded-full border p-1"
      />
      <div className="flex-1 p-3">
        <h2 className="font-bold">Adi</h2>
        <h3 className="text-sm">Welcome to Not-Instagram!</h3>
      </div>
      <button className="font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}
