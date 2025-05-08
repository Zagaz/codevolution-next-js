import React from 'react'
import Menu from './menu'

export default function Header() {
  return (
    <header className="bg-blue-300 p-4 shadow-md ">
    <h3 className="text-2xl font-semibold text-gray-700">Main Header</h3>
    <Menu />
  </header>
  )
}
