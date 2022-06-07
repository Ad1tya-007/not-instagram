export default function Story({ img, username }) {
  return (
    <div>
      <img
        className="p-(1.5px) transform-200 h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain  "
        src={img}
        alt=""
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}
