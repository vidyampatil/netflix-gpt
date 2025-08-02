import React from 'react'

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[20%] w-screen aspect-video pt-36 absolute px-24 text-white bg-gradient-to-r from-black via-transparent to-transparent">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h2 className="py-6 text-lg w-1/3">{overview}</h2>
      <div>
        <button className="bg-white text-black font-bold p-2 px-8 rounded-lg text-xl hover:bg-opacity-80">▶ Play</button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-8 rounded-lg text-xl hover:bg-opacity-80">ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle