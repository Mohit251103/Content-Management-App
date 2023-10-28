import React from 'react'

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a className="text-white text-2xl font-bold mb-4 md:mb-0" href="/">ContentManager</a>
        <div className="flex space-x-4">
          <a className="text-white" href="/">Home</a>
          <a className="text-white" href="/about">About</a>
          <a className="text-white" href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
