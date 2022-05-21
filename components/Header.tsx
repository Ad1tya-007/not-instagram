import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex max-w-6xl justify-between">
      <div>
        {/* LOGO LEFT SIDE*/}
        <div className="relative hidden h-24 w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1>SFU.NET</h1>
      </div>
    </div>
  )
}
